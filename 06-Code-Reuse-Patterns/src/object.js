// 6.9 Prototypal Inheritance
// oと同じプロパテイとメソッドを持つ別オブジェクトが生成される

function object (o) {
	function F () {}
	F.prototype = o;
	return new F();
}