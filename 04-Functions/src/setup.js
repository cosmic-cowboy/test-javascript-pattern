// 4.3 関数を返す（クロージャ）
var setup = function () {
	var count = 0;
	return function () {
		return (count += 1);
	};
};