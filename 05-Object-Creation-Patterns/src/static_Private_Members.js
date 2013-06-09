// 5.6.2 Private Static Members
var Gadget_Private_Static = (function () {
	
	// 静的変数プロパティ
	// static variable/property
	var counter = 0,
		ReturnObject;

	// コンストラクタの新しい実装
	// returning the new implementation of the constructor
	ReturnObject = function () {
		counter += 1;
	};

	// 特権メソッド
	ReturnObject.prototype.getLastId = function() {
		return counter;
	};

	// 特権メソッド（クリア用 インスタンス生成時に追加されるのがかっこ悪いが…）
	ReturnObject.prototype.clear = function() {
		counter = 0;
		return counter;
	};
	// コンストラクタに上書き
	return ReturnObject;

}());
// execute immediately