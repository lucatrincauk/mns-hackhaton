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

		$scope.ideas.$loaded(function() {
			$scope.ideas = ideas;
			angular.forEach($scope.ideas, function(idea, key) {
				Shape.draw(idea.$id, idea.shape, idea.colour, idea.pattern);
			});
		});
	}]);