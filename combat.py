#!/usr/bin/env python
# -*- coding: utf-8 -*-

from random import random
from copy import copy
from unit import make_unit, Stack


def fight(stackA, stackB, num_iter):

    wins = {stackA.name: [0, 0],
            stackB.name: [0, 0]}

    def units_order(s1, s2):
        temp = sorted([s1, s2], key=lambda x: x.speed, reverse=True)
        if s1.speed == s2.speed and random() < .5:
            return reversed(temp)
        return temp

    def melee_hit(current, other):
        if (other.name == u'Błękitny smok' and
                not current.is_nonliving() and
                random() < .1):
            return other, current
        current.attack_melee(other, melee_penalty=current.melee_penalty())
        if other.is_alive() and not current.no_retaliation():
            other.attack_melee(current, melee_penalty=other.melee_penalty())
        if current.is_alive() and current.strikes_twice() and other.is_alive():
            current.attack_melee(other)

        if current.aged > 0 and current.is_alive():
            current.age()
        elif current.poisoned >= 0 and current.is_alive():
            current.poison()
        elif current.cursed > 0:
            current.curse()
        elif current.weakened > 0:
            current.weakness()
        if other.name in [u'Zjawa', u'Upiór', u'Troll'] and other.is_alive():
            other.regenerate()

        return other, current

    def range_hit(current, other, apply_penalty):
        penalty = current.range_penalty() if apply_penalty else False
        current.attack_range(other, range_penalty=penalty)
        if current.shoots_twice() and current.shots > 0:
            current.attack_range(other, range_penalty=penalty)
        if other.name in [u'Zjawa', u'Upiór', u'Troll'] and other.is_alive():
            other.regenerate()
        return other, current

    def fight_to_death(current, other):
        while current.is_alive() and other.is_alive():
            current, other = melee_hit(current, other)
        return current, other

    def walker_vs_shooter(walker, shooter):
        to_walk = starting_dist - 1
        first_move = to_walk % walker.speed
        if first_move == 0:
            first_move = walker.speed
        avoid_by_move = to_walk - first_move > 10
        avoid_by_wait = False

        if walker.speed < shooter.speed:
            num_shots = to_walk / walker.speed + (to_walk % walker.speed > 0)
        elif walker.speed > shooter.speed:
            num_shots = to_walk / walker.speed - (to_walk % walker.speed == 0)
            avoid_by_wait = True
        else:
            if random() < .5:
                num_shots = to_walk / walker.speed + \
                    (to_walk % walker.speed > 0)
            else:
                num_shots = to_walk / walker.speed - \
                    (to_walk % walker.speed == 0)

        num_full_shots = max(0, num_shots - avoid_by_move - avoid_by_wait)
        num_half_shots = num_shots - num_full_shots

        for j in range(int(num_half_shots)):
            range_hit(shooter, walker, apply_penalty=True)
        for j in range(int(num_full_shots)):
            range_hit(shooter, walker, apply_penalty=False)

        current, other = walker, shooter
        return fight_to_death(current, other)

    starting_dist = 14
    if stackA.is_big():
        starting_dist -= 1
    if stackB.is_big():
        starting_dist -= 1

    for it in range(num_iter):
        current, other = units_order(copy(stackA), copy(stackB))

        if not current.is_shooter() and not other.is_shooter():
            current, other = fight_to_death(current, other)

        elif current.is_shooter() and other.is_shooter():
            full_round = True
            while (current.is_alive() and
                    ((current.shots > 0 and other.shots > 0)
                        or not full_round)):
                current, other = range_hit(current, other, apply_penalty=True)
                full_round = not full_round
            if current.is_alive():
                if current.shots == 0 and other.shots == 0:
                    current, other = units_order(current, other)
                    current, other = fight_to_death(current, other)
                else:
                    shooter = current if current.shots > 0 else other
                    walker = current if current.shots == 0 else other
                    current, other = walker_vs_shooter(
                        walker=walker, shooter=shooter)

        else:
            shooter = current if current.is_shooter() else other
            walker = current if not current.is_shooter() else other
            current, other = walker_vs_shooter(walker=walker, shooter=shooter)

        winner = current if current.is_alive() else other
        wins[winner.name][0] += 1
        wins[winner.name][1] += winner.count

    for s in [stackA.name, stackB.name]:
        if wins[s][0]:
            wins[s][1] /= float(wins[s][0])

    return wins


def find_balance(nameA, nameB, num_iter, startA=None):

    if nameA == nameB:
        if startA:
            return startA, startA
        return 1, 1

    def balanced(result):
        return (num_iter / 2) * .95 < result[A.name][0] < (num_iter / 2) * 1.05

    unitA = make_unit(nameA)
    unitB = make_unit(nameB)

    startA = startA or unitB.ai_value * 10
    startB = int(float(startA) / unitB.ai_value * unitA.ai_value)

    A = Stack(unitA, startA)
    B = Stack(unitB, startB)

    res = fight(A, B, num_iter)

    if balanced(res):
        return A.count, B.count

    B_won_last = res[A.name][0] < res[B.name][0]
    sign = -1 if B_won_last else 1
    change = sign * max(int(B.count / 10.), 1)
    enough = False

    while not enough:
        x1 = B.count
        B.count += change
        res = fight(A, B, num_iter)
        B_won = res[A.name][0] < res[B.name][0]
        enough = B_won != B_won_last
        if not enough:
            B_won_last = B_won

    if balanced(res):
        return A.count, B.count

    x2 = B.count

    # here binsearch from for balanced result
    low = min(x1, x2)
    high = max(x1, x2)

    while True:
        middle = low + (high - low) / 2
        B.count = middle
        res = fight(A, B, num_iter)
        if balanced(res) or abs(high - low) <= 1:
            return A.count, max(B.count, 1)
        B_won = res[A.name][0] < res[B.name][0]
        if B_won:
            high = middle - 1
        else:
            low = middle + 1
