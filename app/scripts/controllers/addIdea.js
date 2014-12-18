'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('AddIdea', ['$scope', 'ideas', '$firebase', 'FirebaseUrl', function($scope, ideas, $firebase, FirebaseUrl) {

		$scope.idea = {};
		$scope.ideas = ideas;

		$scope.addIdea = function() {

			$scope.ideas.$add($scope.idea).then(function() {
				console.log('Added successfully');
			}, function(error) {
				console.log('Error:', error);
			});


		};

	}]);