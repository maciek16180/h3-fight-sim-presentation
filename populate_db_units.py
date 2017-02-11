from units.models import Unit
import pandas as pd

data = pd.read_csv('CRTRAITS.TXT', sep=',', encoding='utf-8')
data.Attributes.values[data.Attributes.values == u'0'] = ''

crap = ['Plural', 'Wood', 'Mercury', 'Ore', 'Sulfur', 'Crystal', 'Gems',
        'Ability Text', 'GuardsLow', 'GuardsHigh']
data.drop(crap, axis=1, inplace=True)


keywords = {'DOUBLE_WIDE',
            'SHOOTING_ARMY',
            'const_free_attack',
            'const_jousting',
            'const_no_melee_penalty',
            'const_two_attacks',
            'IS_UNDEAD',
            'cusELEMENTAL',
            'cusGOLEM'}


for row in data.values[:-5]:
    u = Unit()
    u.name, u.gold_cost, u.fight_value, u.ai_value, u.growth, u.horde_growth, u.hp, \
        u.speed, u.attack, u.defense, u.min_dmg, u.max_dmg, u.shots, u.spells = row[:-1]

    attributes = set(row[-1].split(' | '))

    u.b_double_wide = 'DOUBLE_WIDE' in attributes
    u.b_free_attack = 'const_free_attack' in attributes
    u.b_no_melee_pen = 'const_no_melee_penalty' in attributes
    u.b_two_attacks = 'const_two_attacks' in attributes
    u.b_undead = 'IS_UNDEAD' in attributes
    u.b_elemental = 'cusELEMENTAL' in attributes
    u.b_golem = 'cusGOLEM' in attributes

    u.save()
