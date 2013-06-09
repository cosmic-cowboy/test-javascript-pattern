//6.2 Classical Inheritance
// Expected Outcome When Using Classical Inheritance

TestCase("06-Code-Reuse-Patterns Classical Inheritance ", {
	"test Classical Inheritance Following the Prototype Chain" : function () {
		var kid = new Child();
		assertEquals("Adam", kid.say());

		kid.name = "Patrick";
		assertEquals("Patrick", kid.say());
		delete kid.name;
		assertEquals("Adam", kid.say());
	},
	"test Classical Inheritance Drawbacks When Using Pattern #1" : function () {
		var s_kid = new Child("Seth");
		assertEquals("Adam", s_kid.say());
	}
});