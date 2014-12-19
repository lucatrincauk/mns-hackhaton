'use strict';

angular.module('mnsHackhatonApp')
.factory('Shape', function() {

	var draw = function(shapeObj, colour, pattern) {

		var drawShapeInit = function() {

			var drawOnStage = function(patternImg) {

				//Create a stage by getting a reference to the canvas
				var canvas = document.getElementById("creator-canvas");
				var stage = new createjs.Stage(canvas);

				//Create a Shape DisplayObject
				var shape = new createjs.Shape();

				//draw lines
				shape.graphics.moveTo(0, 0).beginStroke("black");

				if(patternImg != '')
					shape.graphics.beginBitmapFill(patternImg, 'repeat');
				else
					shape.graphics.beginFill(colour);

				switch (shapeObj.id) {
					case 0: //A-Line
						drawALine(shape);
						break;
					case 1: //Empire Line
						drawEmpireLine(shape);
						break;
				};
				
				//set position of shape
				shape.x = shape.y = 50;
				//add shape instance to stage display list
				stage.addChild(shape);

				stage.update();
			};		

			if(pattern != '') {
				var patternImg = new Image();
				patternImg.onload = function() { drawOnStage(patternImg) };
				patternImg.src = pattern;
			} else {
				drawOnStage('');
			}

		};
		drawShapeInit();

	};

	var drawALine = function(shape) {
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
	};

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
	};

	return {
		draw: draw
	};
});