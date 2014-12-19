'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('MainCtrl', ['$scope', 'ideas', 'VoteRef', function($scope, ideas, VoteRef) {
		$scope.ideas = ideas;
		$scope.voteRef = VoteRef;
	}]);