'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('AddIdea', ['$scope', 'ideas', '$firebase', '$state', 'shape', function($scope, ideas, $firebase, $state, shape) {

		$scope.factoryShape = shape;

		$scope.idea = {};
		$scope.ideas = ideas;

		$scope.category = 'shape';
		$scope.shape = '';
		$scope.colour = '';
		$scope.pattern = '';
		$scope.shape = '';

		$scope.colorpicker = {
			colour: ''
		};

		$scope.addIdea = function() {
			$scope.idea.vote = 0;
			$scope.idea.shape = $scope.shape.id;
			$scope.idea.colour = $scope.colour;
			$scope.idea.pattern = $scope.pattern;
			$scope.ideas.$add($scope.idea).then(function() {
				console.log('Added successfully');
				$state.go('app.index');
			}, function(error) {
				console.log('Error:', error);
			});
		};

		$scope.setCategory = function(cat) {
			if ($scope.shape === '') {
				return;
			}
			$scope.category = cat;
		};

		/**
		 * SHAPE functions
		 */
		$scope.setShape = function(shape) {
			$scope.shape = shape;
			$scope.factoryShape.draw(1, $scope.shape.id, $scope.colorpicker.colour, $scope.pattern);
		};

		/**
		 * COLOUR functions
		 */
		$scope.setColour = function() {
			$scope.colour = $scope.colorpicker.colour;
			$scope.pattern = '';
			$scope.factoryShape.draw(1, $scope.colorpicker.colour, $scope.pattern);
		};

		/**
		 * PATTERN functions
		 */
		$scope.setPattern = function(pattern) {
			$scope.pattern = pattern;
			$scope.colour = '';
			$scope.factoryShape.draw(1, $scope.colorpicker.colour, $scope.pattern);
		};


		//this data will come from server later
		$scope.shapes = [{
			id: 0,
			name: 'A-Line'
		}, {
			id: 1,
			name: 'Empire Line'
		}, {
			id: 2,
			name: 'Fit & Flare'
		}, {
			id: 3,
			name: 'Pencil'
		}];

		$scope.patterns = [
			"http://asset2.marksandspencer.com/is/image/mands/RC_01_T62_3766K_EE_X_EC_88?$PDP_SWL_STD$",
			"http://asset1.marksandspencer.com/is/image/mands/SD_01_T91_1779_T4_X_EC_88?$PDP_SWL_STD$",
			"http://asset2.marksandspencer.com/is/image/mands/SD_01_T42_6065E_KU_X_EC_88?$PDP_SWL_STD$",
			"http://asset2.marksandspencer.com/is/image/mands/SD_01_T66_8310_RU_X_EC_88?$PDP_SWL_STD$"
		];

	}]);