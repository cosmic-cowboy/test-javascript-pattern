//6.2 Classical Inheritance
// Expected Outcome When Using Classical Inheritance

TestCase("06-Code-Reuse-Patterns Classical Inheritance The Default Pattern", {
	"test Classical Inheritance Following the Prototype Chain" : function () {
		var kid = new Child_Inheritance();
		assertEquals("Adam", kid.say());

		kid.name = "Patrick";
		assertEquals("Patrick", kid.say());
		delete kid.name;
		assertEquals("Adam", kid.say());
	},
	"test Classical Inheritance Drawbacks When Using Pattern #1" : function () {
		var s_kid = new Child_Inheritance("Seth");
		assertEquals("Adam", s_kid.say());
	}
});


TestCase("06-Code-Reuse-Patterns Classical Inheritance Rent-a-Constructor", {

	"test Classical Inheritance Rent-a-Constructor" : function () {
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

	"test Classical Inheritance Rent a Constructor" : function () {

		var kid = new Child_Rent_a_Constructor("Patrick");
		assertEquals("Patrick",   kid.name);
		assertEquals("undefined", typeof kid.say);
	}
});