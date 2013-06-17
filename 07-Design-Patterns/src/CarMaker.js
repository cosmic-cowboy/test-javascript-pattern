// 7.2 ファクトリ Factory

// 親コンストラクタ
function CarMaker () {}

// 親のメソッド
CarMaker.prototype.drive = function() {
	return "Vroom, I have " + this.doors + " doors";
};

// 静的ファクトリメソッド
CarMaker.factory = function  (type) {
	var constr = type,
		newcar;

	// コンストラクタが存在しなければエラー
	if (typeof CarMaker[constr] !== "function"){
		throw {
			name : "Error",
			message : constr + " doesn't exist"
		};
	}

	// この時点でコンストラクタの存在がわかる
	// 一度だけ親から継承します
	if(typeof CarMaker[constr].prototype.drive !== "function"){
		CarMaker[constr].prototype = new CarMaker();
	}
	// 	新しいインスタンスを作成
	newcar = new CarMaker[constr]();

	return newcar;
};

// 車の型ごとに個別に定義
CarMaker.Compact = function(){
	this.doors = 4;
};
CarMaker.Convertible = function(){
	this.doors = 2;
};
CarMaker.SUV = function(){
	this.doors = 17;
};
