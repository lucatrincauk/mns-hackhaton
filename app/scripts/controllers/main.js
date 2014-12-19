'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('MainCtrl', ['$scope', 'ideas', 'VoteRef', 'Shape', function($scope, ideas, VoteRef, Shape) {
		$scope.ideas = ideas;
		$scope.voteRef = VoteRef;

		$scope.ideas.$watch(function(e) {


			$scope.tempIdea = $scope.ideas[$scope.ideas.length - 1];
			Shape.draw($scope.tempIdea.$id, $scope.tempIdea.shape, $scope.tempIdea.colour, $scope.tempIdea.pattern);


		});

		// $scope.ideas.$loaded(function() {
		// 	$scope.ideas = ideas;
		// 	angular.forEach($scope.ideas, function(idea, key) {
		// 		Shape.draw(idea.$id, idea.shape, idea.colour, idea.pattern);
		// 	});
		// });
	}]);