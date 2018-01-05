from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Div, Field, HTML
from crispy_forms.bootstrap import PrependedText, FormActions
from django import forms
from units.models import Unit
from units.forms import MyInlineField, CustomMyInlineField


class FightForm(forms.Form):
    unit1 = forms.ModelChoiceField(Unit.objects.all(), label='Unit A')
    unit2 = forms.ModelChoiceField(Unit.objects.all(), label='Unit B')

    count1 = forms.IntegerField(label='A Count', min_value=1, max_value=100000)
    count2 = forms.IntegerField(label='B Count', min_value=1, max_value=100000)

    num_fights = forms.IntegerField(
        label='Number of fights', min_value=1, initial=100, max_value=10000)

    def clean(self):
        cleaned_data = super(FightForm, self).clean()

        if self.cleaned_data['unit1'] == self.cleaned_data['unit2']:
            raise forms.ValidationError(
                'Sorry, mirror matches are not supported.')

        return cleaned_data

    helper = FormHelper()
    helper.form_method = 'GET'
    helper.form_class = 'form-horizontal'
    helper.field_template = 'bootstrap3/layout/inline_field.html'

    helper.layout = Div(
        HTML('<h2>Combat simulator '
             '[<a href=http://127.0.0.1:8000/docs/#Combat-simulation>docs</a>]'
             '</h2>'),
        Div(
            HTML('Choose two stacks and find out which one proves stronger in '
                 'a series of duels! The result will show the number of wins '
                 'for each side.'),
            style='margin-bottom: 0.5em; color: grey; width: 23em;'),
        Div(
            Div('unit1', style="float: left;"),
            CustomMyInlineField('count1'),
            style="margin-bottom: 0.5em"
        ),
        Div(
            Div('unit2', style="float: left;"),
            CustomMyInlineField('count2', style="margin-bottom: 0.5em")
        ),
        Div(
            Div(
                MyInlineField('num_fights'),
                style="float: left; margin-top: 0.4em; margin-right: 2.8em;"),
            Submit('submit', 'Fight!'),
        ),
        style="margin-left: 1em; margin-bottom: 0.5em;"
    )


class BalanceForm(forms.Form):
    unit1 = forms.ModelChoiceField(Unit.objects.all(), label='Unit A')
    unit2 = forms.ModelChoiceField(Unit.objects.all(), label='Unit B')

    count1 = forms.IntegerField(label='A Count', min_value=1, max_value=100000,
                                required=False)
    count2 = forms.IntegerField(label='B Count', min_value=1, max_value=100000,
                                required=False)

    num_fights = forms.IntegerField(
        label='Number of fights', min_value=1, initial=500, max_value=10000)

    def clean(self):
        cleaned_data = super(BalanceForm, self).clean()

        if self.cleaned_data['count1'] and self.cleaned_data['count2']:
            raise forms.ValidationError(
                "Fixing both counts doesn't make sense.")

        return cleaned_data

    helper = FormHelper()
    helper.form_method = 'GET'
    helper.form_class = 'form-horizontal'
    helper.field_template = 'bootstrap3/layout/inline_field.html'

    helper.layout = Div(
        HTML('<h2>Find balance '
             '[<a href=http://127.0.0.1:8000/docs/#Estimation-method>docs</a>]'
             '</h2>'),
        Div(
            HTML('Choose two creatures and get the stack sizes for which the '
                 'outcome of a duel is the most unpredictable! You can leave '
                 'the counts empty, or specify one of them. More fights and '
                 'bigger stacks mean better accuracy.'),
            style='margin-bottom: 0.5em; color: grey; width: 25em;'),
        Div(
            Div('unit1', style="float: left;"),
            CustomMyInlineField('count1'),
            style="margin-bottom: 0.5em"
        ),
        Div(
            Div('unit2', style="float: left;"),
            CustomMyInlineField('count2', style="margin-bottom: 0.5em")
        ),
        Div(
            Div(
                MyInlineField('num_fights'),
                style="float: left; margin-top: 0.4em; margin-right: 2.8em;"),
            Submit('submit', 'Find out!'),
        ),
        style="margin-left: 1em; margin-bottom: 0.5em;"
    )
