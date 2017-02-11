from .models import Unit
from django_filters import FilterSet


class UnitFilter(FilterSet):

    class Meta:
        model = Unit
        exclude = []
