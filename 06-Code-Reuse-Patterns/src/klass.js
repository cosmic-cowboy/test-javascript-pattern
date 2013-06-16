// 6.8 klass

var klass = function (Parent, props) {

	var Child, F, i;

	// 1. 新しいコンストラクタ
	Child = function () {
		if(Child.uber && Child.uber.hasOwnProperty("__construct")){
			Child.uber.__construct.apply(this, arguments);
		}
		if(Child.prototype.hasOwnProperty("__construct")){
			Child.prototype.__construct.apply(this, arguments);
		}
	};

	// 2. 継承
	Parent = Parent || Object;
	F = function(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.uber = Parent.prototype;
	Child.prototype.constructor = Child;

	// 3. 実装したメソッドを追加
	for(i in props){
		if (props.hasOwnProperty(i)){
			Child.prototype[i] = props[i];
		}
	}

	// クラスを返す
	return Child;
};