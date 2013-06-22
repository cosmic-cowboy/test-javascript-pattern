// 7.9 Observer
// あるオブジェクト（ObjectA）が別のオブジェクト（ObjectB）のメソッドを呼び出す。
// ただし、ObjectAがObjectBのメソッドを直接呼び出すと密結合になる。
// そこで、ObjectAはObjectBの特別な機能を購読し、ObjectBから通知を受ける
// ObjectAは購読者（観察者）、ObjectBは発行者
// 7.9.1 Example #1: Magazine Subscriptions
TestCase("07-Design-Patterns Observer", {
	"test Example #1: Magazine Subscriptions" : function () {

		// 購読者
		// 通知を受け取る
		// joeはpaperをハードコーディングしていない。paperもしかり。
		var joe = {
			drinkCoffee : function (paper) {
				return 'Just read ' + paper;
			},
			sundayPreNap : function (monthly) {
				return 'About to fall asleep reading this ' + monthly;
			}
		};
		// 購読する
		// 購読の動作において、購読者はメソッドをpaperに提供する
		paper.subscribe(joe.drinkCoffee);
		paper.subscribe(joe.sundayPreNap, 'monthly');

		// イベントが発生すると、購読者に通知
		// 通知は購読者のオブジェクトのメソッド呼び出しを意味する
		paper.daily();
		assertEquals('Just read big news today', paper.getTestResult());
		paper.monthly();
		paper.monthly();
		assertEquals('About to fall asleep reading this interesting analysis', paper.getTestResult());

		// 購読をやめる
		paper.unsubscribe(joe.drinkCoffee);
		paper.daily();
		assertEquals('', paper.getTestResult());


		// joeを発行者にする
		makePublisher(joe);
		joe.tweet = function (msg) {
			this.publish(msg);
		};

		// paperが購読する
		paper.readTweets = function (tweet) {
			return "call big meeting! Someone " + tweet;
		};
		joe.subscribe(paper.readTweets);

		joe.tweet("hated the paper today");
		assertEquals('call big meeting! Someone hated the paper today', joe.getTestResult());


	}
});