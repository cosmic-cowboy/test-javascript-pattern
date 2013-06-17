// 6.11 ミックスイン
// 複数のオブジェクトからプロパテイをコピーし、すべてを合わせて新しいオブジェクトを生成する
function mix () {
	var arg, prop, child = {};
	for (arg = 0; arg < arguments.length; arg += 1){
		for(prop in arguments[arg]){
			if(arguments[arg].hasOwnProperty(prop)){
				child[prop] = arguments[arg][prop];
			}
		}
	}
	return child;
}