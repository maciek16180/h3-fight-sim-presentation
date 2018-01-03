from django import forms
from django.shortcuts import render
from django.views.generic import View
from django.views.decorators.cache import cache_control

from django_tables2 import RequestConfig
from django_tables2.export.export import TableExport

from .models import Fights
from .tables import FightsTable
from .forms import FightForm, BalanceForm

from units.filters import UnitFilterDouble
from units.forms import UnitFilterDoubleFormHelper
from units.models import Unit

from time import time


fights_data = Fights.objects.all()
unit_names = list(Unit.objects.order_by('id').values_list('name', flat=True))

all_pikeman_fights = [getattr(fights_data.get(pk=1), 'vs' + str(u.pk))
                      for u in Unit.objects.order_by('id')]

growths = [x.growth + x.horde_growth for x in Unit.objects.order_by('id')]
costs = [x.gold_cost for x in Unit.objects.order_by('id')]


class IndexView(View):
    template_name = 'battles/index.html'

    def __init__(self, *args, **kwargs):
        super(IndexView, self).__init__(*args, **kwargs)

    def get(self, request):
        t0 = time()

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
            request.GET = filter_request

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
        filter_form.form.fields['value_alt'] = forms.ChoiceField(
            widget=forms.CheckboxInput,
            label='Alt. value calculation',
            required=False,
            choices=[(True, "Yes"), (False, "No")])
        filter_form.form.helper = UnitFilterDoubleFormHelper()

        column_filter = UnitFilterDouble(
            column_filter_request, Unit.objects.all())
        col_units = column_filter.qs
        col_units_pks = [x.pk for x in col_units]

        fights_data = Fights.objects.all()

        row_filter = UnitFilterDouble(row_filter_request, Unit.objects.all())
        row_units = set([x.pk for x in row_filter.qs])

        pikeman_fights = [all_pikeman_fights[pk-1] for pk in col_units_pks]

        if request.GET.get('checkbox_growth', None) == 'on':
            pikeman_fights = [
                pikeman_fights[i] / growths[0] * growths[col_units_pks[i]-1]
                for i in range(len(pikeman_fights))]

        if request.GET.get('checkbox_gold_cost', None) == 'on':
            pikeman_fights = [
                pikeman_fights[i] * costs[0] / costs[col_units_pks[i]-1]
                for i in range(len(pikeman_fights))]

        base_value = sum(1 / x for x in pikeman_fights)

        table_data = []

        for x in fights_data:
            if x.pk in row_units:
                x_dict = {'id': x.id, 'unit': unit_names[
                    x.pk-1], 'value': None}
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
                    if request.GET.get('value_alt', None) == 'on':
                        x_value = int(
                            sum(pikeman_fights[j] / x_dict['vs' + str(i)]
                                for j, i in enumerate(col_units_pks)
                                ) / len(col_units_pks) * 80)
                    else:
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

        print(time() - t0)
        t0 = time()

        result = render(request, self.template_name,
                        {'table': table, 'form': filter_form.form})
        print(time() - t0)
        return result


class CombatView(View):
    template_name = "battles/combat.html"

    def get(self, request):
        valid = False

        if request.GET:
            form = FightForm(request.GET)
            valid = form.is_valid()
        else:
            form = FightForm()

        env = {'form': form, 'valid': valid}

        if valid:
            data = form.cleaned_data
            env.update({
                'unit1': data['unit1'].name, 'count1': data['count1'],
                'unit2': data['unit2'].name, 'count2': data['count2'],
                'num_fights': data['num_fights'],
                'plural1': Unit.objects.get(name=data['unit1'].name).plural,
                'plural2': Unit.objects.get(name=data['unit2'].name).plural})

        return render(request, self.template_name, env)


class BalanceView(View):
    template_name = "battles/balance.html"

    def get(self, request):
        valid = False

        if request.GET:
            form = BalanceForm(request.GET)
            valid = form.is_valid()
        else:
            form = BalanceForm()

        env = {'form': form, 'valid': valid}

        if valid:
            data = form.cleaned_data
            env.update({
                'unit1': data['unit1'].name, 'count1': data['count1'],
                'unit2': data['unit2'].name, 'count2': data['count2'],
                'num_fights': data['num_fights'],
                'plural1': Unit.objects.get(name=data['unit1'].name).plural,
                'plural2': Unit.objects.get(name=data['unit2'].name).plural})

        return render(request, self.template_name, env)
