'use strict';
angular.module('mnsHackhatonApp')

.factory('Comments', ['$firebase', 'FirebaseUrl',
	function($firebase, FirebaseUrl) {


		var getOne = function(id) {
			var ref = new Firebase(FirebaseUrl).child('comments').orderByChild('ideaId').equalTo(id);
			var sync = $firebase(ref);
			return sync.$asArray();
		};



		return {
			getOne: getOne
		};

	}

]);