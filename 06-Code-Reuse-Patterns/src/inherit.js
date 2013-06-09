//6.2 Classical Inheritance 継承をサポートする

function inherit (C, P) {
	C.prototype = new P();
}

