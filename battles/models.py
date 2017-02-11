from __future__ import unicode_literals

from django.db import models
from units.models import Unit


class Duel(models.Model):

    unitA = models.ForeignKey(Unit, on_delete=models.CASCADE, related_name='unitA')
    unitB = models.ForeignKey(Unit, on_delete=models.CASCADE, related_name='unitB')

    result = models.FloatField()
