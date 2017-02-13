from django_tables2 import Table, Column, A
from .models import Fights
from copy import deepcopy
from django_tables2.utils import OrderByTuple


class FightsTable(Table):
    class Meta:
        attrs = {'class': 'paleblue'}
        # model = Fights

    # def __init__(self, values, *args, **kwargs):
    #     self._bc = deepcopy(self.base_columns)
    #
    #     def new_render(self, value):
    #         return '%.3f' % value
    #
    #     for col in self.base_columns.values()[2:]:
    #         ftype = type(Column.render)
    #         col.render = ftype(new_render, col, Column)
    #
    #     self.base_columns['value'] = values
    #
    #     super(FightsTable, self).__init__(*args, **kwargs)
    #     type(self).base_columns = self._bc

    def __init__(self, *args, **kwargs):
        self.base_columns['id'] = Column()
        self.base_columns['unit'] = Column(order_by='unit.name')

        def new_render(_, value):
            return '%.3f' % value

        ftype = type(Column.render)

        for vs_field in Fights._meta.fields[2:]:
            self.base_columns[vs_field.name] = Column(vs_field.verbose_name, attrs={'td': {'align': 'center'}})
            col = self.base_columns[vs_field.name]
            col.render = ftype(new_render, col, Column)

        self.base_columns['value'] = Column(attrs={'td': {'align': 'right'}})

        super(FightsTable, self).__init__(*args, **kwargs)
