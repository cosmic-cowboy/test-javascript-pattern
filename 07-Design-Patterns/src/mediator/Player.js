// 7.8.1 mediator
// ただ、得点を憶えているだけ

function Player(name){
	this.points = 0;
	this.name = name;
}

Player.prototype.play = function() {
	this.points += 1;
	// メディエータに通知
	mediator.played();
};