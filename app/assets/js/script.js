var myApp = angular.module('myApp', ['ngRoute','SimpleWebRTC']);

myApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/assets/tmpl/home.html',
			controller: 'HomeController'
		}).when('/create-note',{
			templateUrl: '/assets/tmpl/createNote.html',
			controller: 'CreateNoteController'
		}).otherwise({redirectTo:'/'});

		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
}]);