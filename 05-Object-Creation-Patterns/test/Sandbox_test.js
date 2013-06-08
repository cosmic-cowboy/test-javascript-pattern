TestCase("05-Object-Creation-Patterns Sandbox Pattern", {

	"test Sandbox Pattern ajax,dom module" : function () {
		Sandbox('ajax', 'dom', function (box) {
			assertTrue("function" === typeof box.makeRequest);
			assertTrue("function" === typeof box.getResponse);
			assertTrue("function" === typeof box.getElement);
			assertTrue("function" === typeof box.getStyle);
			assertEquals("bar", box.foo);
		});
	},
	"test Sandbox Pattern ajax,dom module Array" : function () {
		Sandbox(['ajax', 'dom'], function (box) {
			assertTrue("function" === typeof box.makeRequest);
			assertTrue("function" === typeof box.getResponse);
			assertTrue("function" === typeof box.getElement);
			assertTrue("function" === typeof box.getStyle);
			assertEquals("bar", box.foo);
		});

	},
	"test Sandbox Pattern dom module" : function () {
		Sandbox('dom', function (box) {
			assertEquals("dom", box.getElement());
			assertEquals("dom", box.getStyle());
		});
	},
	"test Sandbox Pattern dom2 module" : function () {
		Sandbox('dom2', function (box) {
			assertEquals("dom2", box.getElement());
			assertEquals("dom2", box.getStyle());
		});
	},
	"test Sandbox Pattern all modules" : function () {
		Sandbox(function (box) {
			assertTrue("function" === typeof box.makeRequest);
			assertTrue("function" === typeof box.getResponse);
			assertTrue("function" === typeof box.getElement);
			assertTrue("function" === typeof box.getStyle);
			assertTrue("function" === typeof box.attachEvent);
			assertTrue("function" === typeof box.dettachEvent);
			assertEquals("bar", box.foo);
			assertEquals("dom2", box.getElement());
			assertEquals("dom2", box.getStyle());
		});
	}
});