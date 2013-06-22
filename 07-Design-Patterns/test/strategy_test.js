// 7.5 ストラテジー Strategy
// 7.5.1 データ検証の例 Data Validation Example
// 実行時にアルゴリズムを選択
// 同じインターフェイスを利用
// コンテキストによって実行されるアルゴリズムが変わる

TestCase("07-Design-Patterns Strategy", {

	"test Strategy validate" : function () {
		var data = {
			first_name : "Super",
			last_name : "",
			weight : "60",
			height : "170cm",
			age : "unknown",
			username : "o_O"
		};

		// 何を妥当とするか、そのルールをバリデータに設定（正常系）
		validator.config = {
			first_name : "isNonEmpty",
			weight : "isNumber",
			height : "isAlphaNum"
		};

		// dataの内容が妥当か検証
		validator.validate(data);
		// 検証結果、エラーがあるか
		assertFalse(validator.hasErrors());

		// 何を妥当とするか、そのルールをバリデータに設定
		validator.config = {
			last_name : "isNonEmpty",
			age : "isNumber",
			username : "isAlphaNum"
		};


		validator.validate(data);
		assertTrue(validator.hasErrors());
		// for(var i = 0; i < validator.messages.length; i += 1){
		// 	console.log(validator.messages[i]);
		// }
		assertEquals(validator.messages[0], "Invalid value for * last_name * , the value cannot be empty");
		assertEquals(validator.messages[1], "Invalid value for * age * , the value can only be a valid number, e.g. 1, 3.14 or 2010");
		assertEquals(validator.messages[2], "Invalid value for * username * , the value can only contain characters and numbers, no special symbols");


	}
});