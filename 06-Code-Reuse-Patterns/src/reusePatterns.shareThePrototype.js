// 6.6 Classical Pattern  #4 Share the Prototype

reusePatterns.namespace('reusePatterns.shareThePrototype');

reusePatterns.shareThePrototype = (function () {
	function Parent (name) {
		this.name = name;
	}

	function Child () {
	}

	function inherit (C, P) {
		C.prototype = P.prototype;
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
		init    : init
	};
}());
