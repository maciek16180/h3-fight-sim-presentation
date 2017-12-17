from units.models import Unit, Town
import pandas as pd

data = pd.read_csv('CRTRAITS.TXT', sep=',', encoding='utf-8')
data.Attributes.values[data.Attributes.values == u'0'] = ''

crap = ['Plural', 'Wood', 'Mercury', 'Ore', 'Sulfur', 'Crystal', 'Gems',
        'Ability Text', 'GuardsLow', 'GuardsHigh']
data.drop(crap, axis=1, inplace=True)


for name in [u'Castle', u'Rampart', u'Tower', u'Inferno', u'Necropolis',
             u'Dungeon', u'Stronghold', u'Fortress', u'Conflux', u'Neutral']:
    t = Town()
    t.name = name
    t.save()

for uid, row in enumerate(data.values[:-5]):
    uid = uid + 1
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

    if uid <= 126:
        u.town_id = (uid - 1) / 14 + 1
        u.level = ((uid - 1) / 2) % 7 + 1
        u.upgraded = bool((uid - 1) % 2)
    else:
        u.town_id = 10
        u.upgraded = False
        u.level = [
            1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 8, 10, 10, 10][uid-127]

    u.save()
