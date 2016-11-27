myApp.controller('HomeController',['$scope',
	function($scope) {
		$scope.test = 'Test text from angular';
		console.log('123asd');

		$scope.hasStream = false;
	    $scope.roomName = '';
	    $scope.isBroadcasting = '';
	    $scope.prepare = function prepare() {
	      $scope.$broadcast('prepare');
	    };
	    $scope.start = function start() {
	      $scope.$broadcast('start');
	    };
	}]);