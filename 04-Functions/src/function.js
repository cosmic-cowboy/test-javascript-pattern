// 4.2.1 コールバックの例

// DOMツリーを巡回し、ページ要素を配列で返す
// callbackを受け付ける

var findNodes = function (callback) {

	var i = 1000000,
		nodes = [],
		found;

	// callbackできるか、確認
	if(typeof callback !== "function"){
		callback = false;
	}

	while(i){
		i -= 1;

		// dummy data
		found = {
					style : {
						display : "inline",
						color : "white"
					}
				};

		// callback
		if(callback){
			callback(found);
		}

		nodes.push(found);
	}
	return nodes;
};


var hide = function(node){

	node.style.display = "none";

};
