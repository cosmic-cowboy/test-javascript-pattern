// 5.8 Chaining Pattern
var chaining_Pattern = {
	value : 1,
	increment : function () {
		this.value += 1;
		return this;
	},
	add : function (v) {
		this.value += v;
		return this;
	},
	shout : function  () {
		return this.value;
	}
};