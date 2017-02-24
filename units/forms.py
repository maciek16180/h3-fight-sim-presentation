from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Fieldset, HTML, MultiField
from crispy_forms.bootstrap import InlineField
from django import forms


class MyInlineField(InlineField):
    template = 'bootstrap3/layout/inline_field.html'


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
    # form_class = 'form-inline'
    # field_template = 'bootstrap3/layout/inline_field.html'

    layout = Layout(
        Fieldset(
            'VS Units',
            MyInlineField('col_name'),
            MyInlineField('col_gold_cost'),
            MyInlineField('col_upgraded'),
            'col_town',
            MyInlineField('col_level'),
            'checkbox_growth',
            'checkbox_gold_cost',
        ),
        HTML('<br>'),
        Fieldset(
            'Units to show',
            MyInlineField('row_name'),
            MyInlineField('row_gold_cost'),
            MyInlineField('row_upgraded'),
            'row_town',
            MyInlineField('row_level'),
        ),
        HTML('<br>'),
        Submit('submit', 'Apply Filter'),
        HTML('<br><br>')
    )
