from .models import Unit
from django_filters import FilterSet
import django_filters


class UnitFilter(FilterSet):
    gold_cost1 = django_filters.NumberFilter('gold_cost')
    upgraded1 = django_filters.BooleanFilter('upgraded')

    class Meta:
        model = Unit
        exclude = []


class UnitFilter2(FilterSet):
    gold_cost2 = django_filters.NumberFilter('gold_cost')
    upgraded2 = django_filters.BooleanFilter('upgraded')

    class Meta:
        model = Unit
        exclude = []
