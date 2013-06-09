var Person = function (name) {
			this.name = name;
		}.
			method("getName", function () {
				return this.name;
			}).
			method("setName", function (name) {
				this.name = name;
				return this;
			});