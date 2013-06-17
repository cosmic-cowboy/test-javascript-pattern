// 7.4 デコレータ Decorator
// 実行時に動的にオブジェクトを追加
// 7.4.1 使い方 Usage
TestCase("07-Design-Patterns Decorator", {
	"test Decorator" : function () {
		var sale = new Sale(100);
		assertEquals(100, sale.getPrice());
		assertEquals(100, sale.price);

		// 連邦税を追加
		sale = sale.decorate("fedtax");
		assertEquals(105, sale.getPrice());
		assertEquals(100, sale.price);

		// 地方税を追加
		sale = sale.decorate("quebec");
		assertEquals(112.875, sale.getPrice());
		assertEquals(100, sale.price);

		// 金額を書式化 $112.88
		sale = sale.decorate("money");
		assertEquals("$112.88", sale.getPrice());
		assertEquals(100, sale.price);

		var sale_cdn = new Sale(100);

		// 連邦税を追加
		sale_cdn = sale_cdn.decorate("fedtax");
		assertEquals(105, sale_cdn.getPrice());
		assertEquals(100, sale_cdn.price);

		// CDNで金額を書式化 CDN$105.00
		sale_cdn = sale_cdn.decorate("cdn");
		assertEquals("CDN$105.00", sale_cdn.getPrice());
		assertEquals(100, sale_cdn.price);
	},
	"test Decorator Implementation Using a List" : function () {
		var sale = new Sale_UsingAList(100);
		assertEquals(100, sale.getPrice());
		assertEquals(100, sale.price);

		// 連邦税を追加
		sale.decorate("fedtax");
		assertEquals(105, sale.getPrice());
		assertEquals(100, sale.price);

		// 地方税を追加
		sale.decorate("quebec");
		assertEquals(112.875, sale.getPrice());
		assertEquals(100, sale.price);

		// 金額を書式化 $112.88
		sale.decorate("money");
		assertEquals("$112.88", sale.getPrice());
		assertEquals(100, sale.price);

		var sale_cdn = new Sale_UsingAList(100);

		// 連邦税を追加
		sale_cdn.decorate("fedtax");
		assertEquals(105, sale_cdn.getPrice());
		assertEquals(100, sale_cdn.price);

		// CDNで金額を書式化 CDN$105.00
		sale_cdn.decorate("cdn");
		assertEquals("CDN$105.00", sale_cdn.getPrice());
		assertEquals(100, sale_cdn.price);
	}
});