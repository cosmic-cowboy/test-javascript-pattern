// 5.6.2 Private Static Members
var Gadget_Private_Static = (function () {
	
	// 静的変数プロパティ
	// static variable/property
	var counter = 0;

	// コンストラクタの新しい実装
	// returning the new implementation of the constructor
	return function () {
		return counter += 1;
	};
}());