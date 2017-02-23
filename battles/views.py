from django.shortcuts import render
from units.filters import UnitFilterDouble
from units.forms import UnitFilterDoubleFormHelper
from units.models import Unit
from .models import Fights
from .tables import FightsTable
from django_tables2 import RequestConfig


def index(request):
    column_filter_request = request.GET.copy()
    for (k, v) in column_filter_request.items():
        if k[:4] == 'row_':
            column_filter_request.pop(k)

    row_filter_request = request.GET.copy()
    for (k, v) in row_filter_request.items():
        if k[:4] == 'col_':
            row_filter_request.pop(k)

    # column_filter_request = {k: v for (k, v) in request.GET.items() if k[:4] == 'col_'}
    # row_filter_request = {k: v for (k, v) in request.GET.items() if k[:4] == 'row_'}

    filter_form = UnitFilterDouble(request.GET, Unit.objects.all())
    filter_form.form.helper = UnitFilterDoubleFormHelper()

    column_filter = UnitFilterDouble(column_filter_request, Unit.objects.all())
    vs_units = column_filter.qs
    vs_units_pks = set(map(lambda x: x.pk, vs_units))

    data = Fights.objects.all()
    base_value = sum(1 / getattr(data.get(pk=1), 'vs' + str(i)) for i in vs_units_pks)

    row_filter = UnitFilterDouble(row_filter_request, Unit.objects.all())
    units_to_show = set(map(lambda x: x.pk, row_filter.qs))

    table_data = []
    for x in data:
        if x.pk in units_to_show:
            x_value = int(sum(1 / getattr(x, 'vs' + str(i)) for i in vs_units_pks) / base_value * 80) \
                if vs_units_pks else 0
            x_dict = {'id': x.id, 'unit': x.unit, 'value': x_value}
            for i in xrange(1, 142):
                attr_name = 'vs' + str(i)
                x_dict[attr_name] = getattr(x, attr_name)
            table_data.append(x_dict)

    table = FightsTable(data=table_data)
    table.exclude = ['vs' + str(x) for x in xrange(1, 142) if x not in vs_units_pks]

    RequestConfig(request, paginate={'per_page': 28}).configure(table)

    return render(request, 'battles/index.html', {'table': table, 'form': filter_form.form})
