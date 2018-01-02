	(function () {
		var __name__ = '__main__';
		var make_unit = __init__ (__world__.unit).make_unit;
		var Stack = __init__ (__world__.unit).Stack;
		var fight_orig = __init__ (__world__.combat).fight;
		var find_balance_orig = __init__ (__world__.combat).find_balance;
		var fight = function (nameA, countA, nameB, countB, num_fights) {
			var A = Stack (make_unit (nameA), countA);
			var B = Stack (make_unit (nameB), countB);
			var result = fight_orig (A, B, num_fights);
			return tuple ([result [A.py_name] [0], result [B.py_name] [0]]);
		};
		var find_balance = function (nameA, countA, nameB, countB, num_fights) {
			var count1 = countA || countB;
			var idxA = (countB ? 1 : 0);
			var idxB = __mod__ (idxA + 1, 2);
			var name1 = (count1 == countA ? nameA : nameB);
			var name2 = (count1 == countA ? nameB : nameA);
			var result = find_balance_orig (name1, name2, num_fights, count1);
			return tuple ([result [idxA], result [idxB], idxA == 0]);
		};
		__pragma__ ('<use>' +
			'combat' +
			'unit' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Stack = Stack;
			__all__.__name__ = __name__;
			__all__.fight = fight;
			__all__.fight_orig = fight_orig;
			__all__.find_balance = find_balance;
			__all__.find_balance_orig = find_balance_orig;
			__all__.make_unit = make_unit;
		__pragma__ ('</all>')
	}) ();
