// 6.10 プロパテイのコピーによる継承 Inheritance by Copying Properties
// 親のメンバをループで順にコピーする

function extend (parent, child) {
	var i;
	child = child || {};
	for(i in parent){
		if(parent.hasOwnProperty(i)){
			child[i] = parent[i];
		}
	}
	return child;
}