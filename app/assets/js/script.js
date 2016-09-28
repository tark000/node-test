var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/public/assets/tmpl/home.html',
			controller: 'HomeController'
		})
}]);