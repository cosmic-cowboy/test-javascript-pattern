// 7.5 ストラテジー Strategy
// 7.5.1 データ検証の例 Data Validation Example
// 常に同じ結果を返す（妥当でないデータとエラーメッセージ）
// 作業をさばくのに最適なストラテジーを選択し、適切なアルゴリズムにデータの検索を委ねる

var validator = {

	// 利用できるすべての検査
	types : {},
	// 現在の検証セッションでのエラーメッセージ
	messages : [],
	// 現在の検証の設定
	// 名前：検証の種類
	config : {},
	// インターフェイスメソッド
	// dataはキー　=> 値の組
	validate : function (data) {
		var i, msg, type, checker, reuslt_ok;

		// メッセージをすべてリセット
		this.messages = [];

		// 検査対象
		for(i in data){

			if(data.hasOwnProperty(i)){
				// 検査対象に割り当てられた検査メソッド名
				type = this.config[i];
				// 検査対象に割り当てられた検査処理
				checker = this.types[type];

				// 検査メソッドが設定されていなければ検査しない
				if(!type){
					continue;
				}
				// 不正なメソッド名が指定されていたことになる
				if(!checker){
					throw {
						name : "ValidationError",
						message : "No handler to validate type " + type
					};
				}
			}
			// 検査処理の実行
			reuslt_ok = checker.validate(data[i]);
			// 検査の結果をまとめる
			if(!reuslt_ok){
				msg = "Invalid value for * " + i + " * , " + checker.instructions;
				this.messages.push(msg);
			}
		}
		// 検査の結果、エラーがあるか判定
		return this.hasErrors();
	},

	// ヘルパー
	hasErrors : function () {
		return this.messages.length !== 0;
	}
};
// 空の値でないか検査
validator.types.isNonEmpty = {
	validate : function (value) {
		return value !== "";
	},
	instructions:"the value cannot be empty"
};

// 値が数字か検査
validator.types.isNumber = {
	validate : function (value) {
		return !isNaN(value);
	},
	instructions:"the value can only be a valid number, e.g. 1, 3.14 or 2010"
};

// 値が英数字か検査
validator.types.isAlphaNum = {
	validate : function (value) {
		return !/[^a-z0-9]/i.test(value);
	},
	instructions: "the value can only contain characters and numbers, no special symbols"
};







