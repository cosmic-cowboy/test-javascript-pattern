TestCase("05-Object-Creation-Patterns MYAPP", {
	// "test Namespace Pattern" : function () {
	// 	assertEquals("1", MYAPP.modules.module1.data.a);
	// 	assertEquals("2", MYAPP.modules.module1.data["b"]);
	// },

	// 5.1.1 汎用の名前空間関数 General Purpose Namespace Function
	"test Namespace Pattern General Purpose Namespace Function" : function () {
		// 戻り値をローカル変数に代入
		var module2 = MYAPP.namespace('MYAPP.modules.module2');
		assertTrue(module2 === MYAPP.modules.module2);

		// 先頭のMYAPPを省略
		MYAPP.namespace('modules.module51');
		assertFalse('undefined' === MYAPP.modules.module51);

		// 長い名前空間
		MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');
		assertFalse('undefined' === MYAPP.once.upon.a.time.there.was.this.long.nested.property);
	},

});