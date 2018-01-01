	__nest__ (
		__all__,
		'unit', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'unit';
					var ceil = __init__ (__world__.math).ceil;
					var pi = __init__ (__world__.math).pi;
					var cos = __init__ (__world__.math).cos;
					var log = __init__ (__world__.math).log;
					var random = __init__ (__world__.random).random;
					var randint = __init__ (__world__.random).randint;
					var data = __init__ (__world__.crtraits).data;
					var haters = __init__ (__world__.crtraits).haters;
					var elementals = __init__ (__world__.crtraits).elementals;
					var keywords = new set (['DOUBLE_WIDE', 'SHOOTING_ARMY', 'const_free_attack', 'const_jousting', 'const_no_melee_penalty', 'const_two_attacks', 'IS_UNDEAD', 'cusELEMENTAL', 'cusGOLEM']);
					var my_gauss = function (mu, sigma) {
						return sigma * (Math.pow (-(2) * log (random ()), 0.5) * cos ((2 * pi) * random ())) + mu;
					};
					var my_binomial = function (n, p) {
						if (n < 100) {
							return sum ((function () {
								var __accu0__ = [];
								for (var _ = 0; _ < int (n); _++) {
									__accu0__.append (random () < p);
								}
								return py_iter (__accu0__);
							}) ());
						}
						return int (my_gauss (n * p, Math.pow ((n * p) * (1 - p), 0.5)));
					};
					var my_divmod = function (n, m) {
						var div = Math.floor (n / m);
						var mod = n - m * div;
						return tuple ([div, mod]);
					};
					var make_unit = function (py_name) {
						var d = data [py_name];
						return UnitType (py_name, d [0], d [1], d [2], d [3], d [4], d [5], d [6], d [7], d [8]);
					};
					var UnitType = __class__ ('UnitType', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, py_name, aiv, hp, spd, att, df, dmlow, dmhi, shots, abi) {
							self.py_name = py_name;
							self.ai_value = aiv;
							self.hp = hp;
							self.speed = spd;
							self.attack = att;
							self.defense = df;
							self.dmg_min = dmlow;
							self.dmg_max = dmhi;
							self.shots = shots;
							self.attributes = (function () {
								var __accu0__ = [];
								var __iterable0__ = abi;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var x = __iterable0__ [__index0__];
									if (__in__ (x, keywords)) {
										__accu0__.append (x);
									}
								}
								return __accu0__;
							}) ();
							self.hates = (function () {
								var __accu0__ = [];
								var __iterable0__ = haters;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var __left0__ = __iterable0__ [__index0__];
									var k = __left0__ [0];
									var v = __left0__ [1];
									if (k == self.py_name) {
										__accu0__.append (v);
									}
								}
								return __accu0__;
							}) ();
							self.opp_elem = (function () {
								var __accu0__ = [];
								var __iterable0__ = elementals;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var __left0__ = __iterable0__ [__index0__];
									var k = __left0__ [0];
									var v = __left0__ [1];
									if (k == self.py_name) {
										__accu0__.append (v);
									}
								}
								return __accu0__;
							}) ();
						});}
					});
					var Stack = __class__ ('Stack', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, unit, count) {
							self.unit = unit;
							self.cap = count;
							self.py_name = unit.py_name;
							self.speed = unit.speed;
							self.true_hp = unit.hp;
							self.true_attack = unit.attack;
							self.true_defense = unit.defense;
							self.dmg_min = unit.dmg_min;
							self.dmg_max = unit.dmg_max;
							self.hates = unit.hates;
							self.opp_elem = unit.opp_elem;
							self.attributes = unit.attributes;
							if (self.py_name == 'Battle Dwarf') {
								self.magic_resist = 0.4;
							}
							else if (__in__ (self.py_name, list (['Dwarf', 'Crystal Dragon']))) {
								self.magic_resist = 0.2;
							}
							else {
								self.magic_resist = 0.0;
							}
							if (self.py_name == 'Gold Dragon') {
								self.spell_immunity = 4;
							}
							else if (__in__ (self.py_name, list (['Black Dragon', 'Magic Elemental']))) {
								self.spell_immunity = 5;
							}
							else if (__in__ (self.py_name, list (['Green Dragon', 'Red Dragon', 'Azure Dragon']))) {
								self.spell_immunity = 3;
							}
							else {
								self.spell_immunity = 0;
							}
							self.reset_state ();
						});},
						get reset_state () {return __get__ (this, function (self) {
							self.count = self.cap;
							self.hp = self.true_hp;
							self.hp_left = self.hp;
							self.attack = self.true_attack;
							self.defense = self.true_defense;
							self.shots = self.unit.shots;
							self.aged = -(1);
							self.poisoned = -(1);
							self.times_poisoned = 0;
							self.cursed = 0;
							self.weakened = 0;
							self.diseased = 0;
							self.petrified = 0;
							self.blinded = 0;
							self.paralyzed = 0;
							self.stunned_from_retaliation = false;
							self.rebirth_available = self.py_name == 'Phoenix' || false;
						});},
						get take_dmg () {return __get__ (this, function (self, dmg) {
							if (dmg < self.hp_left) {
								self.hp_left -= dmg;
							}
							else {
								dmg -= self.hp_left;
								var __left0__ = my_divmod (dmg, self.hp);
								var num_killed = __left0__ [0];
								var rem = __left0__ [1];
								self.count -= num_killed + 1;
								self.hp_left = self.hp - rem;
								self.count = max (self.count, 0);
							}
							if (self.py_name == 'Phoenix' && !(self.is_alive ()) && self.rebirth_available) {
								self.rebirth ();
							}
						});},
						get __calc_base_damage () {return __get__ (this, function (self, other) {
							var real_dmg_max = (self.cursed > 0 ? self.dmg_min : self.dmg_max);
							if (self.count < 10) {
								var base_dmg = sum ((function () {
									var __accu0__ = [];
									for (var _ = 0; _ < int (self.count); _++) {
										__accu0__.append (randint (self.dmg_min, real_dmg_max));
									}
									return __accu0__;
								}) ());
							}
							else {
								var base_dmg = Math.floor ((sum ((function () {
									var __accu0__ = [];
									for (var _ = 0; _ < 10; _++) {
										__accu0__.append (randint (self.dmg_min, real_dmg_max));
									}
									return __accu0__;
								}) ()) * self.count) / 10);
							}
							var defense = other.defense;
							if (self.py_name == 'Behemoth') {
								var defense = int (0.6 * defense);
							}
							else if (self.py_name == 'Ancient Behemoth') {
								var defense = int (0.2 * defense);
							}
							var att_to_def = self.attack - defense;
							var base_dmg_reduction = 0.0;
							var base_dmg_bonus = 0.0;
							if (att_to_def > 0) {
								var base_dmg_bonus = min (0.05 * att_to_def, 3.0);
							}
							else {
								var base_dmg_reduction = min (0.025 * -(att_to_def), 0.7);
							}
							return tuple ([base_dmg, base_dmg_bonus, base_dmg_reduction]);
						});},
						get attack_melee () {return __get__ (this, function (self, other, dmg_reductions, melee_penalty, retaliation) {
							if (typeof dmg_reductions == 'undefined' || (dmg_reductions != null && dmg_reductions .hasOwnProperty ("__kwargtrans__"))) {;
								var dmg_reductions = null;
							};
							if (typeof melee_penalty == 'undefined' || (melee_penalty != null && melee_penalty .hasOwnProperty ("__kwargtrans__"))) {;
								var melee_penalty = false;
							};
							if (typeof retaliation == 'undefined' || (retaliation != null && retaliation .hasOwnProperty ("__kwargtrans__"))) {;
								var retaliation = false;
							};
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'other': var other = __allkwargs0__ [__attrib0__]; break;
											case 'dmg_reductions': var dmg_reductions = __allkwargs0__ [__attrib0__]; break;
											case 'melee_penalty': var melee_penalty = __allkwargs0__ [__attrib0__]; break;
											case 'retaliation': var retaliation = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
							}
							else {
							}
							var dmg_bonus = 0.0;
							if (dmg_reductions === null) {
								var dmg_reductions = list ([]);
							}
							var __left0__ = self.__calc_base_damage (other);
							var base_dmg = __left0__ [0];
							var base_dmg_bonus = __left0__ [1];
							var base_dmg_reduction = __left0__ [2];
							dmg_bonus += base_dmg_bonus;
							dmg_reductions.append (base_dmg_reduction);
							if (melee_penalty) {
								dmg_reductions.append (0.5);
							}
							if (self.py_name == 'Dread Knight' && random () < 0.2) {
								dmg_bonus++;
							}
							else if (__in__ (other.py_name, self.hates)) {
								dmg_bonus += 0.5;
							}
							else if (__in__ (other.py_name, self.opp_elem)) {
								dmg_bonus++;
							}
							if (self.py_name == 'Magic Elemental' && other.spell_immunity == 5) {
								dmg_reductions.append (0.5);
							}
							else if (self.py_name == 'Psychic Elemental' && (other.is_nonliving () || __in__ (other.py_name, list (['Giant', 'Titan', 'Black Dragon'])))) {
								dmg_reductions.append (0.5);
							}
							var damage = base_dmg * (1.0 + dmg_bonus);
							var fire_shield_damage = 0.2 * min (damage, (other.count - 1) * other.hp + other.hp_left);
							var __iterable0__ = dmg_reductions;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var reduction = __iterable0__ [__index0__];
								damage *= 1.0 - reduction;
							}
							var damage = int (damage);
							other.take_dmg (damage);
							other.petrified = 0;
							other.blinded = 0;
							other.paralyzed = 0;
							other.stunned_from_retaliation = false;
							if (self.py_name == 'Vampire Lord' && !(other.is_nonliving ())) {
								self.drain_life (damage);
							}
							else if (self.py_name == 'Mighty Gorgon' && !(other.is_nonliving ())) {
								self.death_stare (other);
							}
							else if (self.py_name == 'Thunderbird' && other.spell_immunity < 2 && !__in__ (other.py_name, list (['Earth Elemental', 'Magma Elemental'])) && random () < 0.2 && random () > other.magic_resist) {
								self.thunderbolt (other);
							}
							else if (self.py_name == 'Rust Dragon') {
								self.acid_breath (other);
							}
							else if (self.py_name == 'Ghost Dragon' && !(other.is_nonliving ()) && random () < 0.2) {
								other.start_aging ();
							}
							else if (self.py_name == 'Wyvern Monarch' && other.times_poisoned < 5 && !(other.is_nonliving ()) && random () < 0.2) {
								other.start_poison ();
							}
							else if (__in__ (self.py_name, list (['Black Knight', 'Dread Knight', 'Mummy'])) && other.spell_immunity < 1 && !(other.is_undead ()) && !__in__ (other.py_name, list (['Efreet', 'Efreet Sultan', 'Fire Elemental', 'Energy Elemental', 'Firebird', 'Phoenix'])) && random () > other.magic_resist) {
								if (self.py_name == 'Mummy' && random () < 0.5 || self.py_name != 'Mummy' && random () < 0.2) {
									self.start_curse (other);
								}
							}
							else if (self.py_name == 'Dragon Fly' && other.spell_immunity < 2 && random () > other.magic_resist) {
								self.start_weakness (other);
							}
							else if (self.py_name == 'Zombie' && !(other.is_nonliving ()) && random () < 0.2) {
								self.start_disease (other);
							}
							else if (__in__ (self.py_name, list (['Medusa', 'Medusa Queen', 'Basilisk', 'Greater Basilisk'])) && other.spell_immunity == 0 && !__in__ (other.py_name, list (['Troglodyte', 'Infernal Troglodyte'])) && random () < 0.2) {
								self.start_petrification (other);
								other.stunned_from_retaliation = retaliation;
							}
							else if (__in__ (self.py_name, list (['Unicorn', 'War Unicorn'])) && other.spell_immunity < 2 && !(other.is_nonliving ()) && !__in__ (other.py_name, list (['Troglodyte', 'Infernal Troglodyte', 'Giant', 'Titan', 'Efreet', 'Efreet Sultan', 'Firebird', 'Phoenix'])) && random () < 0.2) {
								self.start_blindness (other);
								other.stunned_from_retaliation = retaliation;
							}
							else if (self.py_name == 'Scorpicore' && !__in__ (other.py_name, list (['Gold Dragon', 'Black Dragon', 'Magic Elemental'])) && random () < 0.2) {
								self.start_paralysis (other);
								other.stunned_from_retaliation = retaliation;
							}
							if (other.py_name == 'Efreet Sultan' && !__in__ (self.py_name, list (['Efreet', 'Efreet Sultan', 'Fire Elemental', 'Energy Elemental', 'Firebird', 'Phoenix']))) {
								self.efreet_fire_shield (fire_shield_damage);
							}
						});},
						get attack_range () {return __get__ (this, function (self, other, range_penalty) {
							var dmg_bonus = 0.0;
							var __left0__ = self.__calc_base_damage (other);
							var base_dmg = __left0__ [0];
							var base_dmg_bonus = __left0__ [1];
							var base_dmg_reduction = __left0__ [2];
							dmg_bonus += base_dmg_bonus;
							var damage = (base_dmg * (1.0 + dmg_bonus)) * (1.0 - base_dmg_reduction);
							if (range_penalty) {
								damage /= 2.0;
							}
							other.take_dmg (int (damage));
							self.shots--;
						});},
						get start_weakness () {return __get__ (this, function (self, other) {
							if (self.speed > other.speed) {
								other.weakened = 3;
							}
							else if (self.speed < other.speed) {
								other.weakened = 2;
							}
							else {
								other.weakened = randint (2, 3);
							}
							other.attack = max (0, other.true_attack - 6);
						});},
						get weakness () {return __get__ (this, function (self) {
							self.weakened--;
							if (self.weakened == 0) {
								self.attack = self.true_attack;
							}
						});},
						get start_curse () {return __get__ (this, function (self, other) {
							if (self.speed > other.speed) {
								other.cursed = 3;
							}
							else if (self.speed < other.speed) {
								other.cursed = 2;
							}
							else {
								other.cursed = randint (2, 3);
							}
						});},
						get curse () {return __get__ (this, function (self) {
							self.cursed--;
						});},
						get start_disease () {return __get__ (this, function (self, other) {
							if (self.speed > other.speed) {
								other.diseased = 3;
							}
							else if (self.speed < other.speed) {
								other.diseased = 2;
							}
							else {
								other.diseased = randint (2, 3);
							}
							other.attack = max (0, other.true_attack - 2);
							other.defense = max (0, other.true_defense - 2);
						});},
						get disease () {return __get__ (this, function (self) {
							self.diseased--;
							if (self.diseased == 0) {
								self.attack = self.true_attack;
								self.defense = self.true_defense;
							}
						});},
						get start_petrification () {return __get__ (this, function (self, other) {
							if (self.speed > other.speed) {
								other.petrified = 3;
							}
							else if (self.speed < other.speed) {
								other.petrified = 2;
							}
							else {
								other.petrified = randint (2, 3);
							}
						});},
						get petrification () {return __get__ (this, function (self) {
							self.petrified--;
						});},
						get start_blindness () {return __get__ (this, function (self, other) {
							if (self.speed > other.speed) {
								other.blinded = 3;
							}
							else if (self.speed < other.speed) {
								other.blinded = 2;
							}
							else {
								other.blinded = randint (2, 3);
							}
						});},
						get blindness () {return __get__ (this, function (self) {
							self.blinded--;
						});},
						get start_paralysis () {return __get__ (this, function (self, other) {
							if (self.speed > other.speed) {
								other.paralyzed = 3;
							}
							else if (self.speed < other.speed) {
								other.paralyzed = 2;
							}
							else {
								other.paralyzed = randint (2, 3);
							}
						});},
						get paralysis () {return __get__ (this, function (self) {
							self.paralyzed--;
						});},
						get start_aging () {return __get__ (this, function (self) {
							var was_already_aged = self.aged > 0;
							self.aged = (self.speed < 14 ? 3 : 2);
							if (!(was_already_aged)) {
								var hp_missing = self.hp - self.hp_left;
								self.hp = Math.floor ((self.hp + 1) / 2);
								self.hp_left = max (1, self.hp - hp_missing);
							}
						});},
						get age () {return __get__ (this, function (self) {
							self.aged--;
							if (self.aged == 0) {
								self.stop_aging ();
							}
						});},
						get stop_aging () {return __get__ (this, function (self) {
							self.aged = -(1);
							var hp_missing = self.hp - self.hp_left;
							self.hp = self.true_hp;
							self.hp_left = self.hp - hp_missing;
						});},
						get start_poison () {return __get__ (this, function (self) {
							var was_already_poisoned = self.poisoned >= 0;
							self.poisoned = 2;
							if (!(was_already_poisoned)) {
								self.times_poisoned++;
								var hp_missing = self.hp - self.hp_left;
								self.hp = int (ceil (self.true_hp * (1 - 0.1 * self.times_poisoned)));
								self.hp_left = max (1, self.hp - hp_missing);
							}
						});},
						get poison () {return __get__ (this, function (self) {
							self.poisoned--;
							if (self.times_poisoned < 5 && self.poisoned >= 0) {
								self.times_poisoned++;
								var hp_missing = self.hp - self.hp_left;
								self.hp = int (ceil (self.true_hp * (1 - 0.1 * self.times_poisoned)));
								self.hp_left = max (1, self.hp - hp_missing);
							}
						});},
						get drain_life () {return __get__ (this, function (self, damage_dealt) {
							if (self.hp_left + damage_dealt <= self.hp) {
								self.hp_left += damage_dealt;
							}
							else {
								damage_dealt -= self.hp - self.hp_left;
								self.hp_left = self.hp;
								var __left0__ = my_divmod (damage_dealt, self.hp);
								var res = __left0__ [0];
								var rem = __left0__ [1];
								self.count = min (self.cap, self.count + res);
								if (self.count < self.cap && rem) {
									self.count++;
									self.hp_left = rem;
								}
							}
						});},
						get acid_breath () {return __get__ (this, function (self, other) {
							other.defense = max (0, other.defense - 3);
							if (random () < 0.3) {
								other.take_dmg (25 * self.count);
							}
						});},
						get magic_dmg_resistance () {return __get__ (this, function (self) {
							if (self.py_name == 'Stone Golem') {
								return 0.5;
							}
							else if (self.py_name == 'Iron Golem') {
								return 0.75;
							}
							else if (self.py_name == 'Gold Golem') {
								return 0.85;
							}
							else if (self.py_name == 'Diamond Golem') {
								return 0.95;
							}
							return 0.0;
						});},
						get efreet_fire_shield () {return __get__ (this, function (self, damage) {
							damage *= 1.0 - self.magic_dmg_resistance ();
							if (__in__ (self.py_name, list (['Water Elemental', 'Ice Elemental']))) {
								damage *= 2;
							}
							self.take_dmg (int (damage));
						});},
						get thunderbolt () {return __get__ (this, function (self, other) {
							var damage = 10 * self.count;
							damage *= 1 - other.magic_dmg_resistance ();
							if (__in__ (self.py_name, list (['Air Elemental', 'Storm Elemental']))) {
								damage *= 2;
							}
							other.take_dmg (int (damage));
						});},
						get death_stare () {return __get__ (this, function (self, other) {
							var to_death_stare = min (my_binomial (self.count, 0.1), Math.floor ((self.count + 9) / 10));
							if (to_death_stare) {
								other.count = max (0, other.count - to_death_stare);
								other.hp_left = other.hp;
							}
						});},
						get rebirth () {return __get__ (this, function (self) {
							var __left0__ = my_divmod (self.count, 5);
							var certain = __left0__ [0];
							var rem = __left0__ [1];
							var to_rebirth = certain + (random () < 0.2 * rem);
							self.count = to_rebirth;
							self.rebirth_available = false;
						});},
						get regenerate () {return __get__ (this, function (self) {
							self.hp_left = self.hp;
						});},
						get is_alive () {return __get__ (this, function (self) {
							return self.count > 0;
						});},
						get is_shooter () {return __get__ (this, function (self) {
							return __in__ ('SHOOTING_ARMY', self.attributes);
						});},
						get strikes_twice () {return __get__ (this, function (self) {
							return __in__ ('const_two_attacks', self.attributes) && !(self.is_shooter ());
						});},
						get shoots_twice () {return __get__ (this, function (self) {
							return __in__ ('const_two_attacks', self.attributes) && self.is_shooter ();
						});},
						get is_big () {return __get__ (this, function (self) {
							return __in__ ('DOUBLE_WIDE', self.attributes);
						});},
						get melee_penalty () {return __get__ (this, function (self) {
							return self.is_shooter () && !(__in__ ('const_no_melee_penalty', self.attributes));
						});},
						get no_retaliation () {return __get__ (this, function (self) {
							return __in__ ('const_free_attack', self.attributes);
						});},
						get range_penalty () {return __get__ (this, function (self) {
							return self.is_shooter () && self.py_name != 'Sharpshooter';
						});},
						get is_elemental () {return __get__ (this, function (self) {
							return __in__ ('cusELEMENTAL', self.attributes);
						});},
						get is_undead () {return __get__ (this, function (self) {
							return __in__ ('IS_UNDEAD', self.attributes);
						});},
						get is_golem () {return __get__ (this, function (self) {
							return __in__ ('cusGOLEM', self.attributes);
						});},
						get is_nonliving () {return __get__ (this, function (self) {
							return self.is_elemental () || self.is_undead () || self.is_golem ();
						});},
						get is_stunned () {return __get__ (this, function (self) {
							return bool (self.petrified || self.blinded || self.paralyzed);
						});},
						get advance_statuses () {return __get__ (this, function (self) {
							if (self.aged > 0 && self.is_alive ()) {
								self.age ();
							}
							else if (self.poisoned >= 0 && self.is_alive ()) {
								self.poison ();
							}
							else if (self.cursed) {
								self.curse ();
							}
							else if (self.weakened) {
								self.weakness ();
							}
							else if (self.diseased) {
								self.disease ();
							}
							else if (self.petrified) {
								self.petrification ();
							}
							else if (self.blinded) {
								self.blindness ();
							}
							else if (self.paralyzed) {
								self.paralysis ();
							}
						});}
					});
					__pragma__ ('<use>' +
						'crtraits' +
						'math' +
						'random' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Stack = Stack;
						__all__.UnitType = UnitType;
						__all__.__name__ = __name__;
						__all__.ceil = ceil;
						__all__.cos = cos;
						__all__.data = data;
						__all__.elementals = elementals;
						__all__.haters = haters;
						__all__.keywords = keywords;
						__all__.log = log;
						__all__.make_unit = make_unit;
						__all__.my_binomial = my_binomial;
						__all__.my_divmod = my_divmod;
						__all__.my_gauss = my_gauss;
						__all__.pi = pi;
						__all__.randint = randint;
						__all__.random = random;
					__pragma__ ('</all>')
				}
			}
		}
	);
