// 4.8 Function Properties—A Memoization Pattern

var myFunc = function (param) {

	var cachekey = JSON.stringifgy(Array.prototype.slice.call(arguments)),
		result;

	if(myFunc.cache[param]){
		result = {};

		myFunc.cache[param] = result;
	}
	return myFunc.cache[param];
};

// 関数のカスタムプロパティ
// キャッシュの記憶領域

myFunc.cache = {};