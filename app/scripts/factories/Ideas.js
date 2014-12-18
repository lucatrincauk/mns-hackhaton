'use strict';
angular.module('mnsHackhatonApp')

.factory('Ideas', ['$firebase', 'FirebaseUrl',
	function($firebase, FirebaseUrl) {

		var ref = new Firebase(FirebaseUrl).child('Ideas');

		var getAll = function() {
			var sync = $firebase(ref);
			return sync.$asArray();
		};

		return {
			getAll: getAll
		};

	}

]);