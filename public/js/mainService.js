angular.module('db').service('mainService', function($http) {

     this.getProducts = function() {
       return $http({
         method: 'GET',
         url: '/products'
      }).then(function(response) {
        return response;
      });
    };

    this.getProductId = function(id) {
      return $http({
        method: 'GET',
        url: '/product/' + id
      }).then(function(response) {
        return response;
      });
    };

    this.addProduct = function(name, desc, price, img) {
      var prodObj = {
        name: name,
        description: desc,
        price: Number(price),
        imageurl: img
      };
      return $http({
        method: 'POST',
        url: '/product',
        data: prodObj
      }).then(function(response) {
        return response;
      });
    };

    this.updateProduct = function(id) {
      var prodObj = {
        name: name,
        description: desc,
        price: Number(price),
        imageurl: img
      };
      return $http({
        method: 'PUT',
        url: '/product/' + id
      }).then(function(response) {
        return response;
      });
    };

    this.deleteProduct = function(id) {
      return $http({
        method: 'DELETE',
        url: '/product/' + id
      }).then(function(response) {
        return response;
      });
    };
});
