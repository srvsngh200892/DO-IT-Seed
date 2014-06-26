'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ui.bootstrap',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/view1', {templateUrl: 'partials/view1.html', controller: 'MyCtrl1'});
}]);

angular.module('myApp').constant('appSettings', {
  AppURI: 'http://127.0.0.1:9080/'
});
