from django_tables2 import Table, Column
from .models import Fights
from django.utils.safestring import mark_safe


class FightsTable(Table):

    class Meta:
        attrs = {'class': 'paleblue'}

    def __init__(self, *args, **kwargs):
        self.base_columns['id'] = Column()
        self.base_columns['unit'] = Column(order_by='unit.name')

        def new_render(field_name):
            return lambda _, value: mark_safe('<div title=\'placeholder tooltip\'>%.3f</div>'
                                              % (value,))

        ftype = type(Column.render)

        for vs_field in Fights._meta.fields[2:]:
            self.base_columns[vs_field.name] = Column(vs_field.verbose_name,
                                                      attrs={'td': {'align': 'center'}})
            col = self.base_columns[vs_field.name]
            col.render = ftype(new_render(vs_field.name), col, Column)

        self.base_columns['value'] = Column(attrs={'td': {'align': 'right'}})

        super(FightsTable, self).__init__(*args, **kwargs)
