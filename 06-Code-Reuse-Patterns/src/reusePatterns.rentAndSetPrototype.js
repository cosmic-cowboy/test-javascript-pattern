// 6.5 Classical Pattern #3 Rent and Set Prototype

reusePatterns.namespace('reusePatterns.rentAndSetPrototype');

reusePatterns.rentAndSetPrototype = (function () {

	function Parent (name) {
		this.name = name || "Adam";
	}

	Parent.prototype.say = function() {
		return this.name;
	};

	function Child (name) {
		Parent.apply(this,arguments);
	}

	Child.prototype = new Parent();

	return {
		Parent : Parent,
		Child  : Child
	};

}());

// reusePatterns.namespace('reusePatterns.rentAndSetPrototype.Child');
// reusePatterns.namespace('reusePatterns.rentAndSetPrototype.Parent');

// reusePatterns.rentAndSetPrototype.Parent = function (name) {
// 	this.name = name || "Adam";
// };

// reusePatterns.rentAndSetPrototype.Parent.prototype.say = function() {
// 	return this.name;
// };

// reusePatterns.rentAndSetPrototype.Child = function(name) {
// 	reusePatterns.rentAndSetPrototype.Parent.apply(this,arguments);
// };

// reusePatterns.rentAndSetPrototype.Child.prototype = new reusePatterns.rentAndSetPrototype.Parent();
