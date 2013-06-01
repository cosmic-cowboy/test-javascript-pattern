TestCase("04-Funcitons Test",{
	"test callback hide node" : function () {
		// ノードが見つかり次第、hideを実行
		findNodes(hide);
	},
	"test callback anonymous callback" : function () {

		findNodes(function(node){
			node.style.display = "block";
		});
	}
});