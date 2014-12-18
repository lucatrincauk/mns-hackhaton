'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('SingleCtrl', ['$scope', 'idea', function($scope, idea) {
		$scope.idea = idea;

		$scope.voteUp = function() {
			if (!$scope.idea.vote) {
				$scope.idea.vote = 1;
			} else {

				$scope.idea.vote = $scope.idea.vote + 1;
			}
			$scope.idea.$save();
		};
		$scope.voteDown = function() {
			if (!$scope.idea.vote) {
				$scope.idea.vote = -1;
			} else {

				$scope.idea.vote = $scope.idea.vote - 1;
			}
			$scope.idea.$save();

		};

	}]);