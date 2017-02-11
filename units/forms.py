from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit


class UnitFilterFormHelper(FormHelper):
    form_method = 'GET'
    layout = Layout(
        'name',
        'gold_cost',
        Submit('submit', 'Apply Filter'),
    )
