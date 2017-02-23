from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Fieldset
from django.forms import MultipleChoiceField


class UnitFilterFormHelper(FormHelper):
    form_method = 'GET'
    form_class = 'form-inline'
    field_template = 'bootstrap3/layout/inline_field.html'
    layout = Layout(
        'name',
        'gold_cost',
        'town',
        'upgraded',
        Submit('submit', 'Apply Filter'),
    )


class UnitFilterDoubleFormHelper(FormHelper):
    form_method = 'GET'
    form_class = 'form-horizontal'
    field_template = 'bootstrap3/layout/inline_field.html'

    layout = Layout(
        Fieldset(
            'VS Units',
            'col_gold_cost',
            'col_upgraded',
            'col_town',
        ),
        Fieldset(
            'Units to show',
            'row_gold_cost',
            'row_upgraded',
            'row_town',
        ),
        Submit('submit', 'Apply Filter'),
    )
