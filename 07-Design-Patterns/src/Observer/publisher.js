// 7.9.1 Example #1: Magazine Subscriptions


var publisher = {

	/** 
	 * すべての購読者を格納する 
	 * @type {Array} 
	*/
	subscribers : {
		any : []
	},

	// テスト結果を格納
	testResult : "",
	// テスト結果取得メソッド
	getTestResult : function () {
		return testResult;
	},

	/** 
	 * 購読者を配列に追加 購読タイプと動作を設定
	 * @param {function} fn 発行時の動作
	 * @param {String} type 購読タイプ
	 */
	subscribe : function (fn, type) {
		type = type || 'any';
		if (typeof this.subscribers[type] === "undefined"){
			this.subscribers[type] = [];
		}
		this.subscribers[type].push(fn);
	},

	/** 
	 * 購読者を配列から削除 購読タイプと動作を削除
	 * @param {function} fn 発行時の動作
	 * @param {String} type 購読タイプ
	 */
	unsubscribe : function (fn, type) {
		this.visitSubscribers('unsubscribe', fn, type);
	},

	/** 
	 * 購読者をループで処理し、購読時に提供したメソッドを呼び出す
	 * @param {String} publication　発行時の引数
	 * @param {String} type 購読タイプ
	 */
	publish : function (publication, type) {
		this.visitSubscribers('publish', publication, type);
	},

	/** 
	 * ヘルパーメソッド 
	 * 購読者の購読タイプと動作の管理（発行・削除）
	 * 発行（publish）：引数に指定された購読者を取り出し、
	 * 削除（unsubscribe）：引数に指定された購読者を削除
	 * 購読者の購読タイプと動作の管理（発行・削除）	 
	 * @param {String} action 発行・削除
	 * @param {Object} arg 発行時の動作または引数
	 * @param {String} type 購読タイプ
	 */
	visitSubscribers : function (action, arg, type) {
		var pubtype = type || 'any',
				subscribers = this.subscribers[pubtype],
			i,
			max = subscribers.length;

		// テスト確認用
		testResult = "";

		for (i = 0; i < max; i+=1) {
			if(action === 'publish'){
				// テスト確認用
				testResult = subscribers[i](arg);
			} else {
				// 発行時の動作
				if(subscribers[i] === arg){
					subscribers.splice(i, 1);
				}
			}
		}
	}
};


/** 
 * 発行者生成メソッド
 * 汎用の発行者のメソッドをコピーする
 * @param {Object} o 発行者
 */
function makePublisher (o) {
	var i;
	for(i in publisher){
		if (publisher.hasOwnProperty(i) && typeof publisher[i] == "function"){
			o[i] = publisher[i];
		}
	}
	o.subscribers = {any : []};
}

// 発行者
// 日刊、月刊の発行をする
var paper = {
	daily : function () {
		this.publish("big news today");
	},
	monthly : function () {
		this.publish("interesting analysis", "monthly");
	}
};
makePublisher(paper);