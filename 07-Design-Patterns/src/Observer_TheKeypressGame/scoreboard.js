// 7.9.2 Example #2: The Keypress Game
// ただ、表示するだけ

var scoreboard = {

	// 更新するHTML
	element : document.getElementById("results"),

	// 得点表示の更新
	update : function (score) {
		var i, msg = "";
		for(i in score){
			if(score.hasOwnProperty(i)){
				msg += "<p><strong>" + i + "<\/strong> : ";
				msg += score[i];
				msg += "<\/p>";
			}
		}
		this.element.innerHTML = msg;
	}
};