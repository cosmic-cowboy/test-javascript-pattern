var mediator = {
	// プレイヤ全員
	players : {},

	// initiation
	setup : function () {
		var players = this.players;
		players.home = new Player("Home");
		players.guest = new Player("Guest");
	},

	// 
	played : function () {
		var players = this.players,
			score = {
				Home : players.home.points,
				Guest: players.guest.points
			};
		scoreborad.update(score);
	},

	//
	keypress : function (e) {
		e = e || window.event;
		// キー : 1
		if(e.which === 49){
			mediator.players.home.play();
			return ;
		}
		// キー : 0
		if(e.which === 48){
			mediator.players.guest.play();
			return ;
		}
	}
};