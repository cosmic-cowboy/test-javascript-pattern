// 5.7 オブジェクト定数　Object Constants

TestCase("05-Object-Creation-Patterns Object Constants", {

	"test Object Constants" : function () {
	
		// check if defined
		assertFalse(constant.isDefined("maxwidth"));

		// define
		constant.set("maxwidth", 480);

		// check again
		assertTrue(constant.isDefined("maxwidth"));
		assertEquals(480, constant.get("maxwidth"));

		// attempt to redefine
		constant.set("maxwidth", 320);

		// check again
		assertEquals(480, constant.get("maxwidth"));

	}
});
