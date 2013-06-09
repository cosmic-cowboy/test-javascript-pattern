// 5.8 連鎖パターン　Chaining Pattern

TestCase("05-Object-Creation-Patterns Chaining Pattern", {

	"test Chaining Pattern" : function () {
		assertEquals(5, chaining_Pattern.increment().add(3).shout());
	}
});


