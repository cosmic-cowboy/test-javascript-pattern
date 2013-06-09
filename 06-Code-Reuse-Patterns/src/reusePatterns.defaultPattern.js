//6.2 Classical Inheritance Child


// 名前空間
reusePatterns.namespace('reusePatterns.defaultPattern');
reusePatterns.namespace('reusePatterns.defaultPattern.Child');
reusePatterns.namespace('reusePatterns.defaultPattern.Parent');


reusePatterns.defaultPattern.inherit  = function(C, P) {

	// prototypeプロパティは関数ではなく、オブジェクトを指す
	// コンストラクタ自体ではなく、親コンストラクタを生成したインスタンスを指すようにする
	// new を使用し、インスタンスを生成すると、Pのインスタンスの機能がプロトタイプを介して、利用できるようになる
	// thisに追加したインスタンス固有のプロパティとプロトタイプのプロパティが継承される

	C.prototype = new P();
};

// the parent constructor
reusePatterns.defaultPattern.Parent = function (name) {
	this.name = name || "Adam";
};

	// adding functionality to the prototype
reusePatterns.defaultPattern.Parent.prototype.say = function() {
	return this.name;
};

//6.2 Classical Inheritance Child

reusePatterns.defaultPattern.Child = function (name) {};

(function () {
	var inherit = reusePatterns.defaultPattern.inherit;
	var Child = reusePatterns.defaultPattern.Child;
	var Parent = reusePatterns.defaultPattern.Parent;
	// inheritance magic happens here
	inherit(Child, Parent);
}());
