// 7.8.1 mediator
// ただ、表示するだけ

var scoreborad = {

	// 更新するHTML
	element : document.getElementById("result"),

	// 得点表示の更新
	update : function (score) {
		var i, msg = "";
		for(i in score){
			if(score.hasOwnProperty(i)){
				msg += "<p><strong>" + i + "</strong> : ";
				msg += score[i];
				msg += "</p>";
			}
		}
		this.element.innerHTML = msg;
	}
};