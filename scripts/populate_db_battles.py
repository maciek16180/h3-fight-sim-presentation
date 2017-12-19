from battles.models import Fights
import pandas as pd

data = pd.read_csv('h3_fight_sim/scores/scores.csv', sep=',', encoding='utf-8')
columns = data.columns.tolist()[2:]

for column_idx in range(141):
    f = Fights(unit_id=column_idx+1)
    for row_idx in range(141):
        attr = 'vs' + str(row_idx + 1)
        res = data[columns[column_idx]].values[row_idx]
        setattr(f, attr, 1 / res)
    f.save()
