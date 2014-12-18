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

		console.log($scope.idea)
	}]);