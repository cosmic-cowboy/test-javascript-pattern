//6.2 Classical Inheritance Parent

// the parent constructor
function Parent (name) {
	this.name = name || "Adam";
}

// adding functionality to the prototype
Parent.prototype.say = function() {
	return this.name;
};
