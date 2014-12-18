'use strict';

/**
 * @ngdoc overview
 * @name mnsHackhatonApp
 * @description
 * # mnsHackhatonApp
 *
 * Main module of the application.
 */
angular
	.module('mnsHackhatonApp', [
		'ngResource',
		'ngSanitize', 'ui.router', 'firebase', 'colorpicker.module'
	]).constant('FirebaseUrl', 'https://mns-hackhaton.firebaseio.com/')

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	// app
		.state('app', {
			url: '',
			abstract: true,
			views: {
				'footer': {
					templateUrl: 'views/footer.html'
				},
				'header': {
					templateUrl: 'views/nav.html'
				}
			}
		})
		// app.home
		.state('app.index', {
			url: '/',
			views: {
				'index@': {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl'
				}
			},
			resolve: {
				ideas: function(Ideas) {
					return Ideas.getAll();
				}
			}
		}).state('app.detail', {

			url: '/detail/:id',
			views: {
				'index@': {
					templateUrl: 'views/detail.html',
					controller: 'SingleCtrl'
				},
				'comment@': {
					templateUrl: 'views/commentForm.html',
					controller: 'AddComment'
				}
			},
			resolve: {
				idea: function(Ideas, $stateParams) {
					return Ideas.getOne($stateParams.id);
				},
			comments: function(Comments, $stateParams) {
				return Comments.getOne($stateParams.id);
			}
			}
		}).state('app.addIdea', {
			url: '/ideas/add',
			views: {
				'index@': {
					templateUrl: 'views/form.html',
					controller: 'AddIdea'
				}
			},
			resolve: {
				ideas: function(Ideas) {
					return Ideas.getAll();
				}
			}
		});



	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/');
});