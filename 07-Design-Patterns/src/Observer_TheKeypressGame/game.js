// 7.9.2 Example #2: The Keypress Game
// Observer_TheKeypressGameはjsTeseDriver.confに指定しない
// Observer_TheKeypressGameの外でjsファイルを利用しない（名前がぶつかるので）


var game = {
	keys : {},

	addPlayer : function (player) {
		var key = player.key.toString().charCodeAt(0);
		this.keys[key] = player;
	},

	handleKeypress : function (e) {
		e = e || window.event;
		if(game.keys[e.which]){
			game.keys[e.which].play();
		}
	},

	handlePlay : function (player) {
		var i,
			players = this.keys,
			score = {};

		for(i in players){
			if(players.hasOwnProperty(i)){
				score[players[i].name] = players[i].points;
			}
		}
		// 定義するときにfireというメソッドはないけど良いの？
		this.fire("scorechange", score);
	}
};

//gameに発行者の機能を実装させる
makePublisher(game);
