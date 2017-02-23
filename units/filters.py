from .models import Unit, Town
from django_filters import FilterSet
import django_filters
from copy import deepcopy as dc
from django.forms import CheckboxSelectMultiple


class UnitFilter(FilterSet):

    class Meta:
        model = Unit
        exclude = []


class UnitFilterDouble(FilterSet):
    col_gold_cost = django_filters.NumericRangeFilter('gold_cost', lookup_expr='range', label='Gold')
    row_gold_cost = dc(col_gold_cost)

    col_upgraded = django_filters.BooleanFilter('upgraded')
    row_upgraded = dc(col_upgraded)

    col_town = django_filters.ModelMultipleChoiceFilter(queryset=Town.objects.all(), name='town', lookup_expr='in',
                                                        label='Town', widget=CheckboxSelectMultiple)
    row_town = dc(col_town)

    col_level = django_filters.ChoiceFilter(choices=zip(xrange(1, 11), xrange(1, 11)), name='level',
                                            lookup_expr=['exact', 'lt', 'gt'], label='Level')
    row_level = dc(col_level)

    class Meta:
        model = Unit
        exclude = []
