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
	},

	// 4.5 immediate function (Returned Values from Immediate Functions)
	"test immediate function" : function () {
		var immediateRtn = (function () {
			var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
				today = new Date(2013, 5, 2);
				msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
				return msg;
		}());
		assertEquals('Today is Sun, 2', immediateRtn);
	},
	// 4.5.1 Parameters of an Immediate Function (Returned Values from Immediate Functions)
	"test Parameters of an Immediate Function" : function () {
		var immediateRtn = (function (who, when) {
			return ("I met " + who + " on " + when.getDate());
		}("Joe Black", new Date(2013, 5, 2)));
		assertEquals('I met Joe Black on 2', immediateRtn);
	},
	// 4.5.2 Returned Values from Immediate Functions
	"test Returned Values from Immediate Functions" : function () {
		var o = {
			message : (function () {
				var who = "me",
					what = "call";
				return what + " " + who;
			}()),
			getMsg : function () {
				return this.message;
			}
		};
		assertEquals('call me', o.message);
		assertEquals('call me', o.getMsg());
	},
	// 4.6 Immediate Object Initialization
	"test Immediate Object Initialization" : function () {
		var immediateObjInit = 
		({
			// 設定値を定義（定数）
			maxwidth : 600,
			maxheight : 400,

			// ユーティリティ
			gimmeMax : function () {
				return this.maxwidth + "X" + this.maxheight;
			},

			// 初期化
			init: function () {
				return this.gimmeMax();
			}
		}).init();

		assertEquals('600X400', immediateObjInit);
	},
	"test Immediate Object Initialization return Object" : function () {
		var immediateObjInit = 
		({
			// 設定値を定義（定数）
			maxwidth : 600,
			maxheight : 400,

			// ユーティリティ
			gimmeMax : function () {
				return this.maxwidth + "X" + this.maxheight;
			},

			// 初期化
			init: function () {
				return this;
			}
		}).init();

		assertEquals('600X400', immediateObjInit.gimmeMax());
		assertEquals('600', immediateObjInit.maxwidth);
		assertEquals('400', immediateObjInit.maxheight);
	},
	"test Curry Function Application" : function () {
		// 関数呼び出し
		assertEquals('Hello!', sayHi());
		assertEquals('Hello, world!', sayHi("world"));

		// 関数適用
		assertEquals('Hello, world!', sayHi.call(null, "world"));
		assertEquals('Hello, world, space!', sayHi.call(null, "world", "space"));
		assertEquals('Hello, world!', sayHi.apply(null, ["world"]));
		assertEquals('Hello, world, space!', sayHi.apply(null, ["world", "space"]));

	},
	"test Curry Function Application this inside of sayHi() points to alien" : function () {
		// 関数呼び出し
		assertEquals('Hello!', alien.sayHi());
		assertEquals('Hello, humans!', alien.sayHi("humans"));

		// 関数適用
		assertEquals('Hello, humans!', sayHi.call(alien, "humans"));
		assertEquals('Hello, humans!', sayHi.apply(alien, ["humans"]));
	},
	"test Curry schonfinkelize" : function () {

		// 通常の関数処理
		assertEquals(7, add(3,4));

		// 関数をカリー化して新しい関数にする
		var newadd = schonfinkelize(add, 5);
		assertEquals(9, newadd(4));

		// もうひとつのやり方　この新しい関数を直接呼ぶ
		assertEquals(13, schonfinkelize(add, 6)(7));

		// ５つの引数の加算処理
		assertEquals(15, add_five(1, 2, 3, 4, 5));

		// 引数が複数の場合
		assertEquals(17, schonfinkelize(add_five, 1, 2, 3)(5, 6));

		// 2段階のカリー化
		var addOne = schonfinkelize(add, 1);
		assertEquals(41, addOne(10,10,10,10));
		var addSix = schonfinkelize(addOne, 2, 3);
		assertEquals(16, addSix(5,5));

	}
});


















