from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible

from django.db import models
from units.models import Unit
import pandas as pd


@python_2_unicode_compatible
class Fights(models.Model):

    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)

    def __str__(self):
        return self.unit.name

data = pd.read_csv('CRTRAITS.TXT', sep=',', encoding='utf-8')

for monster_id in xrange(141):
    Fights.add_to_class('vs' + str(monster_id + 1),
                        models.FloatField(verbose_name=data.values[monster_id][0]))
