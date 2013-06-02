// 4.7 Init-Time Branching
// utils.addListener()が呼ばれるたび、同じ検索が実行される
// 初期化時分岐を使えばスクリプトが読み込まれる際の1書いだけで済む

var utils = {
	addListener : function (el, type, fn) {
		if(typeof window.addListener === 'function'){
			el.addEventListener(type, fn, false);
		} else if (typeof document.attachEvent === 'function'){
			// IE
			el.attachEvent('on' + type, fn);
		} else {
			// older browsers
			el['on' + type] = fn;
		}
	},
	removeListener : function (el, type, fn) {
		//
	}
};