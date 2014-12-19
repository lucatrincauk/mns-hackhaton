'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('SingleCtrl', ['$scope', 'idea', 'VoteRef', 'Shape', function($scope, idea, VoteRef, Shape) {

		$scope.factoryShape = Shape;
		
		idea.$loaded(function() {
			$scope.idea = idea;
			Shape.draw($scope.idea.shape, $scope.idea.colour, $scope.idea.pattern);
		});

		$scope.voteRef = VoteRef;
		$scope.voteUp = function() {
			if (!$scope.idea.vote) {
				$scope.idea.vote = 1;
			} else {

				$scope.idea.vote = $scope.idea.vote + 1;
			}
			$scope.idea.$save();
			$scope.addedVoteUp = true;
			$scope.addedVoteDown = false;
		};
		$scope.voteDown = function() {
			if (!$scope.idea.vote) {
				$scope.idea.vote = -1;
			} else {

				$scope.idea.vote = $scope.idea.vote - 1;
			}
			$scope.idea.$save();
			$scope.addedVoteDown = true;
			$scope.addedVoteUp = false;

		};

	}]);