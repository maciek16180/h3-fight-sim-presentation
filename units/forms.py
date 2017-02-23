from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Fieldset, Field, Reset
from crispy_forms.bootstrap import InlineField


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
    # form_class = 'form-vertical'
    # field_template = 'bootstrap3/layout/inline_field.html'

    layout = Layout(
        Fieldset(
            'VS Units',
            InlineField('col_gold_cost'),
            InlineField('col_upgraded'),
            'col_town',
            InlineField('col_level'),
        ),
        Fieldset(
            'Units to show',
            InlineField('row_gold_cost'),
            InlineField('row_upgraded'),
            'row_town',
            InlineField('row_level'),
        ),
        Submit('submit', 'Apply Filter')
    )
