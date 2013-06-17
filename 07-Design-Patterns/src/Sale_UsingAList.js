// 7.4 デコレータ Decorator
// 7.4.2 リストを使った実装 Implementation Using a List
function Sale_UsingAList (price) {
	this.price = price || 100;
	this.decorators_list = [];
}

Sale_UsingAList.decorators = {};

Sale_UsingAList.decorators.fedtax = {
	// 直前のメソッドの結果をパラメータとして次のメソッドに渡す
	getPrice : function (price) {
		return price + price  * 5 / 100;
	}
};

Sale_UsingAList.decorators.quebec = {
	// 直前のメソッドの結果をパラメータとして次のメソッドに渡す
	getPrice : function (price) {
		return price + price  * 7.5 / 100;
	}
};

Sale_UsingAList.decorators.money = {
	// 直前のメソッドの結果をパラメータとして次のメソッドに渡す
	getPrice : function (price) {
		return "$" + price.toFixed(2);
	}
};

Sale_UsingAList.decorators.cdn = {
	// 直前のメソッドの結果をパラメータとして次のメソッドに渡す
	getPrice : function (price) {
		return "CDN$" + price.toFixed(2);
	}
};

// デコレータリストにデコレータを追加する
Sale_UsingAList.prototype.decorate = function(decorator) {
	this.decorators_list.push(decorator);
};

// 
Sale_UsingAList.prototype.getPrice = function() {
	var price = this.price,
		i,
		max = this.decorators_list.length,
		name;

	console.log("call:1, decorator:none(Sale_UsingAList), price:" + price);

	for (i = 0; i < max; i += 1) {
		name = this.decorators_list[i];
		// こうなるとgetPrice()というメソッドである必要がない。
		price = Sale_UsingAList.decorators[name].getPrice(price);
		console.log("call:" + (i+2)+ ", decorator:" + name +", price:" + price);
	}
	return price;
};
