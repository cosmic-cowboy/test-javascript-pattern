// 5.4.2 コンストラクタを作成するモジュール

MYAPP.namespace("MYAPP.utilities.Array_Constr");

// 暫定 interim
MYAPP.namespace('MYAPP.utilities.object');
MYAPP.namespace('MYAPP.utilities.lang');

MYAPP.utilities.Array_Constr = (function () {

	// 依存関係
	var uobj = MYAPP.utilities.object,
		ulang = MYAPP.utilities.lang,

		// プライベートプロパティ
		Constr;

	// パブリックAPI コンストラクタ
	Constr = function (o) {
		this.elements = this.toArray(o);
	};

	// パブリックAPI プロトタイプ
	Constr.prototype = {
		constructor : MYAPP.utilities.Array_Constr,
		version : "2.0",
		toArray : function (obj) {
			for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
				a[i] = obj[i];
			}
			return a;
		}
	};

	// 新しい名前空間に代入されたコンストラクタを返す
	return Constr;
}());