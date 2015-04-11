'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:PositionCtrl
 * @description
 * # positionController
 * Controller for the position module
 */
angular.module('positionController', ['positionServices', 'positionDirectives'])
.controller('PositionController', ['$scope', 'myPosition', function($scope, myPosition) {
  var vm = this;
  vm.myPosition = myPosition.myPosition;
}]);
