//6.2 Classical Inheritance 継承をサポートする

function inherit (C, P) {

	// prototypeプロパティは関数ではなく、オブジェクトを指す
	// コンストラクタ自体ではなく、親コンストラクタを生成したインスタンスを指すようにする
	// new を使用し、インスタンスを生成すると、Pのインスタンスの機能がプロトタイプを介して、利用できるようになる

	C.prototype = new P();
}

