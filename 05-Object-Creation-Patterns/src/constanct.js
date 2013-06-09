// 5.7 オブジェクト定数　Object Constants

var constant = ( function() {
	// Private Static Member
	var constants = {},
		ownProp = Object.prototype.hasOwnProperty,
		allowed = {
			string : 1,
			number : 1,
			boolean : 1
		},
		prefix = (Math.random() + "_").slice(2);

	// constantのオブジェクト
	return {
		set : function (name, value) {
			if(this.isDefined(name)){
				return false;
			}
			if(!ownProp.call(allowed, typeof value)){
				return false;
			}
			constants[prefix + name] = value;
			return true;
		},
		isDefined : function (name) {
			return ownProp.call(constants, prefix + name);
		},
		get : function (name) {
			if(this.isDefined(name)){
				return constants[prefix + name];
			}
			return null;
		}
	};
}());
// execute immediately