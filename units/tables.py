from .models import Unit
from battles.tables import col_style

from django.utils.safestring import mark_safe
from django.utils.html import format_html, escape
from django.utils import six

from django_tables2 import Table
from django_tables2.columns import BooleanColumn
from django_tables2.utils import AttributeDict, OrderByTuple

from types import MethodType


class UnitTable(Table):

    class Meta:
        model = Unit
        exclude = ['plural']
        attrs = {'class': 'paleblue'}

    def __init__(self, *args, **kwargs):
        super(UnitTable, self).__init__(*args, **kwargs)

        def bool_colored_render(self, value, record, bound_column):
            value = self._get_bool_value(record, value, bound_column)
            if value:
                color = ' style="color: green; font-size: 150%;" '
            else:
                color = ' style="color: red; font-size: 80%;" '

            text = self.yesno[int(not value)]
            return mark_safe('<a %s>%s</a>' % (color, text))

        for key in self.base_columns.keys():
            col = self.base_columns[key]
            if key not in ['name', 'id']:
                col.attrs.update(col_style())
                if type(col) is BooleanColumn:
                    col.render = MethodType(bool_colored_render, col)
            if key.startswith('b_'):
                col.order_by = OrderByTuple(('-' + key,))

