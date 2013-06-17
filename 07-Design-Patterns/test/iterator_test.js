// 7.3 イテレータ Iterator
TestCase("07-Design-Patterns Iterator", {
	"test Iterator" : function () {

		// テスト確認用プロパティ
		var answer = [1,3,5];
		var counter = 0;

		// 次があるか
		assertTrue(agg.hasNext());

		while(agg.hasNext()){
			assertEquals(answer[counter], agg.next());
			counter += 1;
		}

		// 次があるか
		assertFalse(agg.hasNext());

		// 先頭に戻す（ポインタを返す）
		assertEquals(0, agg.rewind());
		// 現在の要素を返す
		assertEquals(1, agg.current());
	}
});