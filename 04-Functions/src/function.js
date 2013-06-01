// 4.2.1 コールバックの例

// DOMツリーを巡回し、ページ要素を配列で返す

var findNodes = function  () {

	var i = 1000000,
		nodes = [],
		found;
	while(i){
		i -= 1;

		nodes.push(found);
	}
	return nodes;
};


var hide = function(nodes){
	var i = 0,
		max = nodes.length;
	for(; i < max; i += 1) {
		nodes[i].style.display = "node";
	}
};

// findNodesでループし、hideでループする
hide(findNodes());
