import django_filters
from .models import Unit, Town
from django_filters import FilterSet
from copy import deepcopy

from django.forms import CheckboxSelectMultiple
from django.forms.widgets import Select, TextInput, NumberInput
from django_filters import filters
from django_filters.widgets import SuffixedMultiWidget, RangeWidget


filters.LOOKUP_TYPES = [
    ('exact', '='),
    ('lt', '>'),
    ('gt', '<'),
]


class NumberRangeWidget(SuffixedMultiWidget):
    template_name = RangeWidget.template_name
    suffixes = ['min', 'max']

    def __init__(self,  attrs=None):
        widgets = (NumberInput, NumberInput)
        super().__init__(widgets, attrs)


bool_widget = lambda: Select(
    choices=[(None, ("----")), (True, ("Yes")), (False, ("No"))])

gold_cost_filter = lambda: django_filters.NumericRangeFilter(
    'gold_cost',
    lookup_expr='range',
    label='Gold',
    widget=NumberRangeWidget(attrs={
        'min': '0',
        'max': 30000 * 100,
        'step': '10',
        'style': 'width: 7.12em'}))

name_filter = lambda: django_filters.CharFilter(
    'name',
    lookup_expr='icontains',
    label='Name',
    # initial="smok",
    widget=TextInput(attrs={'style': 'width: 15em;'}))

upgraded_filter = lambda: django_filters.BooleanFilter(
    'upgraded',
    widget=bool_widget())

town_filter = lambda: django_filters.ModelMultipleChoiceFilter(
    queryset=Town.objects.all(),
    name='town',
    lookup_expr='in',
    label='',
    widget=CheckboxSelectMultiple)

level_filter = lambda: django_filters.ChoiceFilter(
    choices=zip(range(1, 11), range(1, 11)),
    name='level',
    lookup_expr=['exact', 'lt', 'gt'],
    label='Level')


class UnitFilter(FilterSet):
    name = name_filter()
    gold_cost = gold_cost_filter()

    upgraded = upgraded_filter()

    town = town_filter()

    level = level_filter()

    class Meta:
        model = Unit
        exclude = []


class UnitFilterDouble(FilterSet):
    col_name = name_filter()
    row_name = name_filter()

    col_gold_cost = gold_cost_filter()
    row_gold_cost = gold_cost_filter()

    col_upgraded = upgraded_filter()
    row_upgraded = upgraded_filter()

    col_town = town_filter()
    row_town = town_filter()

    col_level = level_filter()
    row_level = level_filter()

    class Meta:
        model = Unit
        exclude = []
