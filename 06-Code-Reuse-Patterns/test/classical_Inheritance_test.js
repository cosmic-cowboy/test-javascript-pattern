//6.2 Classical Inheritance
// Expected Outcome When Using Classical Inheritance

TestCase("06-Code-Reuse-Patterns Classical Inheritance", {
	"test Classical Inheritance" : function () {
		var kid = new Child();
		assertEquals("Adam", kid.say());
	}
});