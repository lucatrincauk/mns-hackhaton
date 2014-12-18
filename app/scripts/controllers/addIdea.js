'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('AddIdea', ['$scope', 'ideas', '$firebase', '$state', function($scope, ideas, $firebase, $state) {

		$scope.idea = {};
		$scope.ideas = ideas;
		$scope.category = 'colour';

		$scope.shape = '';
		$scope.shapes = [{
			id: 0,
			name: 'A-Line',
			draw: $scope.drawShapeALine
		}, {
			id: 1,
			name: 'Figure hugging',
			draw: $scope.drawShapeALine
		}, {
			id: 2,
			name: 'Fit & Flare',
			draw: $scope.drawShapeALine
		}, {
			id: 3,
			name: 'Pencil',
			draw: $scope.drawShapeALine
		}];

		$scope.colour = 'green';
		$scope.colorpicker = {
			colour: ''
		};

		$scope.pattern = 'http://asset2.marksandspencer.com/is/image/mands/RC_01_T62_3766K_EE_X_EC_88?$PDP_SWL_STD$';

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

		$scope.setShape = function(shape) {
			$scope.shape = shape;
			$scope.drawShape();
		};
		$scope.drawShape = function() {
			if ($scope.pattern !== '')
				$scope.drawShapeALine();
			else
				$scope.drawShapeALineOnStage();
		};
		$scope.drawShapeALine = function() {

			var pattern = new Image();
			pattern.onload = function() {
				$scope.drawShapeALineOnStage(pattern);
			};
			pattern.src = $scope.pattern;

		};

		$scope.drawShapeALineOnStage = function(pattern) {

			//Create a stage by getting a reference to the canvas
			var canvas = document.getElementById("creator-canvas");
			var stage = new createjs.Stage(canvas);

			//Create a Shape DisplayObject
			var shape = new createjs.Shape();

			//draw lines
			shape.graphics.moveTo(0, 0).beginStroke("black");

			if ($scope.pattern !== '')
				shape.graphics.beginBitmapFill(pattern, 'repeat');
			else
				shape.graphics.beginFill($scope.colorpicker.colour);

			shape.graphics.moveTo(0, 0)
				.lineTo(80, -20)
				.lineTo(150, -20)
				.lineTo(230, 0)
				.lineTo(215, 15)
				.lineTo(150, 0)
				.lineTo(150, 70)
				.lineTo(80, 70)
				.lineTo(80, 0)
				.lineTo(15, 15)
				.lineTo(0, 0)

			.closePath();
			//set position of shape
			shape.x = shape.y = 50;
			//add shape instance to stage display list
			stage.addChild(shape);

			stage.update();
		};

		$scope.drawShape();

		$scope.setColour = function() {
			$scope.colour = $scope.colorpicker.colour;
			$scope.pattern = '';
			$scope.drawShape();

		};

	}]);