'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('AddIdea', function($scope) {

		$scope.idea = {};

		$scope.addIdea = function() {
			console.log('adding');
		};

	});