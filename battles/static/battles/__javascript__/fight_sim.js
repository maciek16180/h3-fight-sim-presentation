"use strict";
// Transcrypt'ed from Python, 2018-01-03 15:18:19
function fight_sim () {
    var __symbols__ = ['__py3.6__', '__esv5__'];
    var __all__ = {};
    var __world__ = __all__;
    var __nest__ = function (headObject, tailNames, value) {
        var current = headObject;
        if (tailNames != '') {
            var tailChain = tailNames.split ('.');
            var firstNewIndex = tailChain.length;
            for (var index = 0; index < tailChain.length; index++) {
                if (!current.hasOwnProperty (tailChain [index])) {
                    firstNewIndex = index;
                    break;
                }
                current = current [tailChain [index]];
            }
            for (var index = firstNewIndex; index < tailChain.length; index++) {
                current [tailChain [index]] = {};
                current = current [tailChain [index]];
            }
        }
        for (var attrib in value) {
            current [attrib] = value [attrib];
        }
    };
    __all__.__nest__ = __nest__;
    var __init__ = function (module) {
        if (!module.__inited__) {
            module.__all__.__init__ (module.__all__);
            module.__inited__ = true;
        }
        return module.__all__;
    };
    __all__.__init__ = __init__;
    var __get__ = function (self, func, quotedFuncName) {
        if (self) {
            if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
                if (quotedFuncName) {
                    Object.defineProperty (self, quotedFuncName, {
                        value: function () {
                            var args = [] .slice.apply (arguments);
                            return func.apply (null, [self] .concat (args));
                        },
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                return function () {
                    var args = [] .slice.apply (arguments);
                    return func.apply (null, [self] .concat (args));
                };
            }
            else {
                return func;
            }
        }
        else {
            return func;
        }
    }
    __all__.__get__ = __get__;
    var __getcm__ = function (self, func, quotedFuncName) {
        if (self.hasOwnProperty ('__class__')) {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self.__class__] .concat (args));
            };
        }
        else {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
    }
    __all__.__getcm__ = __getcm__;
    var __getsm__ = function (self, func, quotedFuncName) {
        return func;
    }
    __all__.__getsm__ = __getsm__;
    var py_metatype = {
        __name__: 'type',
        __bases__: [],
        __new__: function (meta, name, bases, attribs) {
            var cls = function () {
                var args = [] .slice.apply (arguments);
                return cls.__new__ (args);
            };
            for (var index = bases.length - 1; index >= 0; index--) {
                var base = bases [index];
                for (var attrib in base) {
                    var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                    Object.defineProperty (cls, attrib, descrip);
                }
            }
            cls.__metaclass__ = meta;
            cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
            cls.__bases__ = bases;
            for (var attrib in attribs) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            return cls;
        }
    };
    py_metatype.__metaclass__ = py_metatype;
    __all__.py_metatype = py_metatype;
    var object = {
        __init__: function (self) {},
        __metaclass__: py_metatype,
        __name__: 'object',
        __bases__: [],
        __new__: function (args) {
            var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
            this.__init__.apply (null, [instance] .concat (args));
            return instance;
        }
    };
    __all__.object = object;
    var __class__ = function (name, bases, attribs, meta) {
        if (meta == undefined) {
            meta = bases [0] .__metaclass__;
        }
        return meta.__new__ (meta, name, bases, attribs);
    }
    __all__.__class__ = __class__;
    var __pragma__ = function () {};
    __all__.__pragma__ = __pragma__;	__nest__ (
		__all__,
		'org.transcrypt.__base__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__base__';
					var __Envir__ = __class__ ('__Envir__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.interpreter_name = 'python';
							self.transpiler_name = 'transcrypt';
							self.transpiler_version = '3.6.67';
							self.target_subdir = '__javascript__';
						});}
					});
					var __envir__ = __Envir__ ();
					__pragma__ ('<all>')
						__all__.__Envir__ = __Envir__;
						__all__.__envir__ = __envir__;
						__all__.__name__ = __name__;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'org.transcrypt.__standard__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__standard__';
					var Exception = __class__ ('Exception', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							var kwargs = dict ();
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
										}
									}
									delete kwargs.__kwargtrans__;
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.__args__ = args;
							try {
								self.stack = kwargs.error.stack;
							}
							catch (__except0__) {
								self.stack = 'No stack trace available';
							}
						});},
						get __repr__ () {return __get__ (this, function (self) {
							if (len (self.__args__)) {
								return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
							}
							else {
								return '{}()'.format (self.__class__.__name__);
							}
						});},
						get __str__ () {return __get__ (this, function (self) {
							if (len (self.__args__) > 1) {
								return str (tuple (self.__args__));
							}
							else if (len (self.__args__)) {
								return str (self.__args__ [0]);
							}
							else {
								return '';
							}
						});}
					});
					var IterableError = __class__ ('IterableError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
						});}
					});
					var StopIteration = __class__ ('StopIteration', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
						});}
					});
					var ValueError = __class__ ('ValueError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var KeyError = __class__ ('KeyError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AssertionError = __class__ ('AssertionError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							if (message) {
								Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
							}
							else {
								Exception.__init__ (self, __kwargtrans__ ({error: error}));
							}
						});}
					});
					var NotImplementedError = __class__ ('NotImplementedError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var IndexError = __class__ ('IndexError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AttributeError = __class__ ('AttributeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var py_TypeError = __class__ ('py_TypeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var Warning = __class__ ('Warning', [Exception], {
						__module__: __name__,
					});
					var UserWarning = __class__ ('UserWarning', [Warning], {
						__module__: __name__,
					});
					var DeprecationWarning = __class__ ('DeprecationWarning', [Warning], {
						__module__: __name__,
					});
					var RuntimeWarning = __class__ ('RuntimeWarning', [Warning], {
						__module__: __name__,
					});
					var __sort__ = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (key) {
							iterable.sort ((function __lambda__ (a, b) {
								if (arguments.length) {
									var __ilastarg0__ = arguments.length - 1;
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
										var __allkwargs0__ = arguments [__ilastarg0__--];
										for (var __attrib0__ in __allkwargs0__) {
											switch (__attrib0__) {
												case 'a': var a = __allkwargs0__ [__attrib0__]; break;
												case 'b': var b = __allkwargs0__ [__attrib0__]; break;
											}
										}
									}
								}
								else {
								}
								return (key (a) > key (b) ? 1 : -(1));
							}));
						}
						else {
							iterable.sort ();
						}
						if (reverse) {
							iterable.reverse ();
						}
					};
					var sorted = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (py_typeof (iterable) == dict) {
							var result = copy (iterable.py_keys ());
						}
						else {
							var result = copy (iterable);
						}
						__sort__ (result, key, reverse);
						return result;
					};
					var map = function (func, iterable) {
						return (function () {
							var __accu0__ = [];
							var __iterable0__ = iterable;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var item = __iterable0__ [__index0__];
								__accu0__.append (func (item));
							}
							return __accu0__;
						}) ();
					};
					var filter = function (func, iterable) {
						if (func == null) {
							var func = bool;
						}
						return (function () {
							var __accu0__ = [];
							var __iterable0__ = iterable;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var item = __iterable0__ [__index0__];
								if (func (item)) {
									__accu0__.append (item);
								}
							}
							return __accu0__;
						}) ();
					};
					var __Terminal__ = __class__ ('__Terminal__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.buffer = '';
							try {
								self.element = document.getElementById ('__terminal__');
							}
							catch (__except0__) {
								self.element = null;
							}
							if (self.element) {
								self.element.style.overflowX = 'auto';
								self.element.style.boxSizing = 'border-box';
								self.element.style.padding = '5px';
								self.element.innerHTML = '_';
							}
						});},
						get print () {return __get__ (this, function (self) {
							var sep = ' ';
							var end = '\n';
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
											case 'end': var end = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
								var __accu0__ = [];
								var __iterable0__ = args;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var arg = __iterable0__ [__index0__];
									__accu0__.append (str (arg));
								}
								return __accu0__;
							}) ()), end).__getslice__ (-(4096), null, 1);
							if (self.element) {
								self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
								self.element.scrollTop = self.element.scrollHeight;
							}
							else {
								console.log (sep.join ((function () {
									var __accu0__ = [];
									var __iterable0__ = args;
									for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
										var arg = __iterable0__ [__index0__];
										__accu0__.append (str (arg));
									}
									return __accu0__;
								}) ()));
							}
						});},
						get input () {return __get__ (this, function (self, question) {
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'question': var question = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
							}
							else {
							}
							self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
							var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(16), null, 1)));
							self.print (answer);
							return answer;
						});}
					});
					var __terminal__ = __Terminal__ ();
					__pragma__ ('<all>')
						__all__.AssertionError = AssertionError;
						__all__.AttributeError = AttributeError;
						__all__.DeprecationWarning = DeprecationWarning;
						__all__.Exception = Exception;
						__all__.IndexError = IndexError;
						__all__.IterableError = IterableError;
						__all__.KeyError = KeyError;
						__all__.NotImplementedError = NotImplementedError;
						__all__.RuntimeWarning = RuntimeWarning;
						__all__.StopIteration = StopIteration;
						__all__.py_TypeError = py_TypeError;
						__all__.UserWarning = UserWarning;
						__all__.ValueError = ValueError;
						__all__.Warning = Warning;
						__all__.__Terminal__ = __Terminal__;
						__all__.__name__ = __name__;
						__all__.__sort__ = __sort__;
						__all__.__terminal__ = __terminal__;
						__all__.filter = filter;
						__all__.map = map;
						__all__.sorted = sorted;
					__pragma__ ('</all>')
				}
			}
		}
	);
    var __call__ = function (/* <callee>, <this>, <params>* */) {
        var args = [] .slice.apply (arguments);
        if (typeof args [0] == 'object' && '__call__' in args [0]) {
            return args [0] .__call__ .apply (args [1], args.slice (2));
        }
        else {
            return args [0] .apply (args [1], args.slice (2));
        }
    };
    __all__.__call__ = __call__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__base__));
    var __envir__ = __all__.__envir__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__standard__));
    var Exception = __all__.Exception;
    var IterableError = __all__.IterableError;
    var StopIteration = __all__.StopIteration;
    var ValueError = __all__.ValueError;
    var KeyError = __all__.KeyError;
    var AssertionError = __all__.AssertionError;
    var NotImplementedError = __all__.NotImplementedError;
    var IndexError = __all__.IndexError;
    var AttributeError = __all__.AttributeError;
    var py_TypeError = __all__.py_TypeError;
    var Warning = __all__.Warning;
    var UserWarning = __all__.UserWarning;
    var DeprecationWarning = __all__.DeprecationWarning;
    var RuntimeWarning = __all__.RuntimeWarning;
    var __sort__ = __all__.__sort__;
    var sorted = __all__.sorted;
    var map = __all__.map;
    var filter = __all__.filter;
    __all__.print = __all__.__terminal__.print;
    __all__.input = __all__.__terminal__.input;
    var __terminal__ = __all__.__terminal__;
    var print = __all__.print;
    var input = __all__.input;
    __envir__.executor_name = __envir__.transpiler_name;
    var __main__ = {__file__: ''};
    __all__.main = __main__;
    var __except__ = null;
    __all__.__except__ = __except__;
    var __kwargtrans__ = function (anObject) {
        anObject.__kwargtrans__ = null;
        anObject.constructor = Object;
        return anObject;
    }
    __all__.__kwargtrans__ = __kwargtrans__;
    var __globals__ = function (anObject) {
        if (isinstance (anObject, dict)) {
            return anObject;
        }
        else {
            return dict (anObject)
        }
    }
    __all__.__globals__ = __globals__
    var __super__ = function (aClass, methodName) {
        for (var index = 0; index < aClass.__bases__.length; index++) {
            var base = aClass.__bases__ [index];
            if (methodName in base) {
               return base [methodName];
            }
        }
        throw new Exception ('Superclass method not found');
    }
    __all__.__super__ = __super__
    var property = function (getter, setter) {
        if (!setter) {
            setter = function () {};
        }
        return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
    }
    __all__.property = property;
    var __setProperty__ = function (anObject, name, descriptor) {
        if (!anObject.hasOwnProperty (name)) {
            Object.defineProperty (anObject, name, descriptor);
        }
    }
    __all__.__setProperty__ = __setProperty__
    function assert (condition, message) {
        if (!condition) {
            throw AssertionError (message, new Error ());
        }
    }
    __all__.assert = assert;
    var __merge__ = function (object0, object1) {
        var result = {};
        for (var attrib in object0) {
            result [attrib] = object0 [attrib];
        }
        for (var attrib in object1) {
            result [attrib] = object1 [attrib];
        }
        return result;
    };
    __all__.__merge__ = __merge__;
    var dir = function (obj) {
        var aList = [];
        for (var aKey in obj) {
            aList.push (aKey);
        }
        aList.sort ();
        return aList;
    };
    __all__.dir = dir;
    var setattr = function (obj, name, value) {
        obj [name] = value;
    };
    __all__.setattr = setattr;
    var getattr = function (obj, name) {
        return obj [name];
    };
    __all__.getattr= getattr;
    var hasattr = function (obj, name) {
        try {
            return name in obj;
        }
        catch (exception) {
            return false;
        }
    };
    __all__.hasattr = hasattr;
    var delattr = function (obj, name) {
        delete obj [name];
    };
    __all__.delattr = (delattr);
    var __in__ = function (element, container) {
        if (py_typeof (container) == dict) {
            return container.hasOwnProperty (element);
        }
        else {
            return (
                container.indexOf ?
                container.indexOf (element) > -1 :
                container.hasOwnProperty (element)
            );
        }
    };
    __all__.__in__ = __in__;
    var __specialattrib__ = function (attrib) {
        return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
    };
    __all__.__specialattrib__ = __specialattrib__;
    var len = function (anObject) {
        if (anObject === undefined || anObject === null) {
            return 0;
        }
        if (anObject.__len__ instanceof Function) {
            return anObject.__len__ ();
        }
        if (anObject.length !== undefined) {
            return anObject.length;
        }
        var length = 0;
        for (var attr in anObject) {
            if (!__specialattrib__ (attr)) {
                length++;
            }
        }
        return length;
    };
    __all__.len = len;
    function __i__ (any) {
        return py_typeof (any) == dict ? any.py_keys () : any;
    }
    function __k__ (keyed, key) {
        var result = keyed [key];
        if (typeof result == 'undefined') {
             throw KeyError (key, new Error());
        }
        return result;
    }
    function __t__ (target) {
        return (
            target === undefined || target === null ? false :
            ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
            target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
            target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
            target instanceof Function ? target :
            len (target) !== 0 ? target :
            false
        );
    }
    __all__.__t__ = __t__;
    var bool = function (any) {
        return !!__t__ (any);
    };
    bool.__name__ = 'bool';
    __all__.bool = bool;
    var float = function (any) {
        if (any == 'inf') {
            return Infinity;
        }
        else if (any == '-inf') {
            return -Infinity;
        }
        else if (isNaN (parseFloat (any))) {
            if (any === false) {
                return 0;
            }
            else if (any === true) {
                return 1;
            }
            else {
                throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
            }
        }
        else {
            return +any;
        }
    };
    float.__name__ = 'float';
    __all__.float = float;
    var int = function (any) {
        return float (any) | 0
    };
    int.__name__ = 'int';
    __all__.int = int;
    var py_typeof = function (anObject) {
        var aType = typeof anObject;
        if (aType == 'object') {
            try {
                return anObject.__class__;
            }
            catch (exception) {
                return aType;
            }
        }
        else {
            return (
                aType == 'boolean' ? bool :
                aType == 'string' ? str :
                aType == 'number' ? (anObject % 1 == 0 ? int : float) :
                null
            );
        }
    };
    __all__.py_typeof = py_typeof;
    var isinstance = function (anObject, classinfo) {
        function isA (queryClass) {
            if (queryClass == classinfo) {
                return true;
            }
            for (var index = 0; index < queryClass.__bases__.length; index++) {
                if (isA (queryClass.__bases__ [index], classinfo)) {
                    return true;
                }
            }
            return false;
        }
        if (classinfo instanceof Array) {
            for (var index = 0; index < classinfo.length; index++) {
                var aClass = classinfo [index];
                if (isinstance (anObject, aClass)) {
                    return true;
                }
            }
            return false;
        }
        try {
            return '__class__' in anObject ? isA (anObject.__class__) : anObject instanceof classinfo;
        }
        catch (exception) {
            var aType = py_typeof (anObject);
            return aType == classinfo || (aType == bool && classinfo == int);
        }
    };
    __all__.isinstance = isinstance;
    var callable = function (anObject) {
        if ( typeof anObject == 'object' && '__call__' in anObject ) {
            return true;
        }
        else {
            return typeof anObject === 'function';
        }
    };
    __all__.callable = callable;
    var repr = function (anObject) {
        try {
            return anObject.__repr__ ();
        }
        catch (exception) {
            try {
                return anObject.__str__ ();
            }
            catch (exception) {
                try {
                    if (anObject == null) {
                        return 'None';
                    }
                    else if (anObject.constructor == Object) {
                        var result = '{';
                        var comma = false;
                        for (var attrib in anObject) {
                            if (!__specialattrib__ (attrib)) {
                                if (attrib.isnumeric ()) {
                                    var attribRepr = attrib;
                                }
                                else {
                                    var attribRepr = '\'' + attrib + '\'';
                                }
                                if (comma) {
                                    result += ', ';
                                }
                                else {
                                    comma = true;
                                }
                                result += attribRepr + ': ' + repr (anObject [attrib]);
                            }
                        }
                        result += '}';
                        return result;
                    }
                    else {
                        return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                    }
                }
                catch (exception) {
                    return '<object of type: ' + typeof anObject + '>';
                }
            }
        }
    };
    __all__.repr = repr;
    var chr = function (charCode) {
        return String.fromCharCode (charCode);
    };
    __all__.chr = chr;
    var ord = function (aChar) {
        return aChar.charCodeAt (0);
    };
    __all__.ord = ord;
    var max = Math.max;
    __all__.max = max;
    var min = Math.min;
    __all__.min = min;
    var abs = Math.abs;
    __all__.abs = abs;
    var round = function (number, ndigits) {
        if (ndigits) {
            var scale = Math.pow (10, ndigits);
            number *= scale;
        }
        var rounded = Math.round (number);
        if (rounded - number == 0.5 && rounded % 2) {
            rounded -= 1;
        }
        if (ndigits) {
            rounded /= scale;
        }
        return rounded;
    };
    __all__.round = round;
    function __jsUsePyNext__ () {
        try {
            var result = this.__next__ ();
            return {value: result, done: false};
        }
        catch (exception) {
            return {value: undefined, done: true};
        }
    }
    function __pyUseJsNext__ () {
        var result = this.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    function py_iter (iterable) {
        if (typeof iterable == 'string' || '__iter__' in iterable) {
            var result = iterable.__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('selector' in iterable) {
            var result = list (iterable) .__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('next' in iterable) {
            var result = iterable
            if (! ('__next__' in result)) {
                result.__next__ = __pyUseJsNext__;
            }
        }
        else if (Symbol.iterator in iterable) {
            var result = iterable [Symbol.iterator] ();
            result.__next__ = __pyUseJsNext__;
        }
        else {
            throw IterableError (new Error ());
        }
        result [Symbol.iterator] = function () {return result;};
        return result;
    }
    function py_next (iterator) {
        try {
            var result = iterator.__next__ ();
        }
        catch (exception) {
            var result = iterator.next ();
            if (result.done) {
                throw StopIteration (new Error ());
            }
            else {
                return result.value;
            }
        }
        if (result == undefined) {
            throw StopIteration (new Error ());
        }
        else {
            return result;
        }
    }
    function __PyIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __PyIterator__.prototype.__next__ = function () {
        if (this.index < this.iterable.length) {
            return this.iterable [this.index++];
        }
        else {
            throw StopIteration (new Error ());
        }
    };
    function __JsIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __JsIterator__.prototype.next = function () {
        if (this.index < this.iterable.py_keys.length) {
            return {value: this.index++, done: false};
        }
        else {
            return {value: undefined, done: true};
        }
    };
    var py_reversed = function (iterable) {
        iterable = iterable.slice ();
        iterable.reverse ();
        return iterable;
    };
    __all__.py_reversed = py_reversed;
    var zip = function () {
        var args = [] .slice.call (arguments);
        for (var i = 0; i < args.length; i++) {
            if (typeof args [i] == 'string') {
                args [i] = args [i] .split ('');
            }
            else if (!Array.isArray (args [i])) {
                args [i] = Array.from (args [i]);
            }
        }
        var shortest = args.length == 0 ? [] : args.reduce (
            function (array0, array1) {
                return array0.length < array1.length ? array0 : array1;
            }
        );
        return shortest.map (
            function (current, index) {
                return args.map (
                    function (current) {
                        return current [index];
                    }
                );
            }
        );
    };
    __all__.zip = zip;
    function range (start, stop, step) {
        if (stop == undefined) {
            stop = start;
            start = 0;
        }
        if (step == undefined) {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    };
    __all__.range = range;
    function any (iterable) {
        for (var index = 0; index < iterable.length; index++) {
            if (bool (iterable [index])) {
                return true;
            }
        }
        return false;
    }
    function all (iterable) {
        for (var index = 0; index < iterable.length; index++) {
            if (! bool (iterable [index])) {
                return false;
            }
        }
        return true;
    }
    function sum (iterable) {
        var result = 0;
        for (var index = 0; index < iterable.length; index++) {
            result += iterable [index];
        }
        return result;
    }
    __all__.any = any;
    __all__.all = all;
    __all__.sum = sum;
    function enumerate (iterable) {
        return zip (range (len (iterable)), iterable);
    }
    __all__.enumerate = enumerate;
    function copy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = anObject [attrib];
                }
            }
            return result;
        }
    }
    __all__.copy = copy;
    function deepcopy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = deepcopy (anObject [attrib]);
                }
            }
            return result;
        }
    }
    __all__.deepcopy = deepcopy;
    function list (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        return instance;
    }
    __all__.list = list;
    Array.prototype.__class__ = list;
    list.__name__ = 'list';
    Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
    Array.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        else if (stop > this.length) {
            stop = this.length;
        }
        var result = list ([]);
        for (var index = start; index < stop; index += step) {
            result.push (this [index]);
        }
        return result;
    };
    Array.prototype.__setslice__ = function (start, stop, step, source) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        if (step == null) {
            Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
        }
        else {
            var sourceIndex = 0;
            for (var targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        }
    };
    Array.prototype.__repr__ = function () {
        if (this.__class__ == set && !this.length) {
            return 'set()';
        }
        var result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
        for (var index = 0; index < this.length; index++) {
            if (index) {
                result += ', ';
            }
            result += repr (this [index]);
        }
        if (this.__class__ == tuple && this.length == 1) {
            result += ',';
        }
        result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
        return result;
    };
    Array.prototype.__str__ = Array.prototype.__repr__;
    Array.prototype.append = function (element) {
        this.push (element);
    };
    Array.prototype.py_clear = function () {
        this.length = 0;
    };
    Array.prototype.extend = function (aList) {
        this.push.apply (this, aList);
    };
    Array.prototype.insert = function (index, element) {
        this.splice (index, 0, element);
    };
    Array.prototype.remove = function (element) {
        var index = this.indexOf (element);
        if (index == -1) {
            throw ValueError ("list.remove(x): x not in list", new Error ());
        }
        this.splice (index, 1);
    };
    Array.prototype.index = function (element) {
        return this.indexOf (element);
    };
    Array.prototype.py_pop = function (index) {
        if (index == undefined) {
            return this.pop ();
        }
        else {
            return this.splice (index, 1) [0];
        }
    };
    Array.prototype.py_sort = function () {
        __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
    };
    Array.prototype.__add__ = function (aList) {
        return list (this.concat (aList));
    };
    Array.prototype.__mul__ = function (scalar) {
        var result = this;
        for (var i = 1; i < scalar; i++) {
            result = result.concat (this);
        }
        return result;
    };
    Array.prototype.__rmul__ = Array.prototype.__mul__;
    function tuple (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        instance.__class__ = tuple;
        return instance;
    }
    __all__.tuple = tuple;
    tuple.__name__ = 'tuple';
    function set (iterable) {
        var instance = [];
        if (iterable) {
            for (var index = 0; index < iterable.length; index++) {
                instance.add (iterable [index]);
            }
        }
        instance.__class__ = set;
        return instance;
    }
    __all__.set = set;
    set.__name__ = 'set';
    Array.prototype.__bindexOf__ = function (element) {
        element += '';
        var mindex = 0;
        var maxdex = this.length - 1;
        while (mindex <= maxdex) {
            var index = (mindex + maxdex) / 2 | 0;
            var middle = this [index] + '';
            if (middle < element) {
                mindex = index + 1;
            }
            else if (middle > element) {
                maxdex = index - 1;
            }
            else {
                return index;
            }
        }
        return -1;
    };
    Array.prototype.add = function (element) {
        if (this.indexOf (element) == -1) {
            this.push (element);
        }
    };
    Array.prototype.discard = function (element) {
        var index = this.indexOf (element);
        if (index != -1) {
            this.splice (index, 1);
        }
    };
    Array.prototype.isdisjoint = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issuperset = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) == -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issubset = function (other) {
        return set (other.slice ()) .issuperset (this);
    };
    Array.prototype.union = function (other) {
        var result = set (this.slice () .sort ());
        for (var i = 0; i < other.length; i++) {
            if (result.__bindexOf__ (other [i]) == -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.intersection = function (other) {
        this.sort ();
        var result = set ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.difference = function (other) {
        var sother = set (other.slice () .sort ());
        var result = set ();
        for (var i = 0; i < this.length; i++) {
            if (sother.__bindexOf__ (this [i]) == -1) {
                result.push (this [i]);
            }
        }
        return result;
    };
    Array.prototype.symmetric_difference = function (other) {
        return this.union (other) .difference (this.intersection (other));
    };
    Array.prototype.py_update = function () {
        var updated = [] .concat.apply (this.slice (), arguments) .sort ();
        this.py_clear ();
        for (var i = 0; i < updated.length; i++) {
            if (updated [i] != updated [i - 1]) {
                this.push (updated [i]);
            }
        }
    };
    Array.prototype.__eq__ = function (other) {
        if (this.length != other.length) {
            return false;
        }
        if (this.__class__ == set) {
            this.sort ();
            other.sort ();
        }
        for (var i = 0; i < this.length; i++) {
            if (this [i] != other [i]) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.__ne__ = function (other) {
        return !this.__eq__ (other);
    };
    Array.prototype.__le__ = function (other) {
        return this.issubset (other);
    };
    Array.prototype.__ge__ = function (other) {
        return this.issuperset (other);
    };
    Array.prototype.__lt__ = function (other) {
        return this.issubset (other) && !this.issuperset (other);
    };
    Array.prototype.__gt__ = function (other) {
        return this.issuperset (other) && !this.issubset (other);
    };
    function bytearray (bytable, encoding) {
        if (bytable == undefined) {
            return new Uint8Array (0);
        }
        else {
            var aType = py_typeof (bytable);
            if (aType == int) {
                return new Uint8Array (bytable);
            }
            else if (aType == str) {
                var aBytes = new Uint8Array (len (bytable));
                for (var i = 0; i < len (bytable); i++) {
                    aBytes [i] = bytable.charCodeAt (i);
                }
                return aBytes;
            }
            else if (aType == list || aType == tuple) {
                return new Uint8Array (bytable);
            }
            else {
                throw py_TypeError;
            }
        }
    }
    var bytes = bytearray;
    __all__.bytearray = bytearray;
    __all__.bytes = bytearray;
    Uint8Array.prototype.__add__ = function (aBytes) {
        var result = new Uint8Array (this.length + aBytes.length);
        result.set (this);
        result.set (aBytes, this.length);
        return result;
    };
    Uint8Array.prototype.__mul__ = function (scalar) {
        var result = new Uint8Array (scalar * this.length);
        for (var i = 0; i < scalar; i++) {
            result.set (this, i * this.length);
        }
        return result;
    };
    Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
    function str (stringable) {
        try {
            return stringable.__str__ ();
        }
        catch (exception) {
            try {
                return repr (stringable);
            }
            catch (exception) {
                return String (stringable);
            }
        }
    };
    __all__.str = str;
    String.prototype.__class__ = str;
    str.__name__ = 'str';
    String.prototype.__iter__ = function () {new __PyIterator__ (this);};
    String.prototype.__repr__ = function () {
        return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
    };
    String.prototype.__str__ = function () {
        return this;
    };
    String.prototype.capitalize = function () {
        return this.charAt (0).toUpperCase () + this.slice (1);
    };
    String.prototype.endswith = function (suffix) {
        return suffix == '' || this.slice (-suffix.length) == suffix;
    };
    String.prototype.find  = function (sub, start) {
        return this.indexOf (sub, start);
    };
    String.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        var result = '';
        if (step == 1) {
            result = this.substring (start, stop);
        }
        else {
            for (var index = start; index < stop; index += step) {
                result = result.concat (this.charAt(index));
            }
        }
        return result;
    }
    __setProperty__ (String.prototype, 'format', {
        get: function () {return __get__ (this, function (self) {
            var args = tuple ([] .slice.apply (arguments).slice (1));
            var autoIndex = 0;
            return self.replace (/\{(\w*)\}/g, function (match, key) {
                if (key == '') {
                    key = autoIndex++;
                }
                if (key == +key) {
                    return args [key] == undefined ? match : str (args [key]);
                }
                else {
                    for (var index = 0; index < args.length; index++) {
                        if (typeof args [index] == 'object' && args [index][key] != undefined) {
                            return str (args [index][key]);
                        }
                    }
                    return match;
                }
            });
        });},
        enumerable: true
    });
    String.prototype.isalnum = function () {
        return /^[0-9a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isalpha = function () {
        return /^[a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isdecimal = function () {
        return /^[0-9]{1,}$/.test(this)
    }
    String.prototype.isdigit = function () {
        return this.isdecimal()
    }
    String.prototype.islower = function () {
        return /^[a-z]{1,}$/.test(this)
    }
    String.prototype.isupper = function () {
        return /^[A-Z]{1,}$/.test(this)
    }
    String.prototype.isspace = function () {
        return /^[\s]{1,}$/.test(this)
    }
    String.prototype.isnumeric = function () {
        return !isNaN (parseFloat (this)) && isFinite (this);
    };
    String.prototype.join = function (strings) {
        return strings.join (this);
    };
    String.prototype.lower = function () {
        return this.toLowerCase ();
    };
    String.prototype.py_replace = function (old, aNew, maxreplace) {
        return this.split (old, maxreplace) .join (aNew);
    };
    String.prototype.lstrip = function () {
        return this.replace (/^\s*/g, '');
    };
    String.prototype.rfind = function (sub, start) {
        return this.lastIndexOf (sub, start);
    };
    String.prototype.rsplit = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                var maxrsplit = result.length - maxsplit;
                return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
            }
            else {
                return result;
            }
        }
    };
    String.prototype.rstrip = function () {
        return this.replace (/\s*$/g, '');
    };
    String.prototype.py_split = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
            }
            else {
                return result;
            }
        }
    };
    String.prototype.startswith = function (prefix) {
        return this.indexOf (prefix) == 0;
    };
    String.prototype.strip = function () {
        return this.trim ();
    };
    String.prototype.upper = function () {
        return this.toUpperCase ();
    };
    String.prototype.__mul__ = function (scalar) {
        var result = this;
        for (var i = 1; i < scalar; i++) {
            result = result + this;
        }
        return result;
    };
    String.prototype.__rmul__ = String.prototype.__mul__;
    function __keys__ () {
        var keys = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                keys.push (attrib);
            }
        }
        return keys;
    }
    function __items__ () {
        var items = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                items.push ([attrib, this [attrib]]);
            }
        }
        return items;
    }
    function __del__ (key) {
        delete this [key];
    }
    function __clear__ () {
        for (var attrib in this) {
            delete this [attrib];
        }
    }
    function __getdefault__ (aKey, aDefault) {
        var result = this [aKey];
        return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
    }
    function __setdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            return result;
        }
        var val = aDefault == undefined ? null : aDefault;
        this [aKey] = val;
        return val;
    }
    function __pop__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            delete this [aKey];
            return result;
        } else {
            if ( aDefault === undefined ) {
                throw KeyError (aKey, new Error());
            }
        }
        return aDefault;
    }
    function __popitem__ () {
        var aKey = Object.keys (this) [0];
        if (aKey == null) {
            throw KeyError ("popitem(): dictionary is empty", new Error ());
        }
        var result = tuple ([aKey, this [aKey]]);
        delete this [aKey];
        return result;
    }
    function __update__ (aDict) {
        for (var aKey in aDict) {
            this [aKey] = aDict [aKey];
        }
    }
    function __values__ () {
        var values = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                values.push (this [attrib]);
            }
        }
        return values;
    }
    function __dgetitem__ (aKey) {
        return this [aKey];
    }
    function __dsetitem__ (aKey, aValue) {
        this [aKey] = aValue;
    }
    function dict (objectOrPairs) {
        var instance = {};
        if (!objectOrPairs || objectOrPairs instanceof Array) {
            if (objectOrPairs) {
                for (var index = 0; index < objectOrPairs.length; index++) {
                    var pair = objectOrPairs [index];
                    if ( !(pair instanceof Array) || pair.length != 2) {
                        throw ValueError(
                            "dict update sequence element #" + index +
                            " has length " + pair.length +
                            "; 2 is required", new Error());
                    }
                    var key = pair [0];
                    var val = pair [1];
                    if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                         if (!isinstance (objectOrPairs, dict)) {
                             val = dict (val);
                         }
                    }
                    instance [key] = val;
                }
            }
        }
        else {
            if (isinstance (objectOrPairs, dict)) {
                var aKeys = objectOrPairs.py_keys ();
                for (var index = 0; index < aKeys.length; index++ ) {
                    var key = aKeys [index];
                    instance [key] = objectOrPairs [key];
                }
            } else if (objectOrPairs instanceof Object) {
                instance = objectOrPairs;
            } else {
                throw ValueError ("Invalid type of object for dict creation", new Error ());
            }
        }
        __setProperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
        __setProperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
        __setProperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, 'py_items', {value: __items__, enumerable: false});
        __setProperty__ (instance, 'py_del', {value: __del__, enumerable: false});
        __setProperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
        __setProperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
        __setProperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
        __setProperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
        __setProperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
        __setProperty__ (instance, 'py_update', {value: __update__, enumerable: false});
        __setProperty__ (instance, 'py_values', {value: __values__, enumerable: false});
        __setProperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
        __setProperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
        return instance;
    }
    __all__.dict = dict;
    dict.__name__ = 'dict';
    function __setdoc__ (docString) {
        this.__doc__ = docString;
        return this;
    }
    __setProperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
    var __jsmod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.__jsmod__ = __jsmod__;
    var __mod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.mod = __mod__;
    var __pow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.pow = __pow__;
    var __neg__ = function (a) {
        if (typeof a == 'object' && '__neg__' in a) {
            return a.__neg__ ();
        }
        else {
            return -a;
        }
    };
    __all__.__neg__ = __neg__;
    var __matmul__ = function (a, b) {
        return a.__matmul__ (b);
    };
    __all__.__matmul__ = __matmul__;
    var __mul__ = function (a, b) {
        if (typeof a == 'object' && '__mul__' in a) {
            return a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return b.__rmul__ (a);
        }
        else {
            return a * b;
        }
    };
    __all__.__mul__ = __mul__;
    var __truediv__ = function (a, b) {
        if (typeof a == 'object' && '__truediv__' in a) {
            return a.__truediv__ (b);
        }
        else if (typeof b == 'object' && '__rtruediv__' in b) {
            return b.__rtruediv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return a / b;
        }
    };
    __all__.__truediv__ = __truediv__;
    var __floordiv__ = function (a, b) {
        if (typeof a == 'object' && '__floordiv__' in a) {
            return a.__floordiv__ (b);
        }
        else if (typeof b == 'object' && '__rfloordiv__' in b) {
            return b.__rfloordiv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return Math.floor (a / b);
        }
    };
    __all__.__floordiv__ = __floordiv__;
    var __add__ = function (a, b) {
        if (typeof a == 'object' && '__add__' in a) {
            return a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return b.__radd__ (a);
        }
        else {
            return a + b;
        }
    };
    __all__.__add__ = __add__;
    var __sub__ = function (a, b) {
        if (typeof a == 'object' && '__sub__' in a) {
            return a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return b.__rsub__ (a);
        }
        else {
            return a - b;
        }
    };
    __all__.__sub__ = __sub__;
    var __lshift__ = function (a, b) {
        if (typeof a == 'object' && '__lshift__' in a) {
            return a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return b.__rlshift__ (a);
        }
        else {
            return a << b;
        }
    };
    __all__.__lshift__ = __lshift__;
    var __rshift__ = function (a, b) {
        if (typeof a == 'object' && '__rshift__' in a) {
            return a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return b.__rrshift__ (a);
        }
        else {
            return a >> b;
        }
    };
    __all__.__rshift__ = __rshift__;
    var __or__ = function (a, b) {
        if (typeof a == 'object' && '__or__' in a) {
            return a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return b.__ror__ (a);
        }
        else {
            return a | b;
        }
    };
    __all__.__or__ = __or__;
    var __xor__ = function (a, b) {
        if (typeof a == 'object' && '__xor__' in a) {
            return a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return b.__rxor__ (a);
        }
        else {
            return a ^ b;
        }
    };
    __all__.__xor__ = __xor__;
    var __and__ = function (a, b) {
        if (typeof a == 'object' && '__and__' in a) {
            return a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return b.__rand__ (a);
        }
        else {
            return a & b;
        }
    };
    __all__.__and__ = __and__;
    var __eq__ = function (a, b) {
        if (typeof a == 'object' && '__eq__' in a) {
            return a.__eq__ (b);
        }
        else {
            return a == b;
        }
    };
    __all__.__eq__ = __eq__;
    var __ne__ = function (a, b) {
        if (typeof a == 'object' && '__ne__' in a) {
            return a.__ne__ (b);
        }
        else {
            return a != b
        }
    };
    __all__.__ne__ = __ne__;
    var __lt__ = function (a, b) {
        if (typeof a == 'object' && '__lt__' in a) {
            return a.__lt__ (b);
        }
        else {
            return a < b;
        }
    };
    __all__.__lt__ = __lt__;
    var __le__ = function (a, b) {
        if (typeof a == 'object' && '__le__' in a) {
            return a.__le__ (b);
        }
        else {
            return a <= b;
        }
    };
    __all__.__le__ = __le__;
    var __gt__ = function (a, b) {
        if (typeof a == 'object' && '__gt__' in a) {
            return a.__gt__ (b);
        }
        else {
            return a > b;
        }
    };
    __all__.__gt__ = __gt__;
    var __ge__ = function (a, b) {
        if (typeof a == 'object' && '__ge__' in a) {
            return a.__ge__ (b);
        }
        else {
            return a >= b;
        }
    };
    __all__.__ge__ = __ge__;
    var __imatmul__ = function (a, b) {
        if ('__imatmul__' in a) {
            return a.__imatmul__ (b);
        }
        else {
            return a.__matmul__ (b);
        }
    };
    __all__.__imatmul__ = __imatmul__;
    var __ipow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__ipow__ (b);
        }
        else if (typeof a == 'object' && '__ipow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.ipow = __ipow__;
    var __ijsmod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__ismod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.ijsmod__ = __ijsmod__;
    var __imod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__imod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.imod = __imod__;
    var __imul__ = function (a, b) {
        if (typeof a == 'object' && '__imul__' in a) {
            return a.__imul__ (b);
        }
        else if (typeof a == 'object' && '__mul__' in a) {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return a = b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return a = b.__rmul__ (a);
        }
        else {
            return a *= b;
        }
    };
    __all__.__imul__ = __imul__;
    var __idiv__ = function (a, b) {
        if (typeof a == 'object' && '__idiv__' in a) {
            return a.__idiv__ (b);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a = a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return a = b.__rdiv__ (a);
        }
        else {
            return a /= b;
        }
    };
    __all__.__idiv__ = __idiv__;
    var __iadd__ = function (a, b) {
        if (typeof a == 'object' && '__iadd__' in a) {
            return a.__iadd__ (b);
        }
        else if (typeof a == 'object' && '__add__' in a) {
            return a = a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return a = b.__radd__ (a);
        }
        else {
            return a += b;
        }
    };
    __all__.__iadd__ = __iadd__;
    var __isub__ = function (a, b) {
        if (typeof a == 'object' && '__isub__' in a) {
            return a.__isub__ (b);
        }
        else if (typeof a == 'object' && '__sub__' in a) {
            return a = a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return a = b.__rsub__ (a);
        }
        else {
            return a -= b;
        }
    };
    __all__.__isub__ = __isub__;
    var __ilshift__ = function (a, b) {
        if (typeof a == 'object' && '__ilshift__' in a) {
            return a.__ilshift__ (b);
        }
        else if (typeof a == 'object' && '__lshift__' in a) {
            return a = a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return a = b.__rlshift__ (a);
        }
        else {
            return a <<= b;
        }
    };
    __all__.__ilshift__ = __ilshift__;
    var __irshift__ = function (a, b) {
        if (typeof a == 'object' && '__irshift__' in a) {
            return a.__irshift__ (b);
        }
        else if (typeof a == 'object' && '__rshift__' in a) {
            return a = a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return a = b.__rrshift__ (a);
        }
        else {
            return a >>= b;
        }
    };
    __all__.__irshift__ = __irshift__;
    var __ior__ = function (a, b) {
        if (typeof a == 'object' && '__ior__' in a) {
            return a.__ior__ (b);
        }
        else if (typeof a == 'object' && '__or__' in a) {
            return a = a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return a = b.__ror__ (a);
        }
        else {
            return a |= b;
        }
    };
    __all__.__ior__ = __ior__;
    var __ixor__ = function (a, b) {
        if (typeof a == 'object' && '__ixor__' in a) {
            return a.__ixor__ (b);
        }
        else if (typeof a == 'object' && '__xor__' in a) {
            return a = a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return a = b.__rxor__ (a);
        }
        else {
            return a ^= b;
        }
    };
    __all__.__ixor__ = __ixor__;
    var __iand__ = function (a, b) {
        if (typeof a == 'object' && '__iand__' in a) {
            return a.__iand__ (b);
        }
        else if (typeof a == 'object' && '__and__' in a) {
            return a = a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return a = b.__rand__ (a);
        }
        else {
            return a &= b;
        }
    };
    __all__.__iand__ = __iand__;
    var __getitem__ = function (container, key) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ (key);
        }
        else {
            return container [key];
        }
    };
    __all__.__getitem__ = __getitem__;
    var __setitem__ = function (container, key, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ (key, value);
        }
        else {
            container [key] = value;
        }
    };
    __all__.__setitem__ = __setitem__;
    var __getslice__ = function (container, lower, upper, step) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ ([lower, upper, step]);
        }
        else {
            return container.__getslice__ (lower, upper, step);
        }
    };
    __all__.__getslice__ = __getslice__;
    var __setslice__ = function (container, lower, upper, step, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ ([lower, upper, step], value);
        }
        else {
            container.__setslice__ (lower, upper, step, value);
        }
    };
    __all__.__setslice__ = __setslice__;	__nest__ (
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
						print (startA, startB);
						var A = Stack (unitA, startA);
						var B = Stack (unitB, startB);
						var res = fight (A, B, num_iter);
						print (res);
						if (balanced (res)) {
							return tuple ([A.count, B.count]);
						}
						var B_won_last = res [A.py_name] [0] < res [B.py_name] [0];
						var sign = (B_won_last ? -(1) : 1);
						var change = sign * max (int (B.count / 10.0), 1);
						var enough = false;
						while (!(enough)) {
							print (B.count);
							var x1 = B.count;
							B.count += change;
							B.cap += change;
							var res = fight (A, B, num_iter);
							print (res);
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
						print ('\n', low, high, '\n');
						while (true) {
							var middle = low + Math.floor ((high - low) / 2);
							print (middle);
							B.count = middle;
							B.cap = middle;
							var res = fight (A, B, num_iter);
							print (res);
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
	__nest__ (
		__all__,
		'crtraits', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'crtraits';
					var haters = new set ([tuple (['Angel', 'Arch Devil']), tuple (['Angel', 'Devil']), tuple (['Archangel', 'Arch Devil']), tuple (['Archangel', 'Devil']), tuple (['Arch Devil', 'Angel']), tuple (['Arch Devil', 'Archangel']), tuple (['Black Dragon', 'Giant']), tuple (['Black Dragon', 'Titan']), tuple (['Devil', 'Angel']), tuple (['Devil', 'Archangel']), tuple (['Genie', 'Efreet']), tuple (['Genie', 'Efreet Sultan']), tuple (['Efreet', 'Genie']), tuple (['Efreet', 'Master Genie']), tuple (['Efreet Sultan', 'Genie']), tuple (['Efreet Sultan', 'Master Genie']), tuple (['Titan', 'Black Dragon']), tuple (['Master Genie', 'Efreet']), tuple (['Master Genie', 'Efreet Sultan'])]);
					var elementals = new set ([tuple (['Storm Elemental', 'Magma Elemental']), tuple (['Storm Elemental', 'Earth Elemental']), tuple (['Energy Elemental', 'Ice Elemental']), tuple (['Energy Elemental', 'Water Elemental']), tuple (['Ice Elemental', 'Energy Elemental']), tuple (['Ice Elemental', 'Fire Elemental']), tuple (['Magma Elemental', 'Storm Elemental']), tuple (['Magma Elemental', 'Air Elemental']), tuple (['Fire Elemental', 'Ice Elemental']), tuple (['Fire Elemental', 'Water Elemental']), tuple (['Air Elemental', 'Magma Elemental']), tuple (['Air Elemental', 'Earth Elemental']), tuple (['Water Elemental', 'Energy Elemental']), tuple (['Water Elemental', 'Fire Elemental']), tuple (['Earth Elemental', 'Storm Elemental']), tuple (['Earth Elemental', 'Air Elemental'])]);
					var columns = list (['Singular', 'AI Value', 'Hit Points', 'Speed', 'Attack', 'Defense', 'MinDmg', 'MaxDmg', 'Shots', 'Attributes']);
					var data = dict ({'Pikeman': list ([80, 10, 4, 4, 5, 1, 3, 0, list (['cusNO_JOUSTING'])]), 'Halberdier': list ([115, 10, 5, 6, 5, 2, 3, 0, list (['cusNO_JOUSTING'])]), 'Archer': list ([126, 10, 4, 6, 3, 2, 3, 12, list (['SHOOTING_ARMY'])]), 'Marksman': list ([184, 10, 6, 6, 3, 2, 3, 24, list (['const_two_attacks', 'SHOOTING_ARMY'])]), 'Griffin': list ([351, 25, 6, 8, 8, 3, 6, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Royal Griffin': list ([448, 25, 9, 9, 9, 3, 6, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Swordsman': list ([445, 35, 5, 10, 12, 6, 9, 0, list ([])]), 'Crusader': list ([588, 35, 6, 12, 12, 7, 10, 0, list (['const_two_attacks'])]), 'Monk': list ([485, 30, 5, 12, 7, 10, 12, 12, list (['SHOOTING_ARMY'])]), 'Zealot': list ([750, 30, 7, 12, 10, 10, 12, 24, list (['SHOOTING_ARMY', 'const_no_melee_penalty'])]), 'Cavalier': list ([1946, 100, 7, 15, 15, 15, 25, 0, list (['DOUBLE_WIDE', 'const_jousting'])]), 'Champion': list ([2100, 100, 9, 16, 16, 20, 25, 0, list (['DOUBLE_WIDE', 'const_jousting'])]), 'Angel': list ([5019, 200, 12, 20, 20, 50, 50, 0, list (['FLYING_ARMY', 'const_raises_morale', 'KING_2'])]), 'Archangel': list ([8776, 250, 18, 30, 30, 50, 50, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'const_raises_morale', 'KING_2'])]), 'Centaur': list ([100, 8, 6, 5, 3, 2, 3, 0, list (['DOUBLE_WIDE'])]), 'Centaur Captain': list ([138, 10, 8, 6, 3, 2, 3, 0, list (['DOUBLE_WIDE'])]), 'Dwarf': list ([138, 20, 3, 6, 7, 2, 4, 0, list ([])]), 'Battle Dwarf': list ([209, 20, 5, 7, 7, 2, 4, 0, list ([])]), 'Wood Elf': list ([234, 15, 6, 9, 5, 3, 5, 24, list (['SHOOTING_ARMY'])]), 'Grand Elf': list ([331, 15, 7, 9, 5, 3, 5, 24, list (['SHOOTING_ARMY', 'const_two_attacks'])]), 'Pegasus': list ([518, 30, 8, 9, 8, 5, 9, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Silver Pegasus': list ([532, 30, 12, 9, 10, 5, 9, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Dendroid Guard': list ([517, 55, 3, 9, 12, 10, 14, 0, list ([])]), 'Dendroid Soldier': list ([803, 65, 4, 9, 12, 10, 14, 0, list ([])]), 'Unicorn': list ([1806, 90, 7, 15, 14, 18, 22, 0, list (['DOUBLE_WIDE'])]), 'War Unicorn': list ([2030, 110, 9, 15, 14, 18, 22, 0, list (['DOUBLE_WIDE'])]), 'Green Dragon': list ([4872, 180, 10, 18, 18, 40, 50, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1'])]), 'Gold Dragon': list ([8613, 250, 16, 27, 27, 40, 50, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1'])]), 'Gremlin': list ([44, 4, 4, 3, 3, 1, 2, 0, list ([])]), 'Master Gremlin': list ([66, 4, 5, 4, 4, 1, 2, 8, list (['SHOOTING_ARMY'])]), 'Stone Gargoyle': list ([165, 16, 6, 6, 6, 2, 3, 0, list (['FLYING_ARMY', 'cusGOLEM'])]), 'Obsidian Gargoyle': list ([201, 16, 9, 7, 7, 2, 3, 0, list (['FLYING_ARMY', 'cusGOLEM'])]), 'Stone Golem': list ([250, 30, 3, 7, 10, 4, 5, 0, list (['cusGOLEM'])]), 'Iron Golem': list ([412, 35, 5, 9, 10, 4, 5, 0, list (['cusGOLEM'])]), 'Mage': list ([570, 25, 5, 11, 8, 7, 9, 24, list (['SHOOTING_ARMY', 'const_no_melee_penalty'])]), 'Arch Mage': list ([680, 30, 7, 12, 9, 7, 9, 24, list (['SHOOTING_ARMY', 'const_no_melee_penalty', 'const_no_wall_penalty'])]), 'Genie': list ([884, 40, 7, 12, 12, 13, 16, 0, list (['FLYING_ARMY'])]), 'Master Genie': list ([942, 40, 11, 12, 12, 13, 16, 3, list (['FLYING_ARMY'])]), 'Naga': list ([2016, 110, 5, 16, 13, 20, 20, 0, list (['DOUBLE_WIDE', 'const_free_attack'])]), 'Naga Queen': list ([2840, 110, 7, 16, 13, 30, 30, 0, list (['DOUBLE_WIDE', 'const_free_attack'])]), 'Giant': list ([3718, 150, 7, 19, 16, 40, 60, 0, list (['KING_3'])]), 'Titan': list ([7500, 300, 11, 24, 24, 40, 60, 24, list (['SHOOTING_ARMY', 'const_no_melee_penalty', 'KING_3'])]), 'Imp': list ([50, 4, 5, 2, 3, 1, 2, 0, list ([])]), 'Familiar': list ([60, 4, 7, 4, 4, 1, 2, 0, list ([])]), 'Gog': list ([159, 13, 4, 6, 4, 2, 4, 12, list (['SHOOTING_ARMY'])]), 'Magog': list ([240, 13, 6, 7, 4, 2, 4, 24, list (['SHOOTING_ARMY'])]), 'Hell Hound': list ([357, 25, 7, 10, 6, 2, 7, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Cerberus': list ([392, 25, 8, 10, 8, 2, 7, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'const_free_attack'])]), 'Demon': list ([445, 35, 5, 10, 10, 7, 9, 0, list ([])]), 'Horned Demon': list ([480, 40, 6, 10, 10, 7, 9, 0, list ([])]), 'Pit Fiend': list ([765, 45, 6, 13, 13, 13, 17, 0, list ([])]), 'Pit Lord': list ([1224, 45, 7, 13, 13, 13, 17, 0, list ([])]), 'Efreet': list ([1670, 90, 9, 16, 12, 16, 24, 0, list ([])]), 'Efreet Sultan': list ([1848, 90, 13, 16, 14, 16, 24, 0, list ([])]), 'Devil': list ([5101, 160, 11, 19, 21, 30, 40, 0, list (['FLYING_ARMY', 'KING_2', 'const_free_attack'])]), 'Arch Devil': list ([7115, 200, 17, 26, 28, 30, 40, 0, list (['FLYING_ARMY', 'KING_2', 'const_free_attack'])]), 'Skeleton': list ([60, 6, 4, 5, 4, 1, 3, 0, list (['IS_UNDEAD'])]), 'Skeleton Warrior': list ([85, 6, 5, 6, 6, 1, 3, 0, list (['IS_UNDEAD'])]), 'Walking Dead': list ([98, 15, 3, 5, 5, 2, 3, 0, list (['IS_UNDEAD'])]), 'Zombie': list ([128, 20, 4, 5, 5, 2, 3, 0, list (['IS_UNDEAD'])]), 'Wight': list ([252, 18, 5, 7, 7, 3, 5, 0, list (['FLYING_ARMY', 'IS_UNDEAD'])]), 'Wraith': list ([315, 18, 7, 7, 7, 3, 5, 0, list (['FLYING_ARMY', 'IS_UNDEAD'])]), 'Vampire': list ([555, 30, 6, 10, 9, 5, 8, 0, list (['FLYING_ARMY', 'IS_UNDEAD', 'const_free_attack'])]), 'Vampire Lord': list ([783, 40, 9, 10, 10, 5, 8, 0, list (['FLYING_ARMY', 'IS_UNDEAD', 'const_free_attack'])]), 'Lich': list ([848, 30, 6, 13, 10, 11, 13, 12, list (['SHOOTING_ARMY', 'IS_UNDEAD'])]), 'Power Lich': list ([1079, 40, 7, 13, 10, 11, 15, 24, list (['SHOOTING_ARMY', 'IS_UNDEAD'])]), 'Black Knight': list ([2087, 120, 7, 16, 16, 15, 30, 0, list (['DOUBLE_WIDE', 'IS_UNDEAD'])]), 'Dread Knight': list ([2382, 120, 9, 18, 18, 15, 30, 0, list (['DOUBLE_WIDE', 'IS_UNDEAD'])]), 'Bone Dragon': list ([3388, 150, 9, 17, 15, 25, 50, 0, list (['DOUBLE_WIDE', 'IS_UNDEAD', 'const_lowers_morale', 'FLYING_ARMY', 'KING_1'])]), 'Ghost Dragon': list ([4696, 200, 14, 19, 17, 25, 50, 0, list (['DOUBLE_WIDE', 'IS_UNDEAD', 'const_lowers_morale', 'FLYING_ARMY', 'KING_1'])]), 'Troglodyte': list ([59, 5, 4, 4, 3, 1, 3, 0, list ([])]), 'Infernal Troglodyte': list ([84, 6, 5, 5, 4, 1, 3, 0, list ([])]), 'Harpy': list ([154, 14, 6, 6, 5, 1, 4, 0, list (['FLYING_ARMY'])]), 'Harpy Hag': list ([238, 14, 9, 6, 6, 1, 4, 0, list (['FLYING_ARMY', 'const_free_attack'])]), 'Beholder': list ([336, 22, 5, 9, 7, 3, 5, 12, list (['SHOOTING_ARMY', 'const_no_melee_penalty'])]), 'Evil Eye': list ([367, 22, 7, 10, 8, 3, 5, 24, list (['SHOOTING_ARMY', 'const_no_melee_penalty'])]), 'Medusa': list ([517, 25, 5, 9, 9, 6, 8, 4, list (['DOUBLE_WIDE', 'SHOOTING_ARMY', 'const_no_melee_penalty'])]), 'Medusa Queen': list ([577, 30, 6, 10, 10, 6, 8, 8, list (['DOUBLE_WIDE', 'SHOOTING_ARMY', 'const_no_melee_penalty'])]), 'Minotaur': list ([835, 50, 6, 14, 12, 12, 20, 0, list ([])]), 'Minotaur King': list ([1068, 50, 8, 15, 15, 12, 20, 0, list ([])]), 'Manticore': list ([1547, 80, 7, 15, 13, 14, 20, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Scorpicore': list ([1589, 80, 11, 16, 14, 14, 20, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Red Dragon': list ([4702, 180, 11, 19, 19, 40, 50, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1'])]), 'Black Dragon': list ([8721, 300, 15, 25, 25, 40, 50, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1'])]), 'Goblin': list ([60, 5, 5, 4, 2, 1, 2, 0, list ([])]), 'Hobgoblin': list ([78, 5, 7, 5, 3, 1, 2, 0, list ([])]), 'Wolf Rider': list ([130, 10, 6, 7, 5, 2, 4, 0, list (['DOUBLE_WIDE'])]), 'Wolf Raider': list ([203, 10, 8, 8, 5, 3, 4, 0, list (['DOUBLE_WIDE', 'const_two_attacks'])]), 'Orc': list ([192, 15, 4, 8, 4, 2, 5, 12, list (['SHOOTING_ARMY'])]), 'Orc Chieftain': list ([240, 20, 5, 8, 4, 2, 5, 24, list (['SHOOTING_ARMY'])]), 'Ogre': list ([416, 40, 4, 13, 7, 6, 12, 0, list ([])]), 'Ogre Mage': list ([672, 60, 5, 13, 7, 6, 12, 3, list ([])]), 'Roc': list ([1027, 60, 7, 13, 11, 11, 15, 0, list (['FLYING_ARMY', 'DOUBLE_WIDE'])]), 'Thunderbird': list ([1106, 60, 11, 13, 11, 11, 15, 0, list (['FLYING_ARMY', 'DOUBLE_WIDE'])]), 'Cyclops': list ([1266, 70, 6, 15, 12, 16, 20, 16, list (['SHOOTING_ARMY', 'CATAPULT'])]), 'Cyclops King': list ([1443, 70, 8, 17, 13, 16, 20, 24, list (['SHOOTING_ARMY', 'CATAPULT'])]), 'Behemoth': list ([3162, 160, 6, 17, 17, 30, 50, 0, list (['DOUBLE_WIDE', 'KING_1'])]), 'Ancient Behemoth': list ([6168, 300, 9, 19, 19, 30, 50, 0, list (['DOUBLE_WIDE', 'KING_1'])]), 'Gnoll': list ([56, 6, 4, 3, 5, 2, 3, 0, list ([])]), 'Gnoll Marauder': list ([90, 6, 5, 4, 6, 2, 3, 0, list ([])]), 'Lizardman': list ([126, 14, 4, 5, 6, 2, 3, 12, list (['SHOOTING_ARMY'])]), 'Lizard Warrior': list ([156, 15, 5, 6, 8, 2, 5, 24, list (['SHOOTING_ARMY'])]), 'Serpent Fly': list ([256, 20, 9, 7, 9, 2, 5, 0, list (['FLYING_ARMY'])]), 'Dragon Fly': list ([256, 20, 13, 8, 10, 2, 5, 0, list (['FLYING_ARMY'])]), 'Basilisk': list ([552, 35, 5, 11, 11, 6, 10, 0, list (['DOUBLE_WIDE'])]), 'Greater Basilisk': list ([714, 40, 7, 12, 12, 6, 10, 0, list (['DOUBLE_WIDE'])]), 'Gorgon': list ([890, 70, 5, 10, 14, 12, 16, 0, list (['DOUBLE_WIDE'])]), 'Mighty Gorgon': list ([1028, 70, 6, 11, 16, 12, 16, 0, list (['DOUBLE_WIDE'])]), 'Wyvern': list ([1350, 70, 7, 14, 14, 14, 18, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Wyvern Monarch': list ([1518, 70, 11, 14, 14, 18, 22, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY'])]), 'Hydra': list ([4120, 175, 5, 16, 18, 25, 45, 0, list (['DOUBLE_WIDE', 'KING_1', 'const_free_attack'])]), 'Chaos Hydra': list ([5931, 250, 7, 18, 20, 25, 45, 0, list (['DOUBLE_WIDE', 'KING_1', 'const_free_attack'])]), 'Pixie': list ([55, 3, 7, 2, 2, 1, 2, 0, list (['FLYING_ARMY'])]), 'Sprite': list ([95, 3, 9, 2, 2, 1, 3, 0, list (['FLYING_ARMY', 'const_free_attack'])]), 'Air Elemental': list ([356, 25, 7, 9, 9, 2, 8, 0, list (['cusELEMENTAL'])]), 'Storm Elemental': list ([486, 25, 8, 9, 9, 2, 8, 24, list (['IMMUNE_TO_MIND_SPELLS', 'SHOOTING_ARMY', 'cusELEMENTAL'])]), 'Water Elemental': list ([315, 30, 5, 8, 10, 3, 7, 0, list (['cusELEMENTAL'])]), 'Ice Elemental': list ([380, 30, 6, 8, 10, 3, 7, 24, list (['IMMUNE_TO_MIND_SPELLS', 'SHOOTING_ARMY', 'cusELEMENTAL'])]), 'Fire Elemental': list ([345, 35, 6, 10, 8, 4, 6, 0, list (['cusELEMENTAL'])]), 'Energy Elemental': list ([470, 35, 8, 12, 8, 4, 6, 0, list (['IMMUNE_TO_MIND_SPELLS', 'IMMUNE_TO_FIRE_SPELLS', 'FLYING_ARMY', 'cusELEMENTAL'])]), 'Earth Elemental': list ([330, 40, 4, 10, 10, 4, 8, 0, list (['cusELEMENTAL'])]), 'Magma Elemental': list ([490, 40, 6, 11, 11, 6, 10, 0, list (['IMMUNE_TO_MIND_SPELLS', 'cusELEMENTAL'])]), 'Psychic Elemental': list ([1669, 75, 7, 15, 13, 10, 20, 0, list (['IMMUNE_TO_MIND_SPELLS', 'DOUBLE_WIDE', 'const_free_attack', 'MULTI_HEADED', 'cusELEMENTAL'])]), 'Magic Elemental': list ([2012, 80, 9, 15, 13, 15, 25, 0, list (['IMMUNE_TO_MIND_SPELLS', 'DOUBLE_WIDE', 'const_free_attack', 'MULTI_HEADED', 'cusELEMENTAL'])]), 'Firebird': list ([4547, 150, 15, 18, 18, 30, 40, 0, list (['IMMUNE_TO_FIRE_SPELLS', 'DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1', 'HAS_EXTENDED_ATTACK'])]), 'Phoenix': list ([6721, 200, 21, 21, 18, 30, 40, 0, list (['IMMUNE_TO_FIRE_SPELLS', 'DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1', 'HAS_EXTENDED_ATTACK'])]), 'Peasant': list ([15, 1, 3, 1, 1, 1, 1, 0, list ([])]), 'Halfling': list ([75, 4, 5, 4, 2, 1, 3, 24, list (['SHOOTING_ARMY'])]), 'Rogue': list ([135, 10, 6, 8, 3, 2, 4, 0, list ([])]), 'Boar': list ([145, 15, 6, 6, 5, 2, 3, 0, list ([])]), 'Mummy': list ([270, 30, 5, 7, 7, 3, 5, 0, list (['IS_UNDEAD'])]), 'Nomad': list ([345, 30, 7, 9, 8, 2, 6, 0, list ([])]), 'Sharpshooter': list ([585, 15, 9, 12, 10, 8, 10, 32, list (['SHOOTING_ARMY'])]), 'Troll': list ([1024, 40, 7, 14, 7, 10, 15, 0, list ([])]), 'Gold Golem': list ([600, 50, 5, 11, 12, 8, 10, 0, list (['cusGOLEM'])]), 'Diamond Golem': list ([775, 60, 5, 13, 12, 10, 14, 0, list (['cusGOLEM'])]), 'Enchanter': list ([1210, 30, 9, 17, 12, 14, 14, 32, list (['SHOOTING_ARMY', 'const_no_melee_penalty'])]), 'Faerie Dragon': list ([19580, 500, 15, 20, 20, 20, 30, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1'])]), 'Rust Dragon': list ([26433, 750, 17, 30, 30, 50, 50, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1'])]), 'Crystal Dragon': list ([39338, 800, 16, 40, 40, 60, 75, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1'])]), 'Azure Dragon': list ([78845, 1000, 19, 50, 50, 70, 80, 0, list (['DOUBLE_WIDE', 'FLYING_ARMY', 'KING_1'])])});
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.columns = columns;
						__all__.data = data;
						__all__.elementals = elementals;
						__all__.haters = haters;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'math', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'math';
					var pi = Math.PI;
					var e = Math.E;
					var exp = Math.exp;
					var expm1 = function (x) {
						return Math.exp (x) - 1;
					};
					var log = function (x, base) {
						return (base === undefined ? Math.log (x) : Math.log (x) / Math.log (base));
					};
					var log1p = function (x) {
						return Math.log (x + 1);
					};
					var log2 = function (x) {
						return Math.log (x) / Math.LN2;
					};
					var log10 = function (x) {
						return Math.log (x) / Math.LN10;
					};
					var pow = Math.pow;
					var sqrt = Math.sqrt;
					var sin = Math.sin;
					var cos = Math.cos;
					var tan = Math.tan;
					var asin = Math.asin;
					var acos = Math.acos;
					var atan = Math.atan;
					var atan2 = Math.atan2;
					var hypot = Math.hypot;
					var degrees = function (x) {
						return (x * 180) / Math.PI;
					};
					var radians = function (x) {
						return (x * Math.PI) / 180;
					};
					var sinh = Math.sinh;
					var cosh = Math.cosh;
					var tanh = Math.tanh;
					var asinh = Math.asinh;
					var acosh = Math.acosh;
					var atanh = Math.atanh;
					var floor = Math.floor;
					var ceil = Math.ceil;
					var trunc = Math.trunc;
					var isnan = isNaN;
					var inf = Infinity;
					var nan = NaN;
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.acos = acos;
						__all__.acosh = acosh;
						__all__.asin = asin;
						__all__.asinh = asinh;
						__all__.atan = atan;
						__all__.atan2 = atan2;
						__all__.atanh = atanh;
						__all__.ceil = ceil;
						__all__.cos = cos;
						__all__.cosh = cosh;
						__all__.degrees = degrees;
						__all__.e = e;
						__all__.exp = exp;
						__all__.expm1 = expm1;
						__all__.floor = floor;
						__all__.hypot = hypot;
						__all__.inf = inf;
						__all__.isnan = isnan;
						__all__.log = log;
						__all__.log10 = log10;
						__all__.log1p = log1p;
						__all__.log2 = log2;
						__all__.nan = nan;
						__all__.pi = pi;
						__all__.pow = pow;
						__all__.radians = radians;
						__all__.sin = sin;
						__all__.sinh = sinh;
						__all__.sqrt = sqrt;
						__all__.tan = tan;
						__all__.tanh = tanh;
						__all__.trunc = trunc;
					__pragma__ ('</all>')
				}
			}
		}
	);
	__nest__ (
		__all__,
		'random', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var math = {};
					var __name__ = 'random';
					__nest__ (math, '', __init__ (__world__.math));
					var _array = (function () {
						var __accu0__ = [];
						for (var i = 0; i < 624; i++) {
							__accu0__.append (0);
						}
						return __accu0__;
					}) ();
					var _index = 0;
					var _bitmask1 = Math.pow (2, 32) - 1;
					var _bitmask2 = Math.pow (2, 31);
					var _bitmask3 = Math.pow (2, 31) - 1;
					var _fill_array = function () {
						for (var i = 0; i < 624; i++) {
							var y = (_array [i] & _bitmask2) + (_array [__mod__ (i + 1, 624)] & _bitmask3);
							_array [i] = _array [__mod__ (i + 397, 624)] ^ y >> 1;
							if (__mod__ (y, 2) != 0) {
								_array [i] ^= 2567483615;
							}
						}
					};
					var _random_integer = function () {
						if (_index == 0) {
							_fill_array ();
						}
						var y = _array [_index];
						y ^= y >> 11;
						y ^= y << 7 & 2636928640;
						y ^= y << 15 & 4022730752;
						y ^= y >> 18;
						_index = __mod__ (_index + 1, 624);
						return y;
					};
					var seed = function (x) {
						if (typeof x == 'undefined' || (x != null && x .hasOwnProperty ("__kwargtrans__"))) {;
							var x = int (_bitmask3 * Math.random ());
						};
						_array [0] = x;
						for (var i = 1; i < 624; i++) {
							_array [i] = (1812433253 * _array [i - 1] ^ (_array [i - 1] >> 30) + i) & _bitmask1;
						}
					};
					var randint = function (a, b) {
						return a + __mod__ (_random_integer (), (b - a) + 1);
					};
					var choice = function (seq) {
						return seq [randint (0, len (seq) - 1)];
					};
					var random = function () {
						return _random_integer () / _bitmask3;
					};
					var shuffle = function (x) {
						for (var i = len (x) - 1; i > 0; i--) {
							var j = math.floor (random () * (i + 1));
							var temp = x [i];
							x [i] = x [j];
							x [j] = temp;
						}
					};
					seed ();
					__pragma__ ('<use>' +
						'math' +
					'</use>')
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__._array = _array;
						__all__._bitmask1 = _bitmask1;
						__all__._bitmask2 = _bitmask2;
						__all__._bitmask3 = _bitmask3;
						__all__._fill_array = _fill_array;
						__all__._index = _index;
						__all__._random_integer = _random_integer;
						__all__.choice = choice;
						__all__.randint = randint;
						__all__.random = random;
						__all__.seed = seed;
						__all__.shuffle = shuffle;
					__pragma__ ('</all>')
				}
			}
		}
	);
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
			var swap = !(countA);
			if (swap) {
				var count1 = countB;
				var __left0__ = tuple ([nameB, nameA]);
				var name1 = __left0__ [0];
				var name2 = __left0__ [1];
				var idxA = 1;
			}
			else {
				var count1 = countA;
				var __left0__ = tuple ([nameA, nameB]);
				var name1 = __left0__ [0];
				var name2 = __left0__ [1];
				var idxA = 0;
			}
			var result = find_balance_orig (name1, name2, num_fights, count1);
			return tuple ([result [idxA], result [__mod__ (idxA + 1, 2)], swap]);
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
    return __all__;
}
window ['fight_sim'] = fight_sim ();

//# sourceMappingURL=extra/sourcemap/fight_sim.js.map
