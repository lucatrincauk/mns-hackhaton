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
		$scope.category = 'shape';

		$scope.addIdea = function() {
			console.log('adding');

			// Synchronizing the items on our $scope

			console.log($scope.ideas)
			$scope.ideas.$add($scope.idea);


		};

		$scope.setCategory = function(cat) {
			$scope.category = cat;
		}

	}]);