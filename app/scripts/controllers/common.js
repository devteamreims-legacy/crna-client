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
.controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
})
.controller('NavbarCtrl', ['$scope', '$location', SetNavbarTab]);
