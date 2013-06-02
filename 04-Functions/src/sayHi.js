// 4.10 カリー化　Curry
// 4.10.1 関数の適用　Function Application
// this points to the global object.

var sayHi = function (who) {
	return "Hello" + (who ? ", " + who : "") + "!";
};