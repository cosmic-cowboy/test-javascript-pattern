// 6.4 Classical Pattern #2 Rent a Constructor The Prototype Chain

function Child_Rent_a_Constructor(name){
	Parent.apply(this, arguments);
}
