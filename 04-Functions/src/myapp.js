// 4.2.2 Callbacks and Scope

var myapp = {};
myapp.color = "green";
myapp.paint = function (node) {
	node.style.color = this.color;
};