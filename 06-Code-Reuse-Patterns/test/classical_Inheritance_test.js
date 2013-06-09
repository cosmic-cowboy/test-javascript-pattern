//6.2 Classical Inheritance
// Expected Outcome When Using Classical Inheritance
// 6.3 クラシカルなパターンその１：デフォルトパターン
TestCase("06-Code-Reuse-Patterns Classical Pattern #1 The Default Pattern", {

	"test Classical Inheritance Following the Prototype Chain" : function () {

		function inherit(C, P) {

			// prototypeプロパティは関数ではなく、オブジェクトを指す
			// コンストラクタ自体ではなく、親コンストラクタを生成したインスタンスを指すようにする
			// new を使用し、インスタンスを生成すると、Pのインスタンスの機能がプロトタイプを介して、利用できるようになる
			// thisに追加したインスタンス固有のプロパティとプロトタイプのプロパティが継承される

			C.prototype = new P();
		}

		// the parent constructor
		function Parent(name) {
			this.name = name || "Adam";
		}

		// adding functionality to the prototype
		Parent.prototype.say = function() {
			return this.name;
		};

		//6.2 Classical Inheritance Child
		function Child(name) {}

		// inheritance magic happens here
		inherit(Child, Parent);

		var kid = new Child();
		assertEquals("Adam", kid.say());

		kid.name = "Patrick";
		assertEquals("Patrick", kid.say());
		delete kid.name;
		assertEquals("Adam", kid.say());
	},
	"test Classical Inheritance Drawbacks When Using Pattern #1" : function () {

		function inherit(C, P) {

			C.prototype = new P();
		}

		function Parent(name) {
			this.name = name || "Adam";
		}
		Parent.prototype.say = function() {
			return this.name;
		};

		function Child(name) {}

		inherit(Child, Parent);

		var s_kid = new Child("Seth");
		assertEquals("Adam", s_kid.say());
	}
});

// 6.4 クラシカルなパターンその２：コンストラクタ拝借
TestCase("06-Code-Reuse-Patterns Classical Pattern #2 Rent a Constructor", {

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

		// 6.4 Classical Pattern #2 Rent a Constructor The Prototype Chain
		function Parent (name) {
			this.name = name || "Adam";
		}
		Parent.prototype.say = function() {
			return this.name;
		};
		function Child(name){
			Parent.apply(this, arguments);
		}

		var kid = new Child("Patrick");
		assertEquals("Patrick",   kid.name);
		assertEquals("undefined", typeof kid.say);
	}
});


// 6.5 クラシカルなパターンその３　クラシカルなパターンその３　プロトタイプを拝借して設定する
TestCase("06-Code-Reuse-Patterns Classical Pattern #3 Rent and Set Prototype", {

	"test Classical Inheritance Rent and Set Prototype" : function () {
		function inherit(C, P) {
			C.prototype = new P();
		}

		function Parent(name) {
			this.name = name || "Adam";
		}
		Parent.prototype.say = function() {
			return this.name;
		};

		function Child(name) {
			Parent.apply(this,arguments);
		}
		Child.prototype = new Parent();

		var kid = new Child("Patrick");
		assertEquals("Patrick",   kid.name);
		assertEquals("Patrick",   kid.say());
		delete kid.name;
		assertEquals("Adam",   kid.say());

	}
});







































