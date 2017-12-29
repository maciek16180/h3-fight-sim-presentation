from django.db import models
from units.models import Unit
from .unit_names import names

class Fights(models.Model):

    unit = models.ForeignKey(Unit, on_delete=models.CASCADE)

    def __str__(self):
        return self.unit.name

for monster_id in range(141):
    Fights.add_to_class(
        'vs' + str(monster_id + 1),
        models.FloatField(verbose_name=names[monster_id]))
