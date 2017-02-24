from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Div, Field
from crispy_forms.bootstrap import PrependedText, FormActions
from django import forms
from units.models import Unit


class FightForm(forms.Form):

    unit1 = forms.ModelChoiceField(Unit.objects.all(), label='Unit A')
    unit2 = forms.ModelChoiceField(Unit.objects.all(), label='Unit B')

    count1 = forms.IntegerField(label='Count A', min_value=1)
    count2 = forms.IntegerField(label='Count B', min_value=1)

    num_fights = forms.IntegerField(label='Number of fights', min_value=1)

    # def clean_name1(self):
    #     name1 = self.cleaned_data['name1']
    #     if not Unit.objects.filter(name=name1):
    #         raise forms.ValidationError('Unit doesn\'t exist', code='invalid')
    #     return name1
    #
    # def clean_name2(self):
    #     name2 = self.cleaned_data['name2']
    #     if not Unit.objects.filter(name=name2):
    #         raise forms.ValidationError('Unit doesn\'t exist', code='invalid')
    #     return name2

    helper = FormHelper()
    helper.form_method = 'POST'
    helper.form_class = 'form-horizontal'
    helper.field_template = 'bootstrap3/layout/inline_field.html'
    helper.layout = Layout(
        'unit1',
        'count1',
        'unit2',
        'count2',
        'num_fights',
        Submit('submit', 'Fight!'),
    )
