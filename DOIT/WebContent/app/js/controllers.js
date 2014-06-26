'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
     $scope.message = "Hello This message is from View 1";
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
    $scope.message = "Hello This message is from View 2";
  }]);
