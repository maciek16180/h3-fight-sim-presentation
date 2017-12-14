from django_tables2 import Table
from .models import Unit
from django.utils.safestring import mark_safe


class UnitTable(Table):

    class Meta:
        model = Unit
        exclude = []
        attrs = {'class': 'paleblue'}

    def __init__(self, *args, **kwargs):
        super(UnitTable, self).__init__(*args, **kwargs)
        for key in self.base_columns.keys():
            if key not in ['name', 'id']:
                self.base_columns[key].attrs['td'] = {'align': 'center'}
