from django import forms
from django.shortcuts import render
from django.views.generic import View

from django_tables2 import RequestConfig
from django_tables2.export.export import TableExport

from .models import Fights
from .tables import FightsTable
from .forms import FightForm, BalanceForm

from units.filters import UnitFilterDouble
from units.forms import UnitFilterDoubleFormHelper
from units.models import Unit

from h3_fight_sim.unit import make_unit, Stack
from h3_fight_sim.combat import fight, find_balance


class IndexView(View):
    template_name = 'battles/index.html'

    def get(self, request):
        column_filter_request = request.GET.copy()
        for (k, v) in list(column_filter_request.items()):
            if k[:4] == 'row_':
                column_filter_request.pop(k)

        row_filter_request = request.GET.copy()
        for (k, v) in list(row_filter_request.items()):
            if k[:4] == 'col_':
                row_filter_request.pop(k)

        filter_request = request.GET.copy()

        # initial filter to avoid long page loading
        if not filter_request:  # if not submitted
            filter_request['col_town'] = 2
            column_filter_request['col_town'] = 2
            filter_request['row_town'] = 1
            row_filter_request['row_town'] = 1

        filter_form = UnitFilterDouble(filter_request, Unit.objects.all())
        filter_form.form.fields['checkbox_growth'] = forms.ChoiceField(
            widget=forms.CheckboxInput,
            label='Consider growth?',
            required=False,
            choices=[(True, "Yes"), (False, "No")])
        filter_form.form.fields['checkbox_gold_cost'] = forms.ChoiceField(
            widget=forms.CheckboxInput,
            label='Consider cost?',
            required=False,
            choices=[(True, "Yes"), (False, "No")])
        filter_form.form.helper = UnitFilterDoubleFormHelper()

        column_filter = UnitFilterDouble(
            column_filter_request, Unit.objects.all())
        col_units = column_filter.qs
        col_units_pks = [x.pk for x in col_units]

        data = Fights.objects.all()

        row_filter = UnitFilterDouble(row_filter_request, Unit.objects.all())
        row_units = set([x.pk for x in row_filter.qs])

        growths = [x.growth + x.horde_growth for x in Unit.objects.all()]

        costs = [x.gold_cost for x in Unit.objects.all()]

        pikeman_fights = [getattr(data.get(pk=1), 'vs' + str(i))
                          for i in col_units_pks]

        if request.GET.get('checkbox_growth', None) == 'on':
            for i in range(len(pikeman_fights)):
                pikeman_fights[i] = pikeman_fights[i] / \
                    growths[0] * growths[col_units_pks[i]-1]
        if request.GET.get('checkbox_gold_cost', None) == 'on':
            for i in range(len(pikeman_fights)):
                pikeman_fights[i] = pikeman_fights[i] * \
                    costs[0] / costs[col_units_pks[i]-1]
        base_value = sum(1 / x for x in pikeman_fights)

        table_data = []
        for x in data:
            if x.pk in row_units:
                x_dict = {'id': x.id, 'unit': x.unit, 'value': None}
                for i in range(1, 142):
                    attr_name = 'vs' + str(i)
                    x_dict[attr_name] = getattr(x, attr_name)
                    if request.GET.get('checkbox_growth', None) == 'on':
                        x_dict[attr_name] = x_dict[attr_name] / \
                            growths[x.pk-1] * growths[i-1]
                    if request.GET.get('checkbox_gold_cost', None) == 'on':
                        x_dict[attr_name] = x_dict[attr_name] * \
                            costs[x.pk-1] / costs[i-1]
                if col_units_pks:
                    x_value = int(
                        sum(1 / x_dict['vs' + str(i)]
                            for i in col_units_pks) / base_value * 80)
                else:
                    x_value = 0
                x_dict['value'] = x_value
                x_dict['gold_cost'] = costs[x.pk-1]
                x_dict['tot_growth'] = growths[x.pk-1]
                table_data.append(x_dict)

        table = FightsTable(data=table_data)
        table.exclude = ['vs' + str(x)
                         for x in range(1, 142) if x not in col_units_pks]

        RequestConfig(request, paginate={'per_page': 28}).configure(table)

        export_format = request.GET.get('_export', None)
        if export_format == 'Export':
            export_format = 'csv'
        if TableExport.is_valid_format(export_format):
            exporter = TableExport(export_format, table)
            return exporter.response('battles.{}'.format(export_format))

        return render(request, self.template_name,
                      {'table': table, 'form': filter_form.form})


class CombatView(View):
    template_name = "battles/combat.html"

    def get(self, request):
        res1 = ''
        res2 = ''

        if request.GET:
            form = FightForm(request.GET)

            if form.is_valid():
                data = form.cleaned_data
                A = Stack(make_unit(data['unit1'].name), data['count1'])
                B = Stack(make_unit(data['unit2'].name), data['count2'])
                result = fight(A, B, data['num_fights'])
                res1 = A.name + ': %i' % result[A.name][0]
                res2 = B.name + ': %i' % result[B.name][0]

        else:
            form = FightForm()

        return render(request, self.template_name,
                      {'form': form, 'res1': res1, 'res2': res2})


class BalanceView(View):
    template_name = "battles/balance.html"

    def get(self, request):
        res = ''

        if request.GET:
            form = BalanceForm(request.GET)

            if form.is_valid():
                data = form.cleaned_data
                countA, countB = data['count1'], data['count2']
                nameA, nameB = data['unit1'].name, data['unit2'].name
                count1 = countA or countB
                idxA = 1 if countB else 0
                idxB = (idxA + 1) % 2
                name1 = nameA if count1 == countA else nameB
                name2 = nameB if count1 == countA else nameA
                result = find_balance(
                    name1, name2, data['num_fights'], startA=count1)
                res = u'{:g} {} \u2248 {:g} {}'.format(
                    round(result[idxA], 3), nameA,
                    round(result[idxB], 3), nameB)
        else:
            form = BalanceForm()

        return render(request, self.template_name, {'form': form, 'res': res})
