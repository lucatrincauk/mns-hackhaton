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
	]).config(function($stateProvider, $urlRouterProvider) {

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
			}).state('app.profile', {
				url: 'profile',
				views: {
					'index@': {
						templateUrl: 'views/profile.html',
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