from django.shortcuts import render
from django_tables2 import RequestConfig
from django.views.generic import TemplateView

from .models import Unit
from .tables import UnitTable
from .filters import UnitFilter
from .forms import UnitFilterFormHelper
from .utils import PagedFilteredTableView

# class IndexView(generic.ListView):
#     template_name = 'units/index.html'
#
#     def get_queryset(self):
#         return Unit.objects.all()


# def index(request):
#     table = UnitTable(Unit.objects.all())
#     RequestConfig(request).configure(table)
#     return render(request, 'units/index.html', {'table': table})


class IndexView(PagedFilteredTableView):

    model = Unit
    table_class = UnitTable
    template_name = 'units/index.html'
    paginate_by = 28
    filter_class = UnitFilter
    formhelper_class = UnitFilterFormHelper
