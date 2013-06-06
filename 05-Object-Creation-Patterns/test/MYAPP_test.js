TestCase("05-Object-Creation-Patterns MYAPP", {
	"test Namespace Pattern" : function () {
		assertEquals("1", MYAPP.modules.module1.data.a);
		assertEquals("2", MYAPP.modules.module1.data["b"]);
	}
});