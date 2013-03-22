// Create a new module
var workshop = angular.module("workshop", ["ngResource"]);

// Create routes
workshop.config(function($routeProvider) {
  $routeProvider.when("/index", {
      templateUrl: "views/index.html",
      controller: "IndexCtrl"
    })
    .when("/list", {
      templateUrl: "views/list.html",
      controller: "ListCtrl"
    })
    .when("/product", {
      templateUrl: "views/product.html",
      controller: "ProductCtrl"
    })
    .when("/product/:productId", {
      templateUrl: "views/product.html",
      controller: "ProductCtrl"
    })
    .otherwise({
      redirectTo: "/index"
    });
});

// Create controllers
workshop.controller("IndexCtrl", function($scope) {
  $scope.helloMessage = "Hello world";
});
workshop.controller("ListCtrl", function($scope) {
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

// Create serices
workshop.factory("Products", function($resource){
  return $resource("data/products.js", {} )
});
workshop.controller("ProductCtrl", function($scope, Products) {
  $scope.products = Products.query();
});
