from django.db import models
from units.models import Unit
import pandas as pd


class Fights(models.Model):

    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)

    def __str__(self):
        return self.unit.name

data = pd.read_csv('h3_fight_sim/CRTRAITS.TXT', sep=',', encoding='utf-8')

for monster_id in range(141):
    Fights.add_to_class(
        'vs' + str(monster_id + 1),
        models.FloatField(verbose_name=data.values[monster_id][0]))
