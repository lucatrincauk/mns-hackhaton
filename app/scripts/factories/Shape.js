'use strict';

angular.module('mnsHackhatonApp')
.factory('Shape', function() {

	var draw = function(canvasID, shapeID, colour, pattern) {
		var drawShapeInit = function() {

			var drawOnStage = function(patternImg) {

				//Create a stage by getting a reference to the canvas
				var canvas = document.getElementsByClassName("canvas-" + canvasID)[0];
				var stage = new createjs.Stage(canvas);

				//Create a Shape DisplayObject
				var shape = new createjs.Shape();

				//draw lines
				shape.graphics.moveTo(0, 0).beginStroke("black");

				if(patternImg !== '')
					shape.graphics.beginBitmapFill(patternImg, 'repeat');
				else
					shape.graphics.beginFill(colour);

				switch (shapeID) {
					case 0: //A-Line
						drawALine(shape);
						break;
					case 1: //Empire Line
						drawEmpireLine(shape);
						break;
					case 2: //Shirtwaister
						drawShirtwaister(shape);
						break;
				};
				
				//add shape instance to stage display list
				stage.addChild(shape);

				stage.update();
			};		

			if(pattern !== '') {
				var patternImg = new Image();
				patternImg.onload = function() { drawOnStage(patternImg) };
				patternImg.src = pattern;
			} else {
				var patternImg = new Image();
				patternImg.onload = function() { drawOnStage('') };
				patternImg.src = "http://www.gstatic.com/psa/static/1.gif";
			}

		};

		drawShapeInit();

	};

	/** A - Line **/
	var drawALine = function(shape) {
		shape.graphics.moveTo(20, 0)
		    .lineTo(80, -20)
		    .bezierCurveTo(100, -10, 130, -10, 150, -20)
		    .lineTo(210, 0)
		    .lineTo(200, 15)
		    .lineTo(150, 0)
		    .lineTo(160, 70)
		    .bezierCurveTo(130, 74, 100, 74, 70, 70)
		    //.lineTo(70, 70)
		    .lineTo(80, 0)
		    .lineTo(35, 15)
		    .lineTo(20, 0)

		    .closePath(); 

			//set position of shape
			shape.x = 38;
			shape.y = 45;
	};

	/** Empire Line **/
	var drawEmpireLine = function(shape) {
		shape.graphics.moveTo(80, -30)
		    .lineTo(100, -30)
		    .lineTo(110, -15)
		    .lineTo(150, -15)
		    .lineTo(160, -30)
		    .lineTo(180, -30)
		    .lineTo(165, 5)
		    .lineTo(175, 70)
		    .lineTo(80, 70)
		    .lineTo(90, 5)

		    .closePath(); 

			//set position of shape
			shape.x = 26;
			shape.y = 50;
	};

	/** Shirtwaister **/
	var drawShirtwaister = function(shape) {
		shape.graphics.moveTo(85, -30)
		    .lineTo(125, -25)
		    .lineTo(165, -30)
		    .lineTo(200, -10)
		    .lineTo(180, 0)
		    .lineTo(160, -10)
		    .lineTo(150, 20)
		    .lineTo(185, 70)
		    .lineTo(65, 70)
		    .lineTo(100, 20)
		    .lineTo(90, -10)
		    .lineTo(70, 0)
		    .lineTo(50, -10)
		    .lineTo(80, -30)
		    .closePath(); 

			//set position of shape
			shape.x = 24;
			shape.y = 50;
	};

	return {
		draw: draw
	};
});