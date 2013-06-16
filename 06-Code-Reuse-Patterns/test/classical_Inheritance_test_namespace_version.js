// 6.2 Classical Inheritance
// Expected Outcome When Using Classical Inheritance

// 6.3 クラシカルなパターンその１：デフォルトパターン Classical Pattern #1—The Default Pattern
TestCase("06-Code-Reuse-Patterns Classical Inheritance The Default Pattern", {

	// 6.3.1 Following the Prototype Chain
	"test Classical Inheritance Following the Prototype Chain namespace" : function () {

		var kid = new reusePatterns.defaultPattern.Child();
		assertEquals("Adam", kid.say());

		kid.name = "Patrick";
		assertEquals("Patrick", kid.say());
		delete kid.name;
		assertEquals("Adam", kid.say());
	},

	// 6.3.2 Drawbacks When Using Pattern #1
	"test Classical Inheritance Drawbacks When Using Pattern #1 namespace" : function () {

		var s_kid = new reusePatterns.defaultPattern.Child("Seth");
		assertEquals("Adam", s_kid.say());
	}
});

// 6.4 クラシカルなパターンその２：コンストラクタ拝借
TestCase("06-Code-Reuse-Patterns Classical Inheritance Rent a Constructor ", {

	// 6.4 コンストラクタ拝借 Rent a Constructor
	"test Classical Inheritance Rent a Constructor " : function () {
		// a parent constructor
		function Article () {
			this.tags = ["js", "css"];
		}

		var article = new Article();

		// a blog post inherits from an article object
		function BlogPost () {}
		BlogPost.prototype = article;
		var blog = new BlogPost();

		// コンストラクタ拝借パターンでArticleからの継承
		function StaticPage () {
			Article.call(this);
		}
		var page = new StaticPage();

		assertTrue(article.hasOwnProperty("tags"));
		assertFalse(blog.hasOwnProperty("tags"));
		assertTrue(page.hasOwnProperty("tags"));

		// tagsを共有している
		blog.tags.push("html");
		// 固有のtagsプロパティを持つ
		page.tags.push("php");
		assertEquals("js, css, html", article.tags.join(', '));
		assertEquals("js, css, html", blog.tags.join(', '));
		assertEquals("js, css, php", page.tags.join(', '));
	},

	// 6.4.1 The Prototype Chain プロトタイプ連鎖
	"test Classical Inheritance Rent a Constructor The Prototype Chain" : function () {

		var kid = new reusePatterns.rentAConstructor.Child("Patrick");
		assertEquals("Patrick",   kid.name);
		assertEquals("undefined", typeof kid.say);
	},

	// 6.4.2 Multiple Inheritance by Borrowing Constructors コンストラクタを拝借して多重継承
	"test Multiple Inheritance by Borrowing Constructors" : function () {
		var jane = new CatWings();
		assertEquals(4, jane.legs);
		assertEquals("meaowww", jane.say());
		assertEquals(2, jane.wings);
		assertTrue(jane.fly);
	}
});

// 6.5 クラシカルなパターンその３　プロトタイプを拝借して設定する
TestCase("06-Code-Reuse-Patterns Classical Pattern #3 Rent and Set Prototype", {

	// 6.5 プロトタイプを拝借して設定する Rent and Set Prototype
	"test Classical Inheritance Rent and Set Prototype" : function () {

		var kid = new reusePatterns.rentAndSetPrototype.Child("Patrick");
		assertEquals("Patrick",   kid.name);
		assertEquals("Patrick",   kid.say());
		delete kid.name;
		assertEquals("Adam",   kid.say());
	}

});

// 6.6 クラシカルなパターンその４　プロトタイプを共有する
TestCase("06-Code-Reuse-Patterns Classical Pattern #4 Share the Prototype", {

	// 6.6 プロトタイプを共有する Share the Prototype
	"test Classical Inheritance Share the Prototype" : function () {

		var Child = reusePatterns.shareThePrototype.Child;
		var Parent = reusePatterns.shareThePrototype.Parent;
		var kid = new Child("Patrick");
		assertEquals("undefined", typeof kid.name);
		assertEquals("function",  typeof kid.say);
		assertEquals(undefined,   kid.say());

		Parent.prototype.say = function() {
			return "Parent say revised";
		};
		assertEquals("Parent say revised",   kid.say());
	}

});



















