'use strict';


/**
 * @ngdoc function
 * @name crnaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crnaClientApp
 */
angular.module('commonControllers', [])
.controller('mainController', function ($scope) {
})
.controller('navBarController', ['$scope', '$state', function($scope, $state) {
  $scope.showHelp = function() {
    console.log('Help for state :', $state.current);
  };
}]);
