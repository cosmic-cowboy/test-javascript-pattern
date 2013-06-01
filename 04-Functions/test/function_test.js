TestCase("04-Funcitons Test",{
	"test callback hide node" : function () {
		// ノードが見つかり次第、hideを実行
		findNodes(hide, this);
	},
	"test callback anonymous callback" : function () {

		findNodes(function(node){
			node.style.display = "block";
		}, this);
	},
	"test callback myapp.paint" : function () {
		// myappオブジェクトのpaintメソッドをcallbackに利用
		findNodes("paint", myapp);
	},

	"test closure" : function () {
		var next = setup();
		assertEquals(1, next());
		assertEquals(2, next());
		assertEquals(3, next());
		assertEquals(4, next());
	},

	// "test Self-Defining Functions" :function () {
	// 	assertEquals("Boo!", scareMe());
	// 	assertEquals("Double Boo!", scareMe());
	// },

	"test Self-Defining Functions, lost when it redefines itself" :function () {
		// A new property is added.
		scareMe.property = "properly";
		// The function object is assigned to a new variable.
		var prank = scareMe;
		// The function is also used as a method.
		var spooky = {
			boo : scareMe
		};

		assertEquals("Boo!", prank());
		assertEquals("Boo!", prank());
		assertEquals("properly", prank.property);
		assertEquals("Boo!", spooky.boo());
		assertEquals("Boo!", spooky.boo());
		assertEquals("properly", spooky.boo.property);

		// 自己定義関数
		assertEquals("Double Boo!", scareMe());
		assertEquals("Double Boo!", scareMe());
		assertEquals(undefined, scareMe.property);
	}

});