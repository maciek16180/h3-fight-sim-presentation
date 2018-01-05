#!bin/bash
ipython nbconvert --to html --template basic h3_fight_sim/report.ipynb
cp h3_fight_sim/report.html main/templates/main/report.html
