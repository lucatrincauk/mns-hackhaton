'use strict';
angular.module('mnsHackhatonApp')

.factory('Auth', ['$firebase', 'FirebaseUrl',
	function($firebase, FirebaseUrl) {

		var ref = new Firebase(FirebaseUrl).child('ideas');

		var getAll = function() {
			var sync = $firebase(ref);
			return sync.$asArray();
		};

		var getOne = function(id) {
			var refSingle = ref.child(id);
			var sync = $firebase(refSingle);

			return sync.$asObject();
		};

		return {
			getAll: getAll,
			getOne: getOne
		};

	}

]);