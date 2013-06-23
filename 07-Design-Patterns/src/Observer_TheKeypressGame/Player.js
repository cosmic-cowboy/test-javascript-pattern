// 7.9.2 Example #2: The Keypress Game
// Observer_TheKeypressGameはjsTeseDriver.confに指定しない
// Observer_TheKeypressGameの外でjsファイルを利用しない（名前がぶつかるので）


function Player (name, key) {
	this.points = 0;
	this.name = name;
	this.key = key;
	// 新しいプレイヤーが作成されると"new player"イベントが発生する
	this.fire('newplayer', this);
}

Player.prototype.play = function() {
	this.points += 1;
	// playメソッドが実行されると"play"イベントが発生する
	// 定義するときにfireというメソッドはないけど良いの？
	this.fire('play', this);
};

// Playerに発行者の機能を実装させる
// どのPlayerからもイベントを発生させられるようprototype
makePublisher(Player.prototype);
