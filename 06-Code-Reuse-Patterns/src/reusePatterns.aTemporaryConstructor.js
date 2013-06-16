// 6.7 Classical Pattern #5 A Temporary Constructor

reusePatterns.namespace('reusePatterns.aTemporaryConstructor');

reusePatterns.aTemporaryConstructor = (function () {
	function Parent (name) {
		this.name = name;
	}

	function Child () {
	}

	function inherit (C, P) {
		// A Temporary Constructor
		var F = function () {};
		F.prototype = P.prototype;
		C.prototype = new F();
	}

	function init () {
		Parent.prototype.say = function() {
			return this.name;
		};
		inherit(Child, Parent);
	}

	return {
		Parent : Parent,
		Child  : Child,
		init   : init
	};
}());
