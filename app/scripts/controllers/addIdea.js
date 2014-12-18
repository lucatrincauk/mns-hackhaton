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

		$scope.shape = '';
		$scope.shapes = [
			{ id: 0, name: 'A-Line' },
			{ id: 1, name: 'Figure hugging' },
			{ id: 2, name: 'Fit & Flare' },
			{ id: 3, name: 'Pencil' }
		];

		$scope.addIdea = function() {

			$scope.ideas.$add($scope.idea).then(function() {
				console.log('Added successfully');
			}, function(error) {
				console.log('Error:', error);
			});


		};

		$scope.setCategory = function(cat) {
			$scope.category = cat;
		}

		$scope.setShape = function(shape) {
			$scope.shape = shape;
		}

	}]);