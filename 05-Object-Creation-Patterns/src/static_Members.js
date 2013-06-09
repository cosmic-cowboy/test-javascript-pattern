// 5.6 静的メンバ

// コンストラクタ
var Gadget_Static = function () {}

// 静的メソッド コンストラクタから直接呼び出せる
Gadget_Static.isShiny = function () {
	return "you bet";
};

// プロトタイプにメソッドを追加 インスタンスが必要
Gadget_Static.prototype.setPrice = function(price) {
	this.price = price;
};

// プロトタイプにメソッドを追加して、もとの静的メソッドへのファサードとして機能させる
Gadget_Static.prototype.isShiny = Gadget_Static.isShiny;