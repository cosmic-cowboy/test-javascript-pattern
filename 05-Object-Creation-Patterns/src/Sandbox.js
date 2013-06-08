// 5.5.1 グローバルコンストラクタ A Global Constructor


// 5.5.3 コンストラクタの実装 Implementing the Constructor

function Sandbox(box) {
	// turning arguments into an array, the last argument is the callback
	// modules can be passed as an array or as individual parameters
	// 引数を配列に変換、最後の引数をコールバックに
	// ひとつ目の引数がstringなら、配列を、Arrayならひとつ目の引数を渡す
	var args = Array.prototype.slice.call(arguments),
		callback = args.pop(),
		modules = (args[0] && typeof args[0] === "string")? args : args[0],
		i;

	// make sure the function is called as a constructor
	// この関数がコンストラクタとして呼ばれたかを確認する
	if (!(this instanceof Sandbox)){
		return new Sandbox(modules, callback);
	}

	this.a = 1;
	this.b = 2;

	// モジュールをthisオブジェクトに追加
	// モジュール指定なし、「*」はすべてのモジュールを使用
	if(!modules || modules === '*'){
		modules = [];
		for(i in Sandbox.modules){
			if(Sandbox.modules.hasOwnProperty(i)){
				modules.push(i);
			}
		}
	}

	// 必要なモジュールを追加
	for (i = 0; i < modules.length; i += 1) {
		Sandbox.modules[modules[i]](this);
	}

	// コールバック
	callback(this);
}


// prototypeプロパティの設定
Sandbox.prototype =  {
	name : "My Application",
	version : "1.0",
	getName : function () {
		return this.name;
	}
};

// 5.5.2 モジュールの追加 Adding Modules
Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
	var moduleName = "dom";
	box.getElement = function (){
		return moduleName;
	};
	box.getStyle = function () {
		return moduleName;
	};
	box.foo = "bar";
};

Sandbox.modules.event = function (box) {
	box.attachEvent = function () {};
	box.dettachEvent = function () {};
};

Sandbox.modules.ajax = function (box) {
	box.makeRequest = function () {};
	box.getResponse = function () {};
};

Sandbox.modules.dom2 = function (box) {
	var moduleName = "dom2";
	box.getElement = function () {
		return moduleName;
	};
	box.getStyle = function () {
		return moduleName;
	};
	box.foo = "bar";
};
