#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pandas as pd
from math import ceil
from random import random, randint


data = pd.read_csv('CRTRAITS.TXT', sep=',', encoding='utf-8')
data.Attributes.values[data.Attributes.values == u'0'] = ''

crap = ['Plural', 'Wood', 'Mercury', 'Ore', 'Sulfur', 'Crystal', 'Gems',
        'Gold', 'Ability Text', 'Growth', 'Horde Growth', 'GuardsLow',
        'GuardsHigh', 'Spells']
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

haters = {(u'Angel', u'Arch Devil'),
          (u'Angel', u'Devil'),
          (u'Archangel', u'Arch Devil'),
          (u'Archangel', u'Devil'),
          (u'Arch Devil', u'Angel'),
          (u'Arch Devil', u'Archangel'),
          (u'Black Dragon', u'Giant'),
          (u'Black Dragon', u'Titan'),
          (u'Devil', u'Angel'),
          (u'Devil', u'Archangel'),
          (u'Genie', u'Efreet'),
          (u'Genie', u'Efreet Sultan'),
          (u'Efreet', u'Genie'),
          (u'Efreet', u'Master Genie'),
          (u'Efreet Sultan', u'Genie'),
          (u'Efreet Sultan', u'Master Genie'),
          (u'Titan', u'Black Dragon'),
          (u'Master Genie', u'Efreet'),
          (u'Master Genie', u'Efreet Sultan')}

elementals = {(u'Storm Elemental', u'Magma Elemental'),
              (u'Storm Elemental', u'Earth Elemental'),
              (u'Energy Elemental', u'Ice Elemental'),
              (u'Energy Elemental', u'Water Elemental'),
              (u'Ice Elemental', u'Energy Elemental'),
              (u'Ice Elemental', u'Fire Elemental'),
              (u'Magma Elemental', u'Storm Elemental'),
              (u'Magma Elemental', u'Air Elemental'),
              (u'Fire Elemental', u'Ice Elemental'),
              (u'Fire Elemental', u'Water Elemental'),
              (u'Air Elemental', u'Magma Elemental'),
              (u'Air Elemental', u'Earth Elemental'),
              (u'Water Elemental', u'Energy Elemental'),
              (u'Water Elemental', u'Fire Elemental'),
              (u'Earth Elemental', u'Storm Elemental'),
              (u'Earth Elemental', u'Air Elemental')}


def binomial(n, p):
    return sum(random() < p for _ in range(n))


def make_unit(name):
    return UnitType(*data.values[data.Singular.values == name][0])


class UnitType(object):

    def __init__(self, name, fightv, aiv, hp, spd, att, df,
                 dmlow, dmhi, shots, abi):
        self.name = name
        self.fight_value = fightv
        self.ai_value = aiv
        self.hp = hp
        self.speed = spd
        self.attack = att
        self.defense = df
        self.dmg_min = dmlow
        self.dmg_max = dmhi
        self.shots = shots
        self.attributes = {x for x in abi.split(' | ') if x in keywords}
        self.hates = [v for (k, v) in haters if k == self.name]
        self.opp_elem = [v for (k, v) in elementals if k == self.name]


class Stack(object):

    def __init__(self, unit, count):
        self.count = count
        self.name = unit.name

        self.hp = unit.hp
        self.hp_left = self.hp
        self.true_max_hp = self.hp

        self.speed = unit.speed
        self.attack = unit.attack
        self.true_attack = self.attack
        self.defense = unit.defense
        self.dmg_min = unit.dmg_min
        self.dmg_max = unit.dmg_max
        self.shots = unit.shots
        self.attributes = unit.attributes
        self.fight_value = unit.fight_value
        self.ai_value = unit.ai_value
        self.hates = unit.hates
        self.opp_elem = unit.opp_elem
        self.aged = -1
        self.poisoned = -1
        self.times_poisoned = 0
        self.cursed = 0
        self.weakened = 0

        self.cap = self.count
        self.rebirth_available = self.name == u'Phoenix' or False
        self.magic_resist = 0.
        if self.name == u'Battle Dwarf':
            self.magic_resist == .4
        elif self.name in [u'Dwarf', u'Crystal Dragon']:
            self.magic_resist = .2

    def take_dmg(self, dmg):
        if dmg < self.hp_left:
            self.hp_left -= dmg
        else:
            dmg -= self.hp_left
            num_killed, rem = divmod(dmg, self.hp)
            self.count -= num_killed + 1
            self.hp_left = self.hp - rem
            self.count = max(self.count, 0)
        if self.name == u'Phoenix' and not self.is_alive() \
                and self.rebirth_available:
            self.rebirth()

    def __calc_base_damage(self, other):
        real_dmg_max = self.dmg_min if self.cursed > 0 else self.dmg_max
        if self.count < 10:
            base_dmg = sum([randint(self.dmg_min, real_dmg_max)
                            for _ in range(int(self.count))])
        else:
            base_dmg = sum([randint(self.dmg_min, real_dmg_max)
                            for _ in range(10)]) * self.count / 10

        defense = other.defense
        if self.name == u'Behemoth':
            defense = int(.6 * defense)
        elif self.name == u'Ancient Behemoth':
            defense = int(.2 * defense)

        att_to_def = self.attack - defense
        base_dmg_reduction = 0.
        base_dmg_bonus = 0.
        if att_to_def > 0:
            base_dmg_bonus = min(.05 * att_to_def, 3.)
        else:
            base_dmg_reduction = min(.025 * -att_to_def, .7)

        return base_dmg, base_dmg_bonus, base_dmg_reduction

    def attack_melee(self, other, dmg_bonus=0., melee_penalty=False):
        base_dmg, base_dmg_bonus, base_dmg_reduction = \
            self.__calc_base_damage(other)
        dmg_bonus += base_dmg_bonus
        dmg_reductions = [base_dmg_reduction]

        if melee_penalty:
            dmg_reductions.append(.5)

        if self.name == u'Dread Knight' and random() < .2:
            dmg_bonus += 1.
        elif other.name in self.hates:
            dmg_bonus += .5
        elif other.name in self.opp_elem:
            dmg_bonus += 1.

        if self.name == u'Magic Elemental' and other.spell_immunity() == 5:
            dmg_reductions.append(.5)
        elif self.name == u'Psychic Elemental' and (
                other.is_nonliving() or other.name in
                [u'Giant', u'Titan', u'Black Dragon']):
            dmg_reductions.append(.5)

        damage = base_dmg * (1. + dmg_bonus)
        # tarcza ognia bierze pod uwagę obrażenia przed redukcjami,
        # obrażenia zadane to najwyżej 20% życia oddziału ifrytów
        fire_shield_damage = .2 * \
            min(damage, (other.count - 1) * other.hp + other.hp_left)
        for reduction in dmg_reductions:
            damage *= 1. - reduction

        damage = int(damage)
        other.take_dmg(damage)

        if (self.name == u'Vampire Lord' and
                not other.is_nonliving()):
            self.drain_life(damage)
        elif (self.name == u'Mighty Gorgon' and
                not other.is_nonliving()):
            self.death_stare(other)
        elif (self.name == u'Thunderbird' and
              other.name not in [u'Earth Elemental', u'Magma Elemental'] and
              random() < .2 and
              other.spell_immunity() < 2 and
              random() > other.magic_resist):
            self.thunderbolt(other)
        elif self.name == u'Rust Dragon':
            self.acid_breath(other)
        elif (self.name == u'Ghost Dragon' and
              not other.is_nonliving() and
              random() < .2):
            other.start_aging()
        elif (self.name == u'Wyvern Monarch' and
                not other.is_nonliving() and
                random() < .2 and
                other.times_poisoned < 5):
            other.start_poison()
        elif (self.name in [u'Black Knight', u'Dread Knight', u'Mummy'] and
              not other.is_undead() and
              other.spell_immunity < 1 and
              random() > other.magic_resist and
              other.name not in [
                  u'Efreet', u'Efreet Sultan', u'Fire Elemental',
                  u'Energy Elemental', u'Firebird', u'Phoenix']):
            if ((self.name == u'Mummy' and random() < .5) or
                    (self.name != u'Mummy' and random() < .2)):
                self.start_curse(other)
        elif (self.name == u'Dragon Fly' and
              other.spell_immunity < 2 and
              random() > other.magic_resist):
            self.start_weakness(other)

        if (other.name == u'Efreet Sultan' and
            self.name not in [
                u'Efreet', u'Efreet Sultan', u'Fire Elemental',
                u'Energy Elemental', u'Firebird', u'Phoenix']):
            self.efreet_fire_shield(fire_shield_damage)

    def attack_range(self, other, dmg_bonus=0., range_penalty=False):
        assert self.is_shooter() and self.shots > 0
        base_dmg, base_dmg_bonus, base_dmg_reduction = self.__calc_base_damage(
            other)
        dmg_bonus += base_dmg_bonus

        damage = base_dmg * (1. + dmg_bonus) * (1. - base_dmg_reduction)
        if range_penalty:
            damage /= 2.

        other.take_dmg(int(damage))
        self.shots -= 1

    def start_weakness(self, other):
        assert self.name == u'Dragon Fly' and other.weakened == 0
        if self.speed > other.speed:
            other.weakened = 3
        elif self.speed < other.speed:
            other.weakened = 2
        else:
            other.weakened = randint(2, 3)
        other.attack = max(0, other.attack - 6)

    def weakness(self):
        assert self.weakened > 0
        self.weakened -= 1
        if self.weakened == 0:
            self.attack = self.true_attack

    def start_curse(self, other):
        assert self.name in [u'Mummy', u'Black Knight', u'Dread Knight']
        if self.speed > other.speed:
            other.cursed = 3
        elif self.speed < other.speed:
            other.cursed = 2
        else:
            other.cursed = randint(2, 3)

    def curse(self):
        assert self.cursed > 0
        self.cursed -= 1

    def start_aging(self):
        was_already_aged = self.aged > 0
        self.aged = 3 if self.speed < 14 else 2
        if not was_already_aged:
            hp_missing = self.hp - self.hp_left
            self.hp = (self.hp + 1) / 2
            self.hp_left = max(1, self.hp - hp_missing)

    def age(self):
        assert self.aged > 0
        self.aged -= 1
        if self.aged == 0:
            self.stop_aging()

    def stop_aging(self):
        assert self.aged == 0
        self.aged = -1
        hp_missing = self.hp - self.hp_left
        self.hp = self.true_max_hp
        self.hp_left = self.hp - hp_missing

    def start_poison(self):
        was_already_poisoned = self.poisoned >= 0
        self.poisoned = 2
        if not was_already_poisoned:
            self.times_poisoned += 1
            hp_missing = self.hp - self.hp_left
            self.hp = int(ceil(self.true_max_hp *
                               (1 - .1 * self.times_poisoned)))
            self.hp_left = max(1, self.hp - hp_missing)

    def poison(self):
        assert self.poisoned >= 0
        self.poisoned -= 1
        if self.times_poisoned < 5 and self.poisoned >= 0:
            self.times_poisoned += 1
            hp_missing = self.hp - self.hp_left
            self.hp = int(ceil(self.true_max_hp *
                               (1 - .1 * self.times_poisoned)))
            self.hp_left = max(1, self.hp - hp_missing)

    def drain_life(self, damage_dealt):
        assert self.name == u'Vampire Lord'
        if self.hp_left + damage_dealt <= self.hp:
            self.hp_left += damage_dealt
        else:
            damage_dealt -= self.hp - self.hp_left
            self.hp_left = self.hp
            res, rem = divmod(damage_dealt, self.hp)
            self.count = min(self.cap, self.count + res)
            if self.count < self.cap and rem:
                self.count += 1
                self.hp_left = rem

    def acid_breath(self, other):
        other.defense = max(0, other.defense - 3)
        if random() < .3:
            other.take_dmg(25 * self.count)

    def magic_dmg_resistance(self):
        if self.name == u'Stone Golem':
            return .5
        elif self.name == u'Iron Golem':
            return .75
        elif self.name == u'Gold Golem':
            return .85
        elif self.name == u'Diamond Golem':
            return .95
        return 0.

    def spell_immunity(self):
        if self.name == u'Gold Dragon':
            return 4
        elif self.name in [u'Black Dragon', u'Magic Elemental']:
            return 5
        elif self.name in [u'Green Dragon', u'Red Dragon', u'Azure Dragon']:
            return 3
        return 0

    def efreet_fire_shield(self, damage):
        damage *= (1. - self.magic_dmg_resistance())
        if self.name in [u'Water Elemental', u'Ice Elemental']:
            damage *= 2
        self.take_dmg(int(damage))

    def thunderbolt(self, other):
        assert self.name == u'Thunderbird'
        damage = 10 * self.count
        damage *= (1 - other.magic_dmg_resistance())
        if self.name in [u'Air Elemental', u'Storm Elemental']:
            damage *= 2
        other.take_dmg(int(damage))

    def death_stare(self, other):
        assert self.name == u'Mighty Gorgon' and not other.is_nonliving()
        to_death_stare = min(binomial(n=self.count, p=.1),
                             (self.count + 9) / 10)
        other.count = max(0, other.count - to_death_stare)

    def rebirth(self):
        assert (self.name == u'Phoenix' and not self.is_alive() and
                self.rebirth_available)
        certain, rem = divmod(self.count, 5)
        to_rebirth = certain + (random() < .2*rem)
        self.count = to_rebirth
        self.rebirth_available = False

    def regenerate(self):
        assert self.name in [u'Wight', u'Wraith', u'Troll']
        self.hp_left = self.hp

    def is_alive(self):
        return self.count > 0

    def is_shooter(self):
        return 'SHOOTING_ARMY' in self.attributes

    def strikes_twice(self):
        return 'const_two_attacks' in self.attributes and not self.is_shooter()

    def shoots_twice(self):
        return 'const_two_attacks' in self.attributes and self.is_shooter()

    def is_big(self):
        return 'DOUBLE_WIDE' in self.attributes

    def melee_penalty(self):
        return (self.is_shooter() and
                not 'const_no_melee_penalty' in self.attributes)

    def no_retaliation(self):
        return 'const_free_attack' in self.attributes

    def range_penalty(self):
        return self.is_shooter() and self.name != 'Sharpshooter'

    def is_elemental(self):
        return 'cusELEMENTAL' in self.attributes

    def is_undead(self):
        return 'IS_UNDEAD' in self.attributes

    def is_golem(self):
        return 'cusGOLEM' in self.attributes

    def is_nonliving(self):
        return self.is_elemental() or self.is_undead() or self.is_golem()
