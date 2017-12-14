from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Fieldset, HTML, \
    MultiField, Field, Div
from crispy_forms.bootstrap import InlineField
from django import forms


class MyInlineField(InlineField):
    template = 'bootstrap3/layout/inline_field.html'


class CustomMyInlineField(InlineField):
    template = "custom_inline_field.html"


class UnitFilterFormHelper(FormHelper):
    form_method = 'GET'

    layout = Div(
        HTML('<h2>Unit list</h2>'),
        Fieldset(
            '<b>Filter units</b>',
            Div(
                MyInlineField('town'),
                style="width: 12em; float:left;"
            ),
            Div(
                Div(CustomMyInlineField('name'),
                    style="margin-bottom: 0.5em; margin-top: 0.5em;"),
                Div(CustomMyInlineField('gold_cost'),
                    style="margin-bottom: 0.5em;"),
                Div(MyInlineField('upgraded'),
                    style="margin-bottom: 0.5em;"),
                Div(MyInlineField('level'),
                    style="margin-bottom: 1.5em; margin-right: 1em;"),
                Div(
                    Submit('submit', 'Apply Filter'),
                    style="margin-left: 16em;"
                ),
            ),
            style="width: 27em;"
        ),
        style="margin-left: 1em;"
    )


class UnitFilterDoubleFormHelper(FormHelper):
    form_method = 'GET'

    layout = Div(
        HTML('<h2>Combat results</h2>'),
        Fieldset(
            '<b>Units in rows</b>',
            Div(
                MyInlineField('row_town'),
                style="width: 12em; float:left;"
            ),
            Div(
                Div(CustomMyInlineField('row_name'),
                    style="margin-bottom: 0.5em; margin-top: 0.5em;"),
                Div(CustomMyInlineField('row_gold_cost'),
                    style="margin-bottom: 0.5em;"),
                Div(MyInlineField('row_upgraded'),
                    style="margin-bottom: 0.5em;"),
                Div(MyInlineField('row_level'),
                    style="margin-bottom: 0.5em;")
            ),
            style="width: 27em; float:left; margin-right: 2em;"
        ),
        Fieldset(
            '<b>Units in columns</b>',
            Div(
                MyInlineField('col_town'),
                style="width: 12em; float:left;"
            ),
            Div(
                Div(CustomMyInlineField('col_name'),
                    style="margin-bottom: 0.5em; margin-top: 0.5em;"),
                Div(CustomMyInlineField('col_gold_cost'),
                    style="margin-bottom: 0.5em;"),
                Div(MyInlineField('col_upgraded'),
                    style="margin-bottom: 0.5em;"),
                Div(MyInlineField('col_level'),
                    style="margin-bottom: 0.5em;")
            ),
            style="width: 27em;"
        ),
        Div(
            Div(
                Field('checkbox_growth'),
                Field('checkbox_gold_cost'),
                style="float:left; margin-right: 2em;"
            ),
            Submit('submit', 'Apply Filter'),
            style="margin-left: 5em;"
        ),
        style="margin-left: 1em; margin-bottom: 1em;"
    )
