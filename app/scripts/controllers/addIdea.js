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

		$scope.colorpicker = { colour: '' };

		$scope.addIdea = function() {
			$scope.idea.vote = 0;
			$scope.ideas.$add($scope.idea).then(function() {
				console.log('Added successfully');
				$state.go('app.index');
			}, function(error) {
				console.log('Error:', error);
			});
		};

		$scope.setCategory = function(cat) {
			$scope.category = cat;
		};

		/**
		 * SHAPE functions
		 */
		$scope.setShape = function(shape) {
			$scope.shape = shape;
			//$scope.shape.draw();
			$scope.factoryShape.draw($scope.shape, $scope.colorpicker.colour, $scope.pattern);
		}
		$scope.drawShape = function() {
			if ($scope.pattern !== '')
				$scope.drawShapeALine();
			else
				$scope.drawShapeALineOnStage();
		};

		/**
		 * COLOUR functions
		 */
		$scope.setColour = function() {
			$scope.colour = $scope.colorpicker.colour;
			$scope.pattern = '';
			$scope.shape.draw();
		};

		/**
		 * PATTERN functions
		 */
		 $scope.setPattern = function(pattern) {
		 	$scope.pattern = pattern;
			$scope.colour = '';
			$scope.shape.draw();
		 };


		//this data will come from server later
		$scope.shapes = [{
			id: 0,
			name: 'A-Line', 
			draw: $scope.drawShapeALine
		}, {
			id: 1,
			name: 'Emoire Line', 
			draw: $scope.drawShapeEmpireLine
		}, {
			id: 2,
			name: 'Fit & Flare', 
			draw: $scope.drawShapeALine
		}, {
			id: 3,
			name: 'Pencil', 
			draw: $scope.drawShapeALine
		}];

		$scope.patterns = [
			"http://asset2.marksandspencer.com/is/image/mands/RC_01_T62_3766K_EE_X_EC_88?$PDP_SWL_STD$",
			"http://asset1.marksandspencer.com/is/image/mands/SD_01_T91_1779_T4_X_EC_88?$PDP_SWL_STD$",
			"http://asset2.marksandspencer.com/is/image/mands/SD_01_T42_6065E_KU_X_EC_88?$PDP_SWL_STD$",
			"http://asset2.marksandspencer.com/is/image/mands/SD_01_T66_8310_RU_X_EC_88?$PDP_SWL_STD$"
		];

	}]);