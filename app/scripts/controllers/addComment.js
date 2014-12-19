'use strict';

/**
 * @ngdoc function
 * @name mnsHackhatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mnsHackhatonApp
 */
angular.module('mnsHackhatonApp')
	.controller('AddComment', ['$scope', 'comments', '$firebase', function($scope, comments, $firebase) {

		$scope.comment = {};
		$scope.comments = comments;

		$scope.addComment = function() {
			$scope.comment.ideaId = $scope.idea.$id;
			$scope.comments.$add($scope.comment).then(function() {
				console.log('Added successfully');
			}, function(error) {
				console.log('Error:', error);
			});

			$scope.comment = {};
			$scope.addedComment = true;


		};



	}]);