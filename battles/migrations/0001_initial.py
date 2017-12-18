# Generated by Django 2.0 on 2017-12-18 13:06

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
                ('vs1', models.FloatField(verbose_name='Pikeman')),
                ('vs2', models.FloatField(verbose_name='Halberdier')),
                ('vs3', models.FloatField(verbose_name='Archer')),
                ('vs4', models.FloatField(verbose_name='Marksman')),
                ('vs5', models.FloatField(verbose_name='Griffin')),
                ('vs6', models.FloatField(verbose_name='Royal Griffin')),
                ('vs7', models.FloatField(verbose_name='Swordsman')),
                ('vs8', models.FloatField(verbose_name='Crusader')),
                ('vs9', models.FloatField(verbose_name='Monk')),
                ('vs10', models.FloatField(verbose_name='Zealot')),
                ('vs11', models.FloatField(verbose_name='Cavalier')),
                ('vs12', models.FloatField(verbose_name='Champion')),
                ('vs13', models.FloatField(verbose_name='Angel')),
                ('vs14', models.FloatField(verbose_name='Archangel')),
                ('vs15', models.FloatField(verbose_name='Centaur')),
                ('vs16', models.FloatField(verbose_name='Centaur Captain')),
                ('vs17', models.FloatField(verbose_name='Dwarf')),
                ('vs18', models.FloatField(verbose_name='Battle Dwarf')),
                ('vs19', models.FloatField(verbose_name='Wood Elf')),
                ('vs20', models.FloatField(verbose_name='Grand Elf')),
                ('vs21', models.FloatField(verbose_name='Pegasus')),
                ('vs22', models.FloatField(verbose_name='Silver Pegasus')),
                ('vs23', models.FloatField(verbose_name='Dendroid Guard')),
                ('vs24', models.FloatField(verbose_name='Dendroid Soldier')),
                ('vs25', models.FloatField(verbose_name='Unicorn')),
                ('vs26', models.FloatField(verbose_name='War Unicorn')),
                ('vs27', models.FloatField(verbose_name='Green Dragon')),
                ('vs28', models.FloatField(verbose_name='Gold Dragon')),
                ('vs29', models.FloatField(verbose_name='Gremlin')),
                ('vs30', models.FloatField(verbose_name='Master Gremlin')),
                ('vs31', models.FloatField(verbose_name='Stone Gargoyle')),
                ('vs32', models.FloatField(verbose_name='Obsidian Gargoyle')),
                ('vs33', models.FloatField(verbose_name='Stone Golem')),
                ('vs34', models.FloatField(verbose_name='Iron Golem')),
                ('vs35', models.FloatField(verbose_name='Mage')),
                ('vs36', models.FloatField(verbose_name='Arch Mage')),
                ('vs37', models.FloatField(verbose_name='Genie')),
                ('vs38', models.FloatField(verbose_name='Master Genie')),
                ('vs39', models.FloatField(verbose_name='Naga')),
                ('vs40', models.FloatField(verbose_name='Naga Queen')),
                ('vs41', models.FloatField(verbose_name='Giant')),
                ('vs42', models.FloatField(verbose_name='Titan')),
                ('vs43', models.FloatField(verbose_name='Imp')),
                ('vs44', models.FloatField(verbose_name='Familiar')),
                ('vs45', models.FloatField(verbose_name='Gog')),
                ('vs46', models.FloatField(verbose_name='Magog')),
                ('vs47', models.FloatField(verbose_name='Hell Hound')),
                ('vs48', models.FloatField(verbose_name='Cerberus')),
                ('vs49', models.FloatField(verbose_name='Demon')),
                ('vs50', models.FloatField(verbose_name='Horned Demon')),
                ('vs51', models.FloatField(verbose_name='Pit Fiend')),
                ('vs52', models.FloatField(verbose_name='Pit Lord')),
                ('vs53', models.FloatField(verbose_name='Efreet')),
                ('vs54', models.FloatField(verbose_name='Efreet Sultan')),
                ('vs55', models.FloatField(verbose_name='Devil')),
                ('vs56', models.FloatField(verbose_name='Arch Devil')),
                ('vs57', models.FloatField(verbose_name='Skeleton')),
                ('vs58', models.FloatField(verbose_name='Skeleton Warrior')),
                ('vs59', models.FloatField(verbose_name='Walking Dead')),
                ('vs60', models.FloatField(verbose_name='Zombie')),
                ('vs61', models.FloatField(verbose_name='Wight')),
                ('vs62', models.FloatField(verbose_name='Wraith')),
                ('vs63', models.FloatField(verbose_name='Vampire')),
                ('vs64', models.FloatField(verbose_name='Vampire Lord')),
                ('vs65', models.FloatField(verbose_name='Lich')),
                ('vs66', models.FloatField(verbose_name='Power Lich')),
                ('vs67', models.FloatField(verbose_name='Black Knight')),
                ('vs68', models.FloatField(verbose_name='Dread Knight')),
                ('vs69', models.FloatField(verbose_name='Bone Dragon')),
                ('vs70', models.FloatField(verbose_name='Ghost Dragon')),
                ('vs71', models.FloatField(verbose_name='Troglodyte')),
                ('vs72', models.FloatField(verbose_name='Infernal Troglodyte')),
                ('vs73', models.FloatField(verbose_name='Harpy')),
                ('vs74', models.FloatField(verbose_name='Harpy Hag')),
                ('vs75', models.FloatField(verbose_name='Beholder')),
                ('vs76', models.FloatField(verbose_name='Evil Eye')),
                ('vs77', models.FloatField(verbose_name='Medusa')),
                ('vs78', models.FloatField(verbose_name='Medusa Queen')),
                ('vs79', models.FloatField(verbose_name='Minotaur')),
                ('vs80', models.FloatField(verbose_name='Minotaur King')),
                ('vs81', models.FloatField(verbose_name='Manticore')),
                ('vs82', models.FloatField(verbose_name='Scorpicore')),
                ('vs83', models.FloatField(verbose_name='Red Dragon')),
                ('vs84', models.FloatField(verbose_name='Black Dragon')),
                ('vs85', models.FloatField(verbose_name='Goblin')),
                ('vs86', models.FloatField(verbose_name='Hobgoblin')),
                ('vs87', models.FloatField(verbose_name='Wolf Rider')),
                ('vs88', models.FloatField(verbose_name='Wolf Raider')),
                ('vs89', models.FloatField(verbose_name='Orc')),
                ('vs90', models.FloatField(verbose_name='Orc Chieftain')),
                ('vs91', models.FloatField(verbose_name='Ogre')),
                ('vs92', models.FloatField(verbose_name='Ogre Mage')),
                ('vs93', models.FloatField(verbose_name='Roc')),
                ('vs94', models.FloatField(verbose_name='Thunderbird')),
                ('vs95', models.FloatField(verbose_name='Cyclops')),
                ('vs96', models.FloatField(verbose_name='Cyclops King')),
                ('vs97', models.FloatField(verbose_name='Behemoth')),
                ('vs98', models.FloatField(verbose_name='Ancient Behemoth')),
                ('vs99', models.FloatField(verbose_name='Gnoll')),
                ('vs100', models.FloatField(verbose_name='Gnoll Marauder')),
                ('vs101', models.FloatField(verbose_name='Lizardman')),
                ('vs102', models.FloatField(verbose_name='Lizard Warrior')),
                ('vs103', models.FloatField(verbose_name='Serpent Fly')),
                ('vs104', models.FloatField(verbose_name='Dragon Fly')),
                ('vs105', models.FloatField(verbose_name='Basilisk')),
                ('vs106', models.FloatField(verbose_name='Greater Basilisk')),
                ('vs107', models.FloatField(verbose_name='Gorgon')),
                ('vs108', models.FloatField(verbose_name='Mighty Gorgon')),
                ('vs109', models.FloatField(verbose_name='Wyvern')),
                ('vs110', models.FloatField(verbose_name='Wyvern Monarch')),
                ('vs111', models.FloatField(verbose_name='Hydra')),
                ('vs112', models.FloatField(verbose_name='Chaos Hydra')),
                ('vs113', models.FloatField(verbose_name='Pixie')),
                ('vs114', models.FloatField(verbose_name='Sprite')),
                ('vs115', models.FloatField(verbose_name='Air Elemental')),
                ('vs116', models.FloatField(verbose_name='Storm Elemental')),
                ('vs117', models.FloatField(verbose_name='Water Elemental')),
                ('vs118', models.FloatField(verbose_name='Ice Elemental')),
                ('vs119', models.FloatField(verbose_name='Fire Elemental')),
                ('vs120', models.FloatField(verbose_name='Energy Elemental')),
                ('vs121', models.FloatField(verbose_name='Earth Elemental')),
                ('vs122', models.FloatField(verbose_name='Magma Elemental')),
                ('vs123', models.FloatField(verbose_name='Psychic Elemental')),
                ('vs124', models.FloatField(verbose_name='Magic Elemental')),
                ('vs125', models.FloatField(verbose_name='Firebird')),
                ('vs126', models.FloatField(verbose_name='Phoenix')),
                ('vs127', models.FloatField(verbose_name='Peasant')),
                ('vs128', models.FloatField(verbose_name='Halfling')),
                ('vs129', models.FloatField(verbose_name='Rogue')),
                ('vs130', models.FloatField(verbose_name='Boar')),
                ('vs131', models.FloatField(verbose_name='Mummy')),
                ('vs132', models.FloatField(verbose_name='Nomad')),
                ('vs133', models.FloatField(verbose_name='Sharpshooter')),
                ('vs134', models.FloatField(verbose_name='Troll')),
                ('vs135', models.FloatField(verbose_name='Gold Golem')),
                ('vs136', models.FloatField(verbose_name='Diamond Golem')),
                ('vs137', models.FloatField(verbose_name='Enchanter')),
                ('vs138', models.FloatField(verbose_name='Faerie Dragon')),
                ('vs139', models.FloatField(verbose_name='Rust Dragon')),
                ('vs140', models.FloatField(verbose_name='Crystal Dragon')),
                ('vs141', models.FloatField(verbose_name='Azure Dragon')),
                ('unit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='units.Unit')),
            ],
        ),
    ]
