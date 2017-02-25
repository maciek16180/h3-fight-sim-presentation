import django_tables2
from .models import Unit
from django.utils.safestring import mark_safe


class UnitTable(django_tables2.Table):

    class Meta:
        model = Unit
        exclude = []
        attrs = {'class': 'paleblue'}
