// 6.7 Classical Pattern #5 A Temporary Constructor
// 6.7.1 スーパークラスを格納 Storing the Superclass
reusePatterns.namespace('reusePatterns.storingTheSuperclass');

reusePatterns.storingTheSuperclass = (function () {
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
		C.uber = P.prototype;
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
		init : init
	};
}());
