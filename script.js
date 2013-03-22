// Create a new module
var workshop = angular.module('workshop', []);

// Create routes
workshop.config(function($routeProvider) {
  $routeProvider.when('/index', {
      templateUrl: 'views/index.html',
      controller: 'IndexCtrl'
    })
    .otherwise({
    redirectTo: '/index'
  });
});

// Create controllers
workshop.controller('IndexCtrl', function($scope) {
  $scope.helloMessage = "Hello world";
});
