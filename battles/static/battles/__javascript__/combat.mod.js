	__nest__ (
		__all__,
		'combat', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'combat';
					var random = __init__ (__world__.random).random;
					var make_unit = __init__ (__world__.unit).make_unit;
					var Stack = __init__ (__world__.unit).Stack;
					var fight = function (stackA, stackB, num_iter) {
						var wins = dict ([[stackA.py_name, list ([0, 0])], [stackB.py_name, list ([0, 0])]]);
						var units_order = function (s1, s2) {
							var temp = sorted (list ([s1, s2]), __kwargtrans__ ({key: (function __lambda__ (x) {
								return x.speed;
							}), reverse: true}));
							if (s1.speed == s2.speed && random () < 0.5) {
								return py_reversed (temp);
							}
							return temp;
						};
						var melee_hit = function (current, other) {
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'current': var current = __allkwargs0__ [__attrib0__]; break;
											case 'other': var other = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
							}
							else {
							}
							if (other.py_name == 'Azure Dragon' && !(current.is_nonliving ()) && random () < 0.1) {
								return tuple ([other, current]);
							}
							var stun_break_bonus = false;
							if (!(current.is_stunned ())) {
								var stun_break_bonus = other.is_stunned () && !(other.stunned_from_retaliation);
								var recovery_blindness = other.blinded > 0;
								var recovery_paralysis = other.paralyzed > 0;
								var dmg_reductions = list ([]);
								if (other.petrified) {
									dmg_reductions.append (0.5);
								}
								current.attack_melee (other, __kwargtrans__ ({dmg_reductions: dmg_reductions, melee_penalty: current.melee_penalty ()}));
								if (other.is_alive () && !(current.no_retaliation ()) && !(other.is_stunned ())) {
									var retaliation_dmg_reductions = list ([]);
									if (recovery_paralysis) {
										retaliation_dmg_reductions.append (0.75);
									}
									else if (recovery_blindness) {
										retaliation_dmg_reductions.append (0.5);
									}
									other.attack_melee (current, __kwargtrans__ ({dmg_reductions: retaliation_dmg_reductions, melee_penalty: other.melee_penalty (), retaliation: true}));
								}
								if (current.is_alive () && current.strikes_twice () && other.is_alive () && !(current.is_stunned ())) {
									current.attack_melee (other);
								}
							}
							current.advance_statuses ();
							if (__in__ (other.py_name, list (['Wight', 'Wraith', 'Troll'])) && other.is_alive ()) {
								other.regenerate ();
							}
							if (stun_break_bonus && !(other.is_stunned ()) && other.is_alive () && current.is_alive () && (current.speed < other.speed || current.speed == other.speed && random () < 0.5)) {
								melee_hit (other, current);
							}
							return tuple ([other, current]);
						};
						var range_hit = function (current, other, penalty) {
							var penalty = (penalty ? current.range_penalty () : false);
							current.attack_range (other, penalty);
							if (current.shoots_twice () && current.shots > 0) {
								current.attack_range (other, penalty);
							}
							if (__in__ (other.py_name, list (['Wight', 'Wraith', 'Troll'])) && other.is_alive ()) {
								other.regenerate ();
							}
							return tuple ([other, current]);
						};
						var fight_to_death = function (current, other) {
							while (current.is_alive () && other.is_alive ()) {
								var __left0__ = melee_hit (current, other);
								var current = __left0__ [0];
								var other = __left0__ [1];
							}
							return tuple ([current, other]);
						};
						var walker_vs_shooter = function (walker, shooter) {
							var to_walk = starting_dist - 1;
							var first_move = __mod__ (to_walk, walker.speed);
							if (first_move == 0) {
								var first_move = walker.speed;
							}
							var avoid_by_move = to_walk - first_move > 10;
							var avoid_by_wait = false;
							if (walker.speed < shooter.speed) {
								var num_shots = Math.floor (to_walk / walker.speed) + (__mod__ (to_walk, walker.speed) > 0);
							}
							else if (walker.speed > shooter.speed) {
								var num_shots = Math.floor (to_walk / walker.speed) - (__mod__ (to_walk, walker.speed) == 0);
								var avoid_by_wait = true;
							}
							else if (random () < 0.5) {
								var num_shots = Math.floor (to_walk / walker.speed) + (__mod__ (to_walk, walker.speed) > 0);
							}
							else {
								var num_shots = Math.floor (to_walk / walker.speed) - (__mod__ (to_walk, walker.speed) == 0);
							}
							var num_full_shots = max (0, (num_shots - avoid_by_move) - avoid_by_wait);
							var num_half_shots = num_shots - num_full_shots;
							for (var j = 0; j < num_half_shots; j++) {
								range_hit (shooter, walker, true);
							}
							for (var j = 0; j < num_full_shots; j++) {
								range_hit (shooter, walker, false);
							}
							var __left0__ = tuple ([walker, shooter]);
							var current = __left0__ [0];
							var other = __left0__ [1];
							return fight_to_death (current, other);
						};
						var starting_dist = 14;
						if (stackA.is_big ()) {
							starting_dist--;
						}
						if (stackB.is_big ()) {
							starting_dist--;
						}
						for (var it = 0; it < num_iter; it++) {
							var __left0__ = units_order (stackA, stackB);
							var current = __left0__ [0];
							var other = __left0__ [1];
							if (!(current.is_shooter ()) && !(other.is_shooter ())) {
								var __left0__ = fight_to_death (current, other);
								var current = __left0__ [0];
								var other = __left0__ [1];
							}
							else if (current.is_shooter () && other.is_shooter ()) {
								var full_round = true;
								while (current.is_alive () && (current.shots > 0 && other.shots > 0 || !(full_round))) {
									var __left0__ = range_hit (current, other, true);
									var current = __left0__ [0];
									var other = __left0__ [1];
									var full_round = !(full_round);
								}
								if (current.is_alive ()) {
									if (current.shots == 0 && other.shots == 0) {
										var __left0__ = units_order (current, other);
										var current = __left0__ [0];
										var other = __left0__ [1];
										var __left0__ = fight_to_death (current, other);
										var current = __left0__ [0];
										var other = __left0__ [1];
									}
									else {
										var shooter = (current.shots > 0 ? current : other);
										var walker = (current.shots == 0 ? current : other);
										var __left0__ = walker_vs_shooter (walker, shooter);
										var current = __left0__ [0];
										var other = __left0__ [1];
									}
								}
							}
							else {
								var shooter = (current.is_shooter () ? current : other);
								var walker = (!(current.is_shooter ()) ? current : other);
								var __left0__ = walker_vs_shooter (walker, shooter);
								var current = __left0__ [0];
								var other = __left0__ [1];
							}
							var winner = (current.is_alive () ? current : other);
							wins [winner.py_name] [0]++;
							wins [winner.py_name] [1] += winner.count;
							stackA.reset_state ();
							stackB.reset_state ();
						}
						var __iterable0__ = list ([stackA.py_name, stackB.py_name]);
						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
							var s = __iterable0__ [__index0__];
							if (wins [s] [0]) {
								wins [s] [1] /= float (wins [s] [0]);
							}
						}
						return wins;
					};
					var find_balance = function (nameA, nameB, num_iter, startA) {
						if (nameA == nameB) {
							if (startA) {
								return tuple ([startA, startA]);
							}
							return tuple ([1, 1]);
						}
						var balanced = function (result) {
							return ((Math.floor (num_iter / 2)) * 0.95 < result [A.py_name] [0] && result [A.py_name] [0] < (Math.floor (num_iter / 2)) * 1.05);
						};
						var unitA = make_unit (nameA);
						var unitB = make_unit (nameB);
						var startA = startA || unitB.ai_value * 10;
						var startB = int ((float (startA) / unitB.ai_value) * unitA.ai_value);
						var A = Stack (unitA, startA);
						var B = Stack (unitB, startB);
						var res = fight (A, B, num_iter);
						if (balanced (res)) {
							return tuple ([A.count, B.count]);
						}
						var B_won_last = res [A.py_name] [0] < res [B.py_name] [0];
						var sign = (B_won_last ? -(1) : 1);
						var change = sign * max (int (B.count / 10.0), 1);
						var enough = false;
						while (!(enough)) {
							var x1 = B.count;
							B.count += change;
							B.cap += change;
							var res = fight (A, B, num_iter);
							var B_won = res [A.py_name] [0] < res [B.py_name] [0];
							var enough = B_won != B_won_last;
							if (!(enough)) {
								var B_won_last = B_won;
							}
						}
						if (balanced (res)) {
							return tuple ([A.count, B.count]);
						}
						var x2 = B.count;
						var low = min (x1, x2);
						var high = max (x1, x2);
						while (true) {
							var middle = low + Math.floor ((high - low) / 2);
							B.count = middle;
							B.cap = middle;
							var res = fight (A, B, num_iter);
							if (balanced (res) || abs (high - low) <= 1) {
								return tuple ([A.count, max (B.count, 1)]);
							}
							var B_won = res [A.py_name] [0] < res [B.py_name] [0];
							if (B_won) {
								var high = middle - 1;
							}
							else {
								var low = middle + 1;
							}
						}
					};
					__pragma__ ('<use>' +
						'random' +
						'unit' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Stack = Stack;
						__all__.__name__ = __name__;
						__all__.fight = fight;
						__all__.find_balance = find_balance;
						__all__.make_unit = make_unit;
						__all__.random = random;
					__pragma__ ('</all>')
				}
			}
		}
	);
