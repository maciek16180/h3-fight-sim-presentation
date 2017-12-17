from django_tables2 import Table, Column
from .models import Fights
from django.utils.safestring import mark_safe
from units.models import Unit
from types import MethodType

col_style = lambda: {
    'td': {"style": "text-align:center;"},
    'th': {"style": "text-align:center;"}
}


class FightsTable(Table):

    class Meta:
        attrs = {'class': 'paleblue'}

    def __init__(self, *args, **kwargs):
        self.base_columns['id'] = Column()
        self.base_columns['unit'] = Column(order_by='unit.name')
        self.base_columns['gold_cost'] = Column(
            attrs=col_style(), verbose_name='Gold cost')
        self.base_columns['tot_growth'] = Column(
            attrs=col_style(), verbose_name='Total growth')
        self.base_columns['value'] = Column(attrs=col_style())
        self.base_columns['value'].attrs['td'][
            'style'] += "border-right: solid 1px #e2e2e2;"
        self.base_columns['value'].attrs['th'][
            'style'] += "border-right: solid 1px #e2e2e2;"

        def new_render(field_name):
            def fn(_, value, record):
                pk1 = record['unit'].id
                pk2 = int(field_name[2:])
                count1 = 10000
                count2 = int(count1 / record[field_name])
                return mark_safe(
                    '<a title=\'Try it!\' href=\'combat/?unit1=%s&unit2=%s&'
                    'count1=%s&count2=%s&num_fights=1000\'>%.3f</a>'
                    % (pk1, pk2, count1, count2, value,))
            return fn

        for vs_field in Fights._meta.fields[2:]:
            self.base_columns[vs_field.name] = Column(
                vs_field.verbose_name, attrs=col_style())
            col = self.base_columns[vs_field.name]
            col.render = MethodType(new_render(vs_field.name), col)

        super(FightsTable, self).__init__(*args, **kwargs)
