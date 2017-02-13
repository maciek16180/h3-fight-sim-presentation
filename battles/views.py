from django.shortcuts import render
from units.filters import UnitFilter
from units.forms import UnitFilterFormHelper
from units.models import Unit
from .models import Fights
from .tables import FightsTable
from django_tables2 import RequestConfig


def index(request):
    qs = Unit.objects.all()
    filter_form = UnitFilter(request.GET, queryset=qs)
    filter_form.form.helper = UnitFilterFormHelper()
    filter_form.form.helper.form_action = 'details'
    return render(request, 'battles/index.html', {'form': filter_form.form})


def details(request):
    vs_units = UnitFilter(request.GET, Unit.objects.all()).qs
    vs_units_pks = set(map(lambda x: x.pk, vs_units))
    data = Fights.objects.all()
    base_value = sum(1 / getattr(data.get(pk=1), 'vs' + str(i)) for i in vs_units_pks)

    table_data = []
    for x in data:
        x_value = int(sum(1 / getattr(x, 'vs' + str(i)) for i in vs_units_pks) / base_value * 80)
        x_dict = {'id': x.id, 'unit': x.unit, 'value': x_value}
        for i in xrange(1, 142):
            attr_name = 'vs' + str(i)
            x_dict[attr_name] = getattr(x, attr_name)
        table_data.append(x_dict)

    table = FightsTable(data=table_data)
    table.exclude = ['vs' + str(x) for x in xrange(1, 142) if x not in vs_units_pks]
    RequestConfig(request, paginate={'per_page': 28}).configure(table)
    return render(request, 'battles/details.html', {'table': table})
