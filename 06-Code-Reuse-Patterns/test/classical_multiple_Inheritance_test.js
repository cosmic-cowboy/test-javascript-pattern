// 6.2 Classical Inheritance
// 6.4.2 Multiple Inheritance by Borrowing Constructors

TestCase("06-Code-Reuse-Patterns Classical Inheritance Multiple Inheritance by Borrowing Constructors", {
	"test Multiple Inheritance by Borrowing Constructors" : function () {
		var jane = new CatWings();
		assertEquals(4, jane.legs);
		assertEquals("meaowww", jane.say());
		assertEquals(2, jane.wings);
		assertTrue(jane.fly);
	}
});