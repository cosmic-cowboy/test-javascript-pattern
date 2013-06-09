TestCase("05-Object-Creation-Patterns Static Members", {

	"test Public Static Members" : function () {

		// 静的メソッドを呼び出す
		assertEquals("you bet", Gadget_Static.isShiny());

		// インスタンスを生成してメソッドを呼ぶ
		var iPhone = new Gadget_Static();
		iPhone.setPrice(500);

		assertEquals("function", typeof iPhone.setPrice);

		// インスタンスメソッドを静的には呼び出せない
		assertEquals("undefined", typeof Gadget_Static.setPrice);

		// インスタンスから静的メソッドは呼び出せないが、
		// プロトタイプに追加することで呼び出すことが可能に
		assertEquals("function", typeof iPhone.isShiny);
	}
});