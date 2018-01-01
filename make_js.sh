#!bin/bash
transcrypt -b -m h3_fight_sim/fight_sim.py
rm -r battles/static/battles/__javascript__
cp -r h3_fight_sim/__javascript__ battles/static/battles/__javascript__
