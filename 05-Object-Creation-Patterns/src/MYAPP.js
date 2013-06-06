// グローバルオブジェクト

var MYAPP = {};

// コンストラクタ
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// 変数
MYAPP.some_var = 1;

// オブジェクトのコンテナ
MYAPP.modules = {};

// 入れ子になったオブジェクト
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a:1, b:2};
MYAPP.modules.module2 = {};


