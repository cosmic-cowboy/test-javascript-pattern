// 5.9 method() Method
if(Function.prototype.method !== "function"){
	Function.prototype.method = function(name, implementation) {
		this.prototype[name] = implementation;
		return this;
	};
}