// 7.2 ファクトリ Factory
TestCase("07-Design-Patterns Factory", {
	"test Factory" : function () {
		var corolla = CarMaker.factory("Compact");
		var solstice = CarMaker.factory("Convertible");
		var cherokee = CarMaker.factory("SUV");
		assertEquals("Vroom, I have 4 doors", corolla.drive());
		assertEquals("Vroom, I have 2 doors", solstice.drive());
		assertEquals("Vroom, I have 17 doors", cherokee.drive());
	},
	// 7.2.1 組み込みのオブジェクトファクトリ Built-in Object Factory
	"test Built-in Object Factory" : function () {
		var o = new Object({}),
			n = new Object(1),
			s = new Object('1'),
			b = new Object(true);

		assertTrue(o.constructor === Object);
		assertTrue(n.constructor === Number);
		assertTrue(s.constructor === String);
		assertTrue(b.constructor === Boolean);
	}

});