// Create a new module
var workshop = angular.module('workshop', []);

// Create routes
workshop.config(function($routeProvider) {
  $routeProvider.when('/index', {
      templateUrl: 'views/index.html',
      controller: 'IndexCtrl'
    })
    .when('/list', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    })
    .otherwise({
    redirectTo: '/index'
  });
});

// Create controllers
workshop.controller('IndexCtrl', function($scope) {
  $scope.helloMessage = "Hello world";
});
workshop.controller('ListCtrl', function($scope) {
  $scope.list = [
    {
      name: "John",
      surname: "Smith",
    },
    {
      name: "Mark",
      surname: "Lorem",
    },
    {
      name: "Sally",
      surname: "Ipsum",
    },
    {
      name: "Frank",
      surname: "Sky",
    }
  ];
});
