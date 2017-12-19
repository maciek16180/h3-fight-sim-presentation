from django_tables2.export.views import ExportMixin

from .models import Unit
from .tables import UnitTable
from .filters import UnitFilter
from .forms import UnitFilterFormHelper
from .utils import PagedFilteredTableView


class IndexView(ExportMixin, PagedFilteredTableView):
    model = Unit
    table_class = UnitTable
    template_name = 'units/index.html'
    paginate_by = 28
    filter_class = UnitFilter
    formhelper_class = UnitFilterFormHelper
