// 4.7 Init-Time Branching
// utils.addListener()が呼ばれるたび、同じ検索が実行される

var utils = {
	addListener : null,
	removeListener : null
};

// 実装
// 初期化時分岐を使えばスクリプトが読み込まれる際の1書いだけで済む

if(typeof window.addListener === 'function'){

	utils.addListener = function (el, type, fn){
		el.addEventListener(type, fn, false);
	};
	utils.removeListener = function (el, type, fn){
		el.removeEventListener(type, fn, false);
	};

} else if (typeof document.attachEvent === 'function'){
	// IE
	utils.addListener = function (el, type, fn){
		el.attachEvent('on' + type, fn);
	};
	utils.removeListener = function (el, type, fn){
		el.detachEvent('on' + type, fn);
	};

} else {
	// older browsers
	utils.addListener = function (el, type, fn){
		el['on' + type] = fn;
	};
	utils.removeListener = function (el, type, fn){
		el['on' + type] = null;
	};

}