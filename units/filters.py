from .models import Unit, Town
from django_filters import FilterSet
import django_filters
from copy import deepcopy as dc
from django.forms import CheckboxSelectMultiple
from django_filters import filters


filters.LOOKUP_TYPES = [
    ('exact', '='),
    ('lt', '>'),
    ('gt', '<'),
]


class UnitFilter(FilterSet):
    name = django_filters.CharFilter('name', lookup_expr='icontains', label='Name')

    gold_cost = django_filters.NumericRangeFilter('gold_cost', lookup_expr='range', label='Gold')

    upgraded = django_filters.BooleanFilter('upgraded')

    town = django_filters.ModelMultipleChoiceFilter(queryset=Town.objects.all(), name='town', lookup_expr='in',
                                                    label='', widget=CheckboxSelectMultiple)

    level = django_filters.ChoiceFilter(choices=zip(xrange(1, 11), xrange(1, 11)), name='level',
                                        lookup_expr=['exact', 'lt', 'gt'], label='Level')

    class Meta:
        model = Unit
        exclude = []


class UnitFilterDouble(FilterSet):
    col_name = django_filters.CharFilter('name', lookup_expr='icontains', label='Name')
    row_name = dc(col_name)

    col_gold_cost = django_filters.NumericRangeFilter('gold_cost', lookup_expr='range', label='Gold')
    row_gold_cost = dc(col_gold_cost)

    col_upgraded = django_filters.BooleanFilter('upgraded')
    row_upgraded = dc(col_upgraded)

    col_town = django_filters.ModelMultipleChoiceFilter(queryset=Town.objects.all(), name='town', lookup_expr='in',
                                                        label='', widget=CheckboxSelectMultiple)
    row_town = dc(col_town)

    col_level = django_filters.ChoiceFilter(choices=zip(xrange(1, 11), xrange(1, 11)), name='level',
                                            lookup_expr=['exact', 'lt', 'gt'], label='Level')
    row_level = dc(col_level)

    class Meta:
        model = Unit
        exclude = []
