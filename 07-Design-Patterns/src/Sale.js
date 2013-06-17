// 7.4 デコレータ Decorator
// 7.4.2 実装 Implementation

function Sale(price){
	this.price = price || 100;
}
Sale.prototype.getPrice = function() {
	return this.price;
};

Sale.decorators = {};

Sale.decorators.fedtax = {
	getPrice : function () {
		// 親メソッドから値を取得
		var price = this.uber.getPrice();
		price += price  * 5 / 100;
		return price;
	}
};

Sale.decorators.quebec = {
	getPrice : function () {
		// 親メソッドから値を取得
		var price = this.uber.getPrice();
		price += price  * 7.5 / 100;
		return price;
	}
};

Sale.decorators.money = {
	getPrice : function () {
		// 親メソッドから値を取得
		return "$" + this.uber.getPrice().toFixed(2);
	}
};

Sale.decorators.cdn = {
	getPrice : function () {
		// 親メソッドから値を取得
		return "CDN$" + this.uber.getPrice().toFixed(2);
	}
};

// 各オブジェクトは自分より前のデコレータで強化されたオブジェクトを継承する
// 就職されたメソッドはuberにある同じメソッドを呼び出し、値を取得し、付加機能を実行して処理を続ける
Sale.prototype.decorate = function(decorator) {
	var F = function () {},
		overrides = this.constructor.decorators[decorator],
		i, newobj;
	// 一時的コンストラクタ
	F.prototype = this;
	newobj = new F();
	// 継承オブジェクトへのアクセスを保持
	newobj.uber = F.prototype;
	// メソッドは上書き
	for(i in overrides){
		if(overrides.hasOwnProperty(i)){
			newobj[i] = overrides[i];
		}
	}
	return newobj;
};
