import django_tables2
from .models import Unit
from django.utils.safestring import mark_safe


class UnitTable(django_tables2.Table):

    # def render_name(self, value, record):
    #     url = record.get_absolute_url()
    #     return mark_safe('<a href="%s">%s</a>' % (url, record))

    class Meta:
        model = Unit
        exclude = []
        # attrs = {'class': 'paleblue'}
