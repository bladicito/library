/**
 * Created by bardiles on 14.05.14.
 */
(function(){
	this.MYLIB = {};
	this.MYLIB.namespace = function(nameSpaceString){
		var parts  = nameSpaceString.split('.'),
			parent = MYLIB,
			i;

		 if (parts[0] === 'MYLIB'){
			 parts = parts.slice(1);
		 }

		for (i = 0; i < parts.length; i += 1) {
			if (typeof parent[parts[i]] == 'undefined') {
				parent[parts[i]] = {};
			}
			parent = parent[parts[i]];
		}

		return parent;
	};

	this.MYLIB.getRandomColor = function(){
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = Math.round(255 * Math.random());
		}
		return 'rgb(' + rgb.join(',') + ')';
	};

	this.MYLIB.constans = (function () {
		var constants = {},
			ownProp = Object.prototype.hasOwnProperty,
			allowed = {
				string: 1,
				number: 1,
				boolean: 1
			};
		return {
			define: function (name, value) {
				if (this.defined(name)) {
					return false;
				}
				if (!ownProp.call(allowed, typeof value)) {
					return false;
				}
				constants[name] = value;
				return true;
			},
			defined: function (name) {
				return ownProp.call(constants, name);
			},
			get: function (name) {
				if (this.defined(name)) {
					return constants[name];
				}
				return null;
			}
		};
	}());

})();