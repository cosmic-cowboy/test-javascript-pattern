//6.2 Classical Inheritance
// Expected Outcome When Using Classical Inheritance

TestCase("06-Code-Reuse-Patterns Classical Inheritance The Default Pattern namespace", {

	"test Classical Inheritance Following the Prototype Chain namespace" : function () {

		var kid = new reusePatterns.defaultPattern.Child();
		assertEquals("Adam", kid.say());

		kid.name = "Patrick";
		assertEquals("Patrick", kid.say());
		delete kid.name;
		assertEquals("Adam", kid.say());
	},
	"test Classical Inheritance Drawbacks When Using Pattern #1 namespace" : function () {

		var s_kid = new reusePatterns.defaultPattern.Child("Seth");
		assertEquals("Adam", s_kid.say());
	}
});


TestCase("06-Code-Reuse-Patterns Classical Inheritance Rent-a-Constructor namespace", {

	"test Classical Inheritance Rent a Constructor namespace" : function () {

		var kid = new reusePatterns.rentAConstructor.Child("Patrick");
		assertEquals("Patrick",   kid.name);
		assertEquals("undefined", typeof kid.say);
	}
});