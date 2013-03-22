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
      age: 24
    },
    {
      name: "Mark",
      surname: "Lorem",
      age: 51
    },
    {
      name: "Sally",
      surname: "Ipsum",
      age: 30
    },
    {
      name: "Frank",
      surname: "Sky",
      age: 44
    }
  ];
});
