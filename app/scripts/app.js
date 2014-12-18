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
		'ngSanitize', 'ui.router', 'firebase'
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
				// dishes: function(Dishes) {
				// 	return Dishes.getWeekly();
				// }
			}
		}).state('app.detail', {
			url: 'detail',
			views: {
				'index@': {
					templateUrl: 'views/detail.html',
					controller: 'MainCtrl'
				}
			},
			resolve: {
				// dishes: function(Dishes) {
				// 	return Dishes.getWeekly();
				// }
			}
		}).state('app.addIdea', {
			url: 'ideas/add',
			views: {
				'index@': {
					templateUrl: 'views/form.html',
					controller: 'MainCtrl'
				}
			},
			resolve: {
				// dishes: function(Dishes) {
				// 	return Dishes.getWeekly();
				// }
			}
		});



	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/');
});