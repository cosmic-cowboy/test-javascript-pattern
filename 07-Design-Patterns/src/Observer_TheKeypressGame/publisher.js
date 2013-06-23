// 7.9.2 Example #2: The Keypress Game
// Observer_TheKeypressGameはjsTeseDriver.confに指定しない
// Observer_TheKeypressGameの外でjsファイルを利用しない（名前がぶつかるので）

var publisher = {
	subscribers : {
		any : []
	},

	/** 
	 * 購読者を配列に追加 購読タイプと動作を設定
	 * @param {String} type 購読タイプ
	 * @param {function} fn 発行時の動作
	 * @param {Object} context 動作のターゲット
	 */
	on : function (type, fn, context) {
		type = type || 'any';
		fn = (typeof fn === "function") ? fn : context[fn];

		if(typeof this.subscribers[type] == "undefined"){
			this.subscribers[type] = [];
		}
		this.subscribers[type].push({fn: fn, context: context || this});
	},

	/** 
	 * 購読者を配列から削除 購読タイプと動作を削除
	 * paramはonと同様
	 */
	remove : function (type, fn, context) {
		this.visitSubscribers('unsubscribe', type, fn, context);
	},

	/** 
	 * 購読者をループで処理し、購読時に提供したメソッドを呼び出す
	 * paramはonと同様
	 */
	fire : function (type, publication) {
		this.visitSubscribers('publish', type, publication);
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
	 * @param {Object} context 動作のターゲット
	 */
	visitSubscribers : function (action, type, arg, context) {
		var pubtype = type || 'any',
			subscribers = this.subscribers[pubtype],
			i,
			max = subscribers ? subscribers.length : 0;

		for(i = 0; i < max; i += 1){
			if(action === 'publish'){
				subscribers[i].fn.call(subscribers[i].context, arg);
			} else {
				if(subscribers[i].fn === arg && subscribers[i].context === context){
					subscribers.splice(i,1);
				}
			}
		}
	}

};

function makePublisher(o) {
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
            o[i] = publisher[i];
        }
    }
    o.subscribers = {any: []};
}
