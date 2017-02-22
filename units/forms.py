from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Fieldset
from crispy_forms.bootstrap import InlineField


class UnitFilterFormHelper(FormHelper):
    form_method = 'GET'
    form_class = 'form-inline'
    field_template = 'bootstrap3/layout/inline_field.html'
    layout = Layout(
        # 'name',
        'gold_cost1',
        # 'town',
        'upgraded1',
        Submit('submit', 'Apply Filter'),
    )


class UnitFilterFormHelper2(FormHelper):
    form_method = 'GET'
    form_class = 'form-inline'
    field_template = 'bootstrap3/layout/inline_field.html'
    layout = Layout(
        'gold_cost2',
        'upgraded2',
        Submit('submit', 'Apply Filter'),
    )
