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
		'ngSanitize'
	]).config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		// app
			.state('app', {
				url: '',
				abstract: true,
				views: {
					'footer': {
						templateUrl: 'templates/footer.html'
					}
				}
			})
			// app.home
			.state('app.index', {
				url: '/',
				views: {
					'index@': {
						templateUrl: 'templates/main.html',
						controller: 'indexController'
					}
				},
				resolve: {
					// dishes: function(Dishes) {
					// 	return Dishes.getWeekly();
					// }
				}
			}).state('app.profile', {
				url: 'profile',
				views: {
					'index@': {
						templateUrl: 'templates/main.html',
						controller: 'indexController'
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