'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('MainCtrl', ['$scope', 'ideas', function($scope, ideas) {
		$scope.ideas = ideas;

		console.log($scope.ideas)
	}]);