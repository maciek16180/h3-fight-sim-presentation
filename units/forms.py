from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Fieldset, HTML, MultiField, Field
from crispy_forms.bootstrap import InlineField
from django import forms


class MyInlineField(InlineField):
    template = 'bootstrap3/layout/inline_field.html'


class UnitFilterFormHelper(FormHelper):
    form_method = 'GET'
    layout = Layout(
        HTML('<h2>Unit list</h2>'),
        MyInlineField('name'),
        MyInlineField('gold_cost'),
        MyInlineField('upgraded'),
        Field('town'),
        MyInlineField('level'),
        HTML('<br>'),
        Submit('submit', 'Apply Filter'),
        HTML('<br><br>')
    )


class UnitFilterDoubleFormHelper(FormHelper):
    form_method = 'GET'

    layout = Layout(
        HTML('<h2>Combat results</h2>'),
        Fieldset(
            'VS Units',
            MyInlineField('col_name'),
            MyInlineField('col_gold_cost'),
            MyInlineField('col_upgraded'),
            Field('col_town'),
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
            Field('row_town'),
            MyInlineField('row_level'),
        ),
        HTML('<br>'),
        Submit('submit', 'Apply Filter'),
        HTML('<br><br>')
    )
