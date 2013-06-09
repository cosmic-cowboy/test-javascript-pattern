// 5.6 静的メンバ

// コンストラクタ
var Gadget_Static = function () {}

// 静的メソッド コンストラクタから直接呼び出せる
Gadget_Static.isShiny = function () {
	var msg = "you bet";

	if(this instanceof Gadget_Static){
		msg += ", it costs $" + this.price + " !";
	}

	return msg;
};

// プロトタイプにメソッドを追加 インスタンスが必要
Gadget_Static.prototype.setPrice = function(price) {
	this.price = price;
};

// プロトタイプにメソッドを追加して、もとの静的メソッドへのファサードとして機能させる
// Gadget_Static.prototype.isShiny = Gadget_Static.isShiny;
// 通常のメソッドをプロトタイプに追加
Gadget_Static.prototype.isShiny = function () {
	return Gadget_Static.isShiny.call(this);
};