TestCase("04-Funcitons Test",{
	"test callback hide node" : function () {
		// ノードが見つかり次第、hideを実行
		findNodes(hide, this);
	},
	"test callback anonymous callback" : function () {

		findNodes(function(node){
			node.style.display = "block";
		}, this);
	},
	"test callback myapp.paint" : function () {
		// myappオブジェクトのpaintメソッドをcallbackに利用
		findNodes(myapp.paint, myapp);
	}
});