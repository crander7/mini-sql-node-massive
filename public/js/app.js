angular.module('db', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('home', {
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'mainCtrl'
          })
          .state('products', {
            url: '/products',
            templateUrl: '../views/products.html',
            controller: 'mainCtrl'
          });

          $urlRouterProvider.otherwise('/');
    });
