// 6.2 Classical Inheritance
// 6.4.2 Multiple Inheritance by Borrowing Constructors

function Cat () {
	this.legs = 4;
	this.say = function () {
		return "meaowww";
	};
}

function Bird () {
	this.wings = 2;
	this.fly = true;
}

function CatWings () {
	Cat.apply(this);
	Bird.apply(this);
}