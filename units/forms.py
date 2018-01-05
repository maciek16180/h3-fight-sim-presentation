from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Fieldset, HTML, \
    MultiField, Field, Div, ButtonHolder
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
                HTML('<i>Leave the filter empty to show all units.</i>'),
                style='text-align: center; font-size: 0.9em;'),
            Div(
                MyInlineField('town'),
                style="width: 12em; float:left;"
            ),
            Div(
                Div(CustomMyInlineField('name'),
                    style="margin-bottom: 0.5em; margin-top: 0.5em;"),
                Div(CustomMyInlineField('gold_cost'),
                    style="margin-bottom: 0.5em;"),
                Div(MyInlineField('b_upgraded'),
                    style="margin-bottom: 0.5em;"),
                Div(MyInlineField('level'),
                    style="margin-bottom: 1.5em; margin-right: 1em;"),
                ButtonHolder(
                    Submit('submit', 'Apply Filter'),
                    HTML("{% load querystring from django_tables2 %}\n"
                         "<a style='margin-left:2em;' href={% querystring "
                         "'_export'='csv' %}>"
                         "<input type='button' value='Export'></a>"),
                    style="margin-left: 16em;",
                ),
            ),
            style="width: 27em;"
        ),
        style="margin-left: 1em;"
    )

    def __init__(self, *args, **kwargs):
        super(UnitFilterFormHelper, self).__init__(*args, **kwargs)


class UnitFilterDoubleFormHelper(FormHelper):
    form_method = 'GET'

    layout = Div(
        HTML('<h2>Combat results '
             '[<a href=/docs/#Example:-Mighty-Gorgon-vs-Scorpicore>docs</a>]'
             '</h2>'),
        Div(
            Div(
                HTML('These are the precalculated results of combat '
                     'simulations. Each row represents the strength of one '
                     'unit in combat against all of the units appearing in '
                     'columns. For example, a number 1.823 in row Pikeman and '
                     'column Dwarf means that 1.823 Pikemen if approximately '
                     'as powerful as one Dwarf. Click a particular score to '
                     'see how accurate it is (doesn\'t work correctly with '
                     'scaling options enabled).'),
                style='margin-bottom: 0.5em;'),
            Div(
                HTML('The Value column is a one-number summary of the entire '
                     'row, and depends on which units are shown in columns. '
                     'For the details on how it\'s calculated, and what <i>'
                     'Alt. value calculation</i> does, go '
                     '<a href=/docs/#Unit-value>here</a>. AI Values are shown '
                     'for comparison.'),
                style='margin-bottom: 0.5em;'),
            Div(
                HTML('To find the most cost-effective units, use the <i>'
                     'Consider cost?</i> checkbox. It scales the scores by '
                     'units\' prices. You can also get the results for the '
                     'entire weekly growths instead of singular creatures, by '
                     'checking <i>Consider growth?</i>. Just don\'t use both '
                     'at once, I dont\'t think it makes sense.')),
            style='margin-bottom: 0.5em; color: grey; width: 55em;'),
        Fieldset(
            '<b>Units in rows</b>',
            Div(
                HTML('<i>Leave the filter empty to show all units.</i>'),
                style='text-align: center; font-size: 0.9em;'),
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
                HTML('<i>Leave the filter empty to show all units.</i>'),
                style='text-align: center; font-size: 0.9em;'),
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
                Field('value_alt'),
                style="float:left; margin-right: 2em;"
            ),
            ButtonHolder(
                Submit('submit', 'Apply Filter'),
                HTML("{% load querystring from django_tables2 %}\n"
                     "<a style='margin-left:2em;' href={% querystring "
                     "'_export'='csv' %}>"
                     "<input type='button' value='Export'></a>"),
                style="margin-left: 16em;",
            ),
            style="margin-left: 5em;"
        ),
        style="margin-left: 1em; margin-bottom: 2em;"
    )
