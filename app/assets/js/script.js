
// http://chariotsolutions.com/blog/post/getting-chatty-angular-socket-io-nodeexpress-bootstrap/
var myApp = angular.module('myApp', [
	'ngRoute',
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'btford.socket-io'
	]).value('nickName', 'anonymous');


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

myApp.controller('SocketCtrl',['$log', '$scope', 'chatSocket', 'messageFormatter', 'nickName',
		function ($log, $scope, chatSocket, messageFormatter, nickName) {
  $scope.nickName = nickName;
  $scope.messageLog = 'Ready to chat!';

  $scope.sendMessage = function() {
	  var match = $scope.message.match('^\/nick (.*)');

	  if (angular.isDefined(match) && 
	      angular.isArray(match) && match.length === 2) {
	    var oldNick = nickName;
	    nickName = match[1];
	    $scope.message = '';
	    $scope.messageLog = messageFormatter(new Date(), 
	                    nickName, 'nickname changed - from ' + 
	                    oldNick + ' to ' + nickName + '!') + 
	                    $scope.messageLog;
	    $scope.nickName = nickName;
	  }

	  $log.debug('sending message', $scope.message);
	  chatSocket.emit('message', nickName, $scope.message);
	  $log.debug('message sent', $scope.message);
	  $scope.message = '';
	};

	$scope.$on('socket:broadcast', function(event, data) {
	    $log.debug('got a message', event.name);
	    if (!data.payload) {
	      $log.error('invalid message', 'event', event, 
	                 'data', JSON.stringify(data));
	      return;
	    } 
	    $scope.$apply(function() {
	      $scope.messageLog = messageFormatter(
	            new Date(), data.source, 
	            data.payload) + $scope.messageLog;
	    });
	  });

}]);

'use strict';
myApp.factory('chatSocket', ['socketFactory',
	function (socketFactory) {
      var socket = socketFactory();
      socket.forward('broadcast');
      return socket;
  }]);