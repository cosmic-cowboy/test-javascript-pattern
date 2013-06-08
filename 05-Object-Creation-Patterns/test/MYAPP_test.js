TestCase("05-Object-Creation-Patterns MYAPP", {
	// "test Namespace Pattern" : function () {
	// 	assertEquals("1", MYAPP.modules.module1.data.a);
	// 	assertEquals("2", MYAPP.modules.module1.data["b"]);
	// },

	// 5.1.1 汎用の名前空間関数 General Purpose Namespace Function
	"test Namespace Pattern General Purpose Namespace Function" : function () {
		// 戻り値をローカル変数に代入
		var module2 = MYAPP.namespace('MYAPP.modules.module2');
		assertTrue(module2 === MYAPP.modules.module2);

		// 先頭のMYAPPを省略
		MYAPP.namespace('modules.module51');
		assertFalse('undefined' === MYAPP.modules.module51);

		// 長い名前空間
		MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');
		assertFalse('undefined' === MYAPP.once.upon.a.time.there.was.this.long.nested.property);
	},
	// 5.3 オブジェクトメンバはすべてパブリック 
	"test All object members are public" : function () {
		// オブジェクトメンバはすべてパブリック
		var myobj = {
			myprop : 1,
			getProp : function () {
				return this.myprop;
			}
		};
		assertEquals(1, myobj.myprop);
		assertEquals(1, myobj.getProp());

		// コンストラクタ関数を使ってオブジェクトを作成した場合も
		// thisを使っている点に注目
		function Gadget () {
			this.name = 'iPod';
			this.stretch = function () {
				return 'iPad';
			};
		}
		var toy = new Gadget();
		assertEquals('iPod', toy.name);
		assertEquals('iPad', toy.stretch());
	},
	// 5.3.1 プライベートメンバ Private Members
	"test Private Properties and Methods Private Members" : function () {

		function Gadget () {
			// プライベートメンバ
			var name = 'iPod';
			// パブリックメンバ
			this.getName = function () {
				return name;
			};
		}

		var toy = new Gadget();
		assertEquals(undefined, toy.name);
		assertEquals('iPod', toy.getName());
	},
	// 5.3.3 プライバシーの侵犯 Privacy Failures
	"test Private Properties and Methods Privacy Failures" : function(){

		function Gadget () {
		// プライベートメンバ
			var specs = {
				screen_width : 320,
				screen_height : 480,
				color : "white"
			};

			// パブリック関数
			this.getSpecs = function () {
				return specs;
			};
		}

		var toy = new Gadget();
		var specs = toy.getSpecs();
		assertEquals('320', specs.screen_width);
		assertEquals('480', specs.screen_height);
		assertEquals('white', specs.color);

		specs.color = "black";
		specs.price = "free";

		// 戻り値がオブジェクトや配列である場合、参照渡しになるため、プライベートメンバが外部から変更できてしまう。

		var specs2 = toy.getSpecs();
		assertEquals('320', specs2.screen_width);
		assertEquals('480', specs2.screen_height);
		assertEquals('black', specs2.color);
		assertEquals('free', specs2.price);

	},

	// 5.3.4 オブジェクトリテラルとプライバシー
	"test Private Properties and Methods Object Literals and Privacy" : function () {

		var myobj;

		// 無名即時関数

		(function  () {

			// プライベートメンバ
			var name = "my, oh my";

			// パブリックな部分の実装
			// var がない点に注意

			myobj = {

				getName : function () {
					return name;
				}
			};
		}());

		assertEquals("my, oh my", myobj.getName());

		// モジュールパターン module pattern
		var myobj_module_pattern = (function  () {

			// プライベートメンバ
			var name = "my, oh my";

			// パブリックな部分の実装だけオブジェクトとして返す
			return {
				getName : function () {
					return name;
				}
			};
		}());

		assertEquals("my, oh my", myobj_module_pattern.getName());
	},

	// 5.3.5 プロトタイプとプライバシー Prototypes and Privacy
	"test Private Properties and Methods Prototypes and Privacy" : function () {

		function Gadget () {
			// プライベートメンバ
			var name = "iPod";
			// パプリック関数
			this.getName = function () {
				return name;
			};
		}
		// 無名即時関数から返却されるオブジェクトを代入
		Gadget.prototype = (function() {

			// プライベートメンバ
			var browser = "Mobile Webkit";
			// prototypeにあるパブリックメンバ
			return {
				getBrowser : function () {
					return browser;
				}
			};
		}());
		var toy = new Gadget();
		assertEquals("iPod", toy.getName());
		assertEquals("Mobile Webkit", toy.getBrowser());


	},

	// 5.3.6 プライベート関数をパブリックメソッドとして開示する モジュール開示パターン revealing module pattern
	"test Private Properties and Methods revealing module pattern" : function () {

		var myarray;

		(function () {
			var astr = "[object Array]",
				toString = Object.prototype.toString;

			function isArray (a) {
				return toString.call(a) === astr;
			}

			function indexOf (haystack, needle) {
				var i = 0,
					max = haystack.length;
				for (; i < max; i += 1) {
					if(haystack[i] === needle){
						return i;
					}
				}
				return -1;
			}

			myarray = {
				isArray : isArray,
				indexOf : indexOf,
				inArray : indexOf
			};
		}());

		var test_array = ["a", "b", "z"];
		assertEquals(2, myarray.indexOf(test_array, "z"));
		assertEquals(2, myarray.inArray(test_array, "z"));

		myarray.indexOf = null;
		assertEquals(2, myarray.inArray(test_array, "z"));

	}















});