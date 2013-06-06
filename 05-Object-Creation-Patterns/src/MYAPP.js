// 5.1.1 汎用の名前空間関数 General Purpose Namespace Function
var MYAPP = MYAPP || {};

// 名前空間関数の実装
MYAPP.namespace = function (ns_string) {
	// 引数に設定された名前空間を.で区切って配列に
	var parts = ns_string.split('.'),
		parent = MYAPP,
		i;

	// 先頭の冗長なグローバルを取り除く
	if (parts[0] == "MYAPP"){
		parts = parts.slice(1);
	}

	for (i = 0; i < parts.length; i += 1) {
		// プロパティが存在しなければ作成する
		if(typeof parent[parts[i]] === 'undefined'){
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};