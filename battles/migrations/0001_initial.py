# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-24 15:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('units', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fights',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vs1', models.FloatField(verbose_name='Pikinier')),
                ('vs2', models.FloatField(verbose_name='Halabardnik')),
                ('vs3', models.FloatField(verbose_name='\u0141ucznik')),
                ('vs4', models.FloatField(verbose_name='Kusznik')),
                ('vs5', models.FloatField(verbose_name='Gryf')),
                ('vs6', models.FloatField(verbose_name='Gryf kr\xf3lewski')),
                ('vs7', models.FloatField(verbose_name='Zbrojny')),
                ('vs8', models.FloatField(verbose_name='Krzy\u017cowiec')),
                ('vs9', models.FloatField(verbose_name='Mnich')),
                ('vs10', models.FloatField(verbose_name='Kap\u0142an')),
                ('vs11', models.FloatField(verbose_name='Kawalerzysta')),
                ('vs12', models.FloatField(verbose_name='Czempion')),
                ('vs13', models.FloatField(verbose_name='Anio\u0142')),
                ('vs14', models.FloatField(verbose_name='Archanio\u0142')),
                ('vs15', models.FloatField(verbose_name='Centaur')),
                ('vs16', models.FloatField(verbose_name='Centaur bojowy')),
                ('vs17', models.FloatField(verbose_name='Krasnolud')),
                ('vs18', models.FloatField(verbose_name='Krasnoludzki wojownik')),
                ('vs19', models.FloatField(verbose_name='Le\u015bny elf')),
                ('vs20', models.FloatField(verbose_name='Wysoki elf')),
                ('vs21', models.FloatField(verbose_name='Pegaz')),
                ('vs22', models.FloatField(verbose_name='Srebrny pegaz')),
                ('vs23', models.FloatField(verbose_name='Drzewiec')),
                ('vs24', models.FloatField(verbose_name='Ent')),
                ('vs25', models.FloatField(verbose_name='Jednoro\u017cec')),
                ('vs26', models.FloatField(verbose_name='Jednoro\u017cec bitewny')),
                ('vs27', models.FloatField(verbose_name='Zielony smok')),
                ('vs28', models.FloatField(verbose_name='Z\u0142oty smok')),
                ('vs29', models.FloatField(verbose_name='Gremlin')),
                ('vs30', models.FloatField(verbose_name='Wi\u0119kszy gremlin')),
                ('vs31', models.FloatField(verbose_name='Kamienny gargulec')),
                ('vs32', models.FloatField(verbose_name='Obsydianowy gargulec')),
                ('vs33', models.FloatField(verbose_name='Kamienny golem')),
                ('vs34', models.FloatField(verbose_name='\u017belazny golem')),
                ('vs35', models.FloatField(verbose_name='Mag')),
                ('vs36', models.FloatField(verbose_name='Arcymag')),
                ('vs37', models.FloatField(verbose_name='D\u017cinn')),
                ('vs38', models.FloatField(verbose_name='Wielki d\u017cinn')),
                ('vs39', models.FloatField(verbose_name='Naga')),
                ('vs40', models.FloatField(verbose_name='Kr\xf3lewska naga')),
                ('vs41', models.FloatField(verbose_name='Gigant')),
                ('vs42', models.FloatField(verbose_name='Tytan')),
                ('vs43', models.FloatField(verbose_name='Chochlik')),
                ('vs44', models.FloatField(verbose_name='Chowaniec')),
                ('vs45', models.FloatField(verbose_name='Gog')),
                ('vs46', models.FloatField(verbose_name='Magog')),
                ('vs47', models.FloatField(verbose_name='Piekielny ogar')),
                ('vs48', models.FloatField(verbose_name='Cerber')),
                ('vs49', models.FloatField(verbose_name='Demon')),
                ('vs50', models.FloatField(verbose_name='Rogaty demon')),
                ('vs51', models.FloatField(verbose_name='Czart')),
                ('vs52', models.FloatField(verbose_name='Czarci lord')),
                ('vs53', models.FloatField(verbose_name='Ifryt')),
                ('vs54', models.FloatField(verbose_name='Su\u0142ta\u0144ski ifryt')),
                ('vs55', models.FloatField(verbose_name='Diabe\u0142')),
                ('vs56', models.FloatField(verbose_name='Arcydiabe\u0142')),
                ('vs57', models.FloatField(verbose_name='Szkielet')),
                ('vs58', models.FloatField(verbose_name='Ko\u015bciej')),
                ('vs59', models.FloatField(verbose_name='O\u017cywieniec')),
                ('vs60', models.FloatField(verbose_name='Zombie')),
                ('vs61', models.FloatField(verbose_name='Zjawa')),
                ('vs62', models.FloatField(verbose_name='Upi\xf3r')),
                ('vs63', models.FloatField(verbose_name='Wampir')),
                ('vs64', models.FloatField(verbose_name='Wampirzy lord')),
                ('vs65', models.FloatField(verbose_name='Lisz')),
                ('vs66', models.FloatField(verbose_name='Arcylisz')),
                ('vs67', models.FloatField(verbose_name='Czarny rycerz')),
                ('vs68', models.FloatField(verbose_name='Upiorny rycerz')),
                ('vs69', models.FloatField(verbose_name='Ko\u015bciany smok')),
                ('vs70', models.FloatField(verbose_name='Upiorny smok')),
                ('vs71', models.FloatField(verbose_name='Troglodyta')),
                ('vs72', models.FloatField(verbose_name='Piekielny troglodyta')),
                ('vs73', models.FloatField(verbose_name='Harpia')),
                ('vs74', models.FloatField(verbose_name='Harpia wied\u017ama')),
                ('vs75', models.FloatField(verbose_name='Z\u0142e oko')),
                ('vs76', models.FloatField(verbose_name='Obserwator')),
                ('vs77', models.FloatField(verbose_name='Meduza')),
                ('vs78', models.FloatField(verbose_name='Meduza kr\xf3lewska')),
                ('vs79', models.FloatField(verbose_name='Minotaur')),
                ('vs80', models.FloatField(verbose_name='Wielki minotaur')),
                ('vs81', models.FloatField(verbose_name='Mantikora')),
                ('vs82', models.FloatField(verbose_name='Chimera')),
                ('vs83', models.FloatField(verbose_name='Czerwony smok')),
                ('vs84', models.FloatField(verbose_name='Czarny smok')),
                ('vs85', models.FloatField(verbose_name='Goblin')),
                ('vs86', models.FloatField(verbose_name='Hobgoblin')),
                ('vs87', models.FloatField(verbose_name='Wilczy je\u017adziec')),
                ('vs88', models.FloatField(verbose_name='Wilczy rycerz')),
                ('vs89', models.FloatField(verbose_name='Ork')),
                ('vs90', models.FloatField(verbose_name='Uruk')),
                ('vs91', models.FloatField(verbose_name='Ogr')),
                ('vs92', models.FloatField(verbose_name='Ogr szaman')),
                ('vs93', models.FloatField(verbose_name='Rok')),
                ('vs94', models.FloatField(verbose_name='Ptak gromu')),
                ('vs95', models.FloatField(verbose_name='Cyklop')),
                ('vs96', models.FloatField(verbose_name='Cyklop kr\xf3lewski')),
                ('vs97', models.FloatField(verbose_name='Behemot')),
                ('vs98', models.FloatField(verbose_name='Staro\u017cytny behemot')),
                ('vs99', models.FloatField(verbose_name='Gnoll')),
                ('vs100', models.FloatField(verbose_name='Gnoll maruder')),
                ('vs101', models.FloatField(verbose_name='Jaszczurocz\u0142ek')),
                ('vs102', models.FloatField(verbose_name='Reptilion')),
                ('vs103', models.FloatField(verbose_name='Wa\u017cka')),
                ('vs104', models.FloatField(verbose_name='Smocza wa\u017cka')),
                ('vs105', models.FloatField(verbose_name='Bazyliszek')),
                ('vs106', models.FloatField(verbose_name='Bazyliszek wi\u0119kszy')),
                ('vs107', models.FloatField(verbose_name='Gorgona')),
                ('vs108', models.FloatField(verbose_name='Wielka gorgona')),
                ('vs109', models.FloatField(verbose_name='Wiwerna')),
                ('vs110', models.FloatField(verbose_name='Wiwerna kr\xf3lewska')),
                ('vs111', models.FloatField(verbose_name='Hydra')),
                ('vs112', models.FloatField(verbose_name='Hydra chaosu')),
                ('vs113', models.FloatField(verbose_name='Nimfa')),
                ('vs114', models.FloatField(verbose_name='Rusa\u0142ka')),
                ('vs115', models.FloatField(verbose_name='\u017bywio\u0142ak powietrza')),
                ('vs116', models.FloatField(verbose_name='\u017bywio\u0142ak burzy')),
                ('vs117', models.FloatField(verbose_name='\u017bywio\u0142ak wody')),
                ('vs118', models.FloatField(verbose_name='\u017bywio\u0142ak lodu')),
                ('vs119', models.FloatField(verbose_name='\u017bywio\u0142ak ognia')),
                ('vs120', models.FloatField(verbose_name='\u017bywio\u0142ak energii')),
                ('vs121', models.FloatField(verbose_name='\u017bywio\u0142ak ziemi')),
                ('vs122', models.FloatField(verbose_name='\u017bywio\u0142ak magmy')),
                ('vs123', models.FloatField(verbose_name='\u017bywio\u0142ak umys\u0142u')),
                ('vs124', models.FloatField(verbose_name='\u017bywio\u0142ak magii')),
                ('vs125', models.FloatField(verbose_name='Ognisty ptak')),
                ('vs126', models.FloatField(verbose_name='Feniks')),
                ('vs127', models.FloatField(verbose_name='Ch\u0142op')),
                ('vs128', models.FloatField(verbose_name='Nizio\u0142ek')),
                ('vs129', models.FloatField(verbose_name='Rozb\xf3jnik')),
                ('vs130', models.FloatField(verbose_name='Knurzy je\u017adziec')),
                ('vs131', models.FloatField(verbose_name='Mumia')),
                ('vs132', models.FloatField(verbose_name='Nomad')),
                ('vs133', models.FloatField(verbose_name='Strzelec')),
                ('vs134', models.FloatField(verbose_name='Troll')),
                ('vs135', models.FloatField(verbose_name='Z\u0142oty golem')),
                ('vs136', models.FloatField(verbose_name='Diamentowy golem')),
                ('vs137', models.FloatField(verbose_name='Czarodziej')),
                ('vs138', models.FloatField(verbose_name='Czarodziejski smok')),
                ('vs139', models.FloatField(verbose_name='Rdzawy smok')),
                ('vs140', models.FloatField(verbose_name='Kryszta\u0142owy smok')),
                ('vs141', models.FloatField(verbose_name='B\u0142\u0119kitny smok')),
                ('unit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='units.Unit')),
            ],
        ),
    ]
