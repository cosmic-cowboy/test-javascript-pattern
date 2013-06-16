// 6.6 Classical Pattern  #4 Share the Prototype

reusePatterns.namespace('reusePatterns.shareThePrototype');

reusePatterns.shareThePrototype = (function () {
	function Parent (name) {
		this.name = name;
	}

	Parent.prototype.say = function() {
		return this.name;
	};

	function Child () {
	}

	function inherit (C, P) {
		C.prototype = P.prototype;
	}

	inherit(Child, Parent);

	return {
		Parent : Parent,
		Child  : Child
	};
}());
