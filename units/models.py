from django.db import models


class Town(models.Model):

    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Unit(models.Model):

    name = models.CharField(max_length=30)
    plural = models.CharField(max_length=35)
    gold_cost = models.IntegerField(verbose_name='Gold')
    fight_value = models.IntegerField()
    ai_value = models.IntegerField(verbose_name='AI Value')
    growth = models.IntegerField()
    horde_growth = models.IntegerField()
    hp = models.IntegerField(verbose_name='HP')
    speed = models.IntegerField()
    attack = models.IntegerField()
    defense = models.IntegerField()
    min_dmg = models.IntegerField()
    max_dmg = models.IntegerField()
    shots = models.IntegerField()
    spells = models.IntegerField()

    town = models.ForeignKey(Town, on_delete=models.CASCADE)
    level = models.PositiveSmallIntegerField(default=0)

    b_upgraded = models.BooleanField(default=False, verbose_name='Upgraded?')
    b_double_wide = models.BooleanField(default=False, verbose_name='Big?')
    b_free_attack = models.BooleanField(
        default=False, verbose_name='No retaliation?')
    b_no_melee_pen = models.BooleanField(
        default=False, verbose_name='No melee penalty?')
    b_two_attacks = models.BooleanField(
        default=False, verbose_name='Two attacks?')
    b_undead = models.BooleanField(default=False, verbose_name='Undead?')
    b_elemental = models.BooleanField(default=False, verbose_name='Elemental?')
    b_golem = models.BooleanField(default=False, verbose_name='Golem?')

    def __str__(self):
        return self.name
