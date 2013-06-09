// 5.8 連鎖パターン　Chaining Pattern

TestCase("05-Object-Creation-Patterns Chaining Pattern", {

	"test Chaining Pattern" : function () {
		assertEquals(5, chaining_Pattern.increment().add(3).shout());

		chaining_Pattern.value = 1;
		chaining_Pattern.increment();
		chaining_Pattern.add(7);
		assertEquals(9, chaining_Pattern.shout());
	}
});


