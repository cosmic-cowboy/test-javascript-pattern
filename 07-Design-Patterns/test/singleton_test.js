// 7.1 シングルトン Singleton
TestCase("07-Design-Patterns Singleton", {
	"test Singleton" : function () {
		var obj = {
			myprop : 'my value'
		};
		var obj2 = {
			myprop : 'my value'
		};
		assertFalse(obj === obj2);
		assertFalse(obj == obj2);
	},
	// 7.1.2 静的プロパテイにインスタンスをキャッシュ Instance in a Static Property
	"test a singleton implementation using new syntax Instance in a Static Property" : function () {

		function Universe(){
			// 既存のインスタンスがあるかの確認
			if(typeof Universe.instance === "object"){
				return Universe.instance;
			}

			// 通常の処理
			this.start_time = 0;
			this.bang = "Big";

			// キャッシュする
			Universe.instance = this;

			// 暗黙のreturn
			return this;
		}
		var uni1 = new Universe();
		var uni2 = new Universe();
		assertTrue(uni1 === uni2);

		// 但し、Universe.instanceがパブリックなので、変更されてしまう
		Universe.instance = undefined;
		var uni3 = new Universe();
		assertFalse(uni1 === uni3);

	},
	// 7.1.3 クロージャにインスタンスをキャッシュ Instance in a Closure
	"test a singleton implementation using new syntax Instance in a Closure, the self-defining function pattern" : function () {
		function Universe () {

			// キャッシュする
			var instance = this;
			// 通常の処理
			this.start_time = 0;
			this.bang = "Big";

			// コンストラクタを書き換える
			// 自己定義関数
			Universe = function () {
				return instance;
			};
		}

		// プロトタイプを追加
		Universe.prototype.nothing = true;
		var uni1 = new Universe();
		// オブジェクト作成後にプロトタイプを追加
		Universe.prototype.everything = true;
		var uni2 = new Universe();

		assertTrue(uni1 === uni2);
		assertTrue(uni1.nothing);
		assertTrue(uni2.nothing);
		assertEquals("undefined", typeof uni1.everything);
		assertEquals("undefined", typeof uni2.everything);

		// コンストラクタについて
		assertEquals("Universe", uni1.constructor.name);
		assertFalse(Universe === uni1.constructor);
	},
	// 7.1.3 クロージャにインスタンスをキャッシュ Instance in a Closure
	// プロトタイプとコンストラクタを再設定
	"test a singleton implementation using new syntax Instance in a Closure, getting the prototype and the constructor pointer working as expected" : function () {
		function Universe () {
			// キャッシュする
			var instance;
			// コンストラクタの書き換え
			Universe = function () {
				return instance;
			};
			// プロトタイププロパテイを引き継ぐ
			Universe.prototype = this;
			// インスタンス
			instance = new Universe();
			// コンストラクタのポインタを再設定
			instance.constructor = Universe;
			// 機能のすべて
			instance.start_time = 0;
			instance.bang = "Big";
			return instance;
		}

		// プロトタイプを追加
		Universe.prototype.nothing = true;
		var uni1 = new Universe();
		// オブジェクト作成後にプロトタイプを追加
		Universe.prototype.everything = true;
		var uni2 = new Universe();

		assertTrue(uni1 === uni2);
		assertTrue(uni1.nothing);
		assertTrue(uni2.nothing);
		assertTrue(uni1.everything);
		assertTrue(uni2.everything);

		// コンストラクタについて
		// assertTrue("Universe" === uni1.constructor.name);
		assertTrue(Universe === uni1.constructor);
	},
	// 7.1.3 クロージャにインスタンスをキャッシュ Instance in a Closure
	// プロトタイプとコンストラクタを再設定 即時関数で包む
	"test a singleton implementation using new syntax Instance in a Closure, immediate function" : function () {
		var Universe;
		(function () {
			// キャッシュする
			var instance;
			// コンストラクタの書き換え
			Universe = function () {
				if(instance){
					return instance;
				}

				instance = this;
				// 機能のすべて
				this.start_time = 0;
				this.bang = "Big";
			};
		}());

		// プロトタイプを追加
		Universe.prototype.nothing = true;
		var uni1 = new Universe();
		// オブジェクト作成後にプロトタイプを追加
		Universe.prototype.everything = true;
		var uni2 = new Universe();

		assertTrue(uni1 === uni2);
		assertTrue(uni1.nothing);
		assertTrue(uni2.nothing);
		assertTrue(uni1.everything);
		assertTrue(uni2.everything);

		// コンストラクタについて
		// assertTrue("Universe" === uni1.constructor.name);
		assertTrue(Universe === uni1.constructor);
	}
});
