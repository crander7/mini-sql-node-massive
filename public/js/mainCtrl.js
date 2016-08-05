angular.module('db').controller('mainCtrl', function($scope, mainService) {

  $scope.getProducts = function() {
    mainService.getProducts().then(function(result) {
      $scope.products = result.data;
    });
  };

  $scope.addProduct = function(name, desc, price, img) {
    mainService.addProduct(name, desc, price, img).then(function() {
      alert("Product " + name + " successfully added!");
    });
  };

  $scope.removeProduct = function(id) {
      mainService.deleteProduct(id).then(function() {
        alert("Product successfully removed");
      });
  };

  $scope.getProduct = function(id) {
      mainService.getProductId(id).then(function(result) {
        alert(result.data[0].name);
        $scope.oneProduct = result;
      });
  };

  $scope.updateProduct = function(name, desc, price, img, id) {
    mainService.addProduct(name, desc, price, img, id).then(function() {
      alert("Product " + name + " successfully updated!");
    });
  };

  $scope.getProducts();

});//End Controller
