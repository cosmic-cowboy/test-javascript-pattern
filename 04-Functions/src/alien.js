// 4.10 カリー化　Curry
// 4.10.1 関数の適用　Function Application
// this inside of sayHi() points to alien.

var alien = {
	sayHi : function (who) {
		return "Hello" + (who ? ", " + who : "") + "!";
	}
};