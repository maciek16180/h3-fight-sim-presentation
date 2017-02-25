from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Div, Field, HTML
from crispy_forms.bootstrap import PrependedText, FormActions
from django import forms
from units.models import Unit


class FightForm(forms.Form):
    unit1 = forms.ModelChoiceField(Unit.objects.all(), label='Unit A')
    unit2 = forms.ModelChoiceField(Unit.objects.all(), label='Unit B')

    count1 = forms.IntegerField(label='A Count', min_value=1)
    count2 = forms.IntegerField(label='B Count', min_value=1)

    num_fights = forms.IntegerField(label='Num fights', min_value=1, initial=1000)

    helper = FormHelper()
    helper.form_method = 'POST'
    helper.form_class = 'form-horizontal'
    helper.field_template = 'bootstrap3/layout/inline_field.html'
    helper.layout = Layout(
        HTML('<h2>Combat simulator</h2>'),
        'unit1',
        'count1',
        'unit2',
        'count2',
        'num_fights',
        Submit('submit', 'Fight!'),
    )


class BalanceForm(forms.Form):
    unit1 = forms.ModelChoiceField(Unit.objects.all(), label='Unit A')
    unit2 = forms.ModelChoiceField(Unit.objects.all(), label='Unit B')

    count1 = forms.IntegerField(label='A Count', min_value=1, required=False)
    count2 = forms.IntegerField(label='B Count', min_value=1, required=False)

    num_fights = forms.IntegerField(label='Num fights', min_value=1, initial=1000)

    def clean(self):
        cleaned_data = super(BalanceForm, self).clean()

        if self.cleaned_data['count1'] and self.cleaned_data['count2']:
            raise forms.ValidationError('Fixing both counts doesn\'t make sense.')

        return cleaned_data

    helper = FormHelper()
    helper.form_method = 'POST'
    helper.form_class = 'form-horizontal'
    helper.field_template = 'bootstrap3/layout/inline_field.html'
    helper.layout = Layout(
        HTML('<h2>Find balance</h2>'),
        'unit1',
        'count1',
        'unit2',
        'count2',
        'num_fights',
        Submit('submit', 'Submit'),
    )