// 6.7 Classical Pattern #5 A Temporary Constructor
// 6.7.2 コンストラクタのポインタを再設定する Resetting the Constructor Pointer
reusePatterns.namespace('reusePatterns.theHolyGrailPattern');

reusePatterns.theHolyGrailPattern = (function () {
	function Parent (name) {
		this.name = name;
	}

	function Child () {
	}

	var inherit = (function() {
		// A Temporary Constructor
		var F = function () {};
		return function(C, P){
			F.prototype = P.prototype;
			C.prototype = new F();
			C.uber = P.prototype;
			C.prototype.constructor = C;
		};
	}());

	function init () {
		Parent.prototype.say = function() {
			return this.name;
		};
		inherit(Child, Parent);
	}

	return {
		Parent : Parent,
		Child  : Child,
		init : init
	};
}());
