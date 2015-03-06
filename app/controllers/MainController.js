define(function () {
    return ['$scope', '$http', function($scope, $http,$location) {
     
		$scope.title ="That's it. Now watch moving on!";
		
		   $scope.setRoute = function(route) {
      $location.path(route);

    }
   }];
});