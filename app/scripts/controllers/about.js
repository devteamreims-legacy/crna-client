'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crnaClientApp
 */
angular.module('crnaClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
