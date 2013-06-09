// 6.4 Classical Pattern #2 Rent a Constructor The Prototype Chain
reusePatterns.namespace('reusePatterns.rentAConstructor.Child');
reusePatterns.namespace('reusePatterns.rentAConstructor.Parent');


reusePatterns.rentAConstructor.Parent = function(name) {
	this.name = name || "Adam";
};

reusePatterns.rentAConstructor.Parent.prototype.say = function() {
	return this.name;
};

reusePatterns.rentAConstructor.Child = function(name){
	reusePatterns.rentAConstructor.Parent.apply(this, arguments);
};