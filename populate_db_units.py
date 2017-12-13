#!/usr/bin/env python
# -*- coding: utf-8 -*-

from units.models import Unit, Town
import pandas as pd

data = pd.read_csv('CRTRAITS.TXT', sep=',', encoding='utf-8')
data.Attributes.values[data.Attributes.values == u'0'] = ''

crap = ['Plural', 'Wood', 'Mercury', 'Ore', 'Sulfur', 'Crystal', 'Gems',
        'Ability Text', 'GuardsLow', 'GuardsHigh']
data.drop(crap, axis=1, inplace=True)


for row in data.values[:-5]:
    u = Unit()
    (u.name, u.gold_cost, u.fight_value, u.ai_value, u.growth, u.horde_growth,
     u.hp, u.speed, u.attack, u.defense, u.min_dmg, u.max_dmg, u.shots,
     u.spells) = row[:-1]

    attributes = set(row[-1].split(' | '))

    u.b_double_wide = 'DOUBLE_WIDE' in attributes
    u.b_free_attack = 'const_free_attack' in attributes
    u.b_no_melee_pen = 'const_no_melee_penalty' in attributes
    u.b_two_attacks = 'const_two_attacks' in attributes
    u.b_undead = 'IS_UNDEAD' in attributes
    u.b_elemental = 'cusELEMENTAL' in attributes
    u.b_golem = 'cusGOLEM' in attributes

    u.save()


for name in [u'Zamek', u'Bastion', u'Forteca', u'Inferno', u'Nekropolia',
             u'Loch', u'Twierdza', u'Cytadela', u'Wrota żywiołów',
             u'Neutralne']:
    t = Town()
    t.name = name
    t.save()


for unit in Unit.objects.all():
    if unit.id <= 126:
        unit.town_id = (unit.id - 1) / 14 + 1
        unit.level = ((unit.id - 1) / 2) % 7 + 1
        unit.upgraded = bool((unit.id - 1) % 2)
    else:
        unit.town_id = 10
        unit.upgraded = False
        unit.level = [1, 1, 2, 2, 3, 3, 4, 5,
                      5, 6, 6, 8, 10, 10, 10][unit.id-127]

    unit.save()
