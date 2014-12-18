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
		$scope.shape = { id: 0, name: 'A-Line' };
		$scope.shapes = [
			{ id: 0, name: 'A-Line'},
			{ id: 1, name: 'Figure hugging'},
			{ id: 2, name: 'Fit & Flare'},
			{ id: 3, name: 'Pencil'}
		];

		$scope.colour = 'green';

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
			$scope.drawShape();
		}
		$scope.drawShape = function() {

			//Create a stage by getting a reference to the canvas
			var canvas = document.getElementById("creator-canvas");
			var stage = new createjs.Stage(canvas);

			//Create a Shape DisplayObject
			var shape = new createjs.Shape();

			//draw lines
			shape.graphics.moveTo(0, 0)
			    .beginStroke("black")
			    .beginFill($scope.colour)
			    .moveTo(0, 0)
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


			//shape.graphics.beginFill("black").drawCircle(0, 0, 40);
			//set position of shape
			shape.x = shape.y = 50;
			//add shape instance to stage display list
			stage.addChild(shape);

			stage.update();

		};

		$scope.drawShape();

	}]);