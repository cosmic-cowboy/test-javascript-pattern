// 5.4 モジュールパターン
// 5.4.1 モジュールパターンの開示 Revealing Module Pattern

// 名前空間
MYAPP.namespace('MYAPP.utilities.array');

// 暫定 interim
MYAPP.namespace('MYAPP.utilities.object');
MYAPP.namespace('MYAPP.utilities.lang');


// モジュールの定義
// 即時関数	が提供するプライベートスコープを使い、プライベートのプロパティと関数を宣言
MYAPP.utilities.array = (function () {

	// 依存関係
	var uobj = MYAPP.utilities.object,
		ulang = MYAPP.utilities.lang,

		// プライベートプロパティ
		array_string = "[Object Array]",
		ops = Object.prototype.toString,

		// プライベート関数
		isArray = function(a) {
			return ops.call(a) === array_string;
		},

		indexOf = function(haystack, needle) {
			var i = 0,
				max = haystack.length;
			for (; i < max; i += 1) {
				if(haystack[i] === needle){
					return i;
				}
			}
			return -1;
		};

	// パブリックAPIを開示する Revealing Module Pattern
	return {
			isArray : isArray,
			indexOf : indexOf
	};
}());