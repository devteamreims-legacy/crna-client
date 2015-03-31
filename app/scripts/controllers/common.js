'use strict';

/**
 * Helper function to set 'activate' class on navbar tabs
 *
 */
function SetNavbarTab($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}


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
.controller('navBarController', ['$scope', '$location', SetNavbarTab]);
