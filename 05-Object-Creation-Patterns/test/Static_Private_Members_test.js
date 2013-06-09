TestCase("05-Object-Creation-Patterns Private Static Members", {

	"test Private Static Members" : function () {

		// メソッドであれば値がとれるが、
		var static_method = Gadget_Private_Static();
		assertEquals("number", typeof static_method);

		// インスタンスで返される値の中には数字はない（private member）
		var instanceOfGadget_Private_Static = new Gadget_Private_Static();
		assertEquals("object", typeof instanceOfGadget_Private_Static);
	}

});