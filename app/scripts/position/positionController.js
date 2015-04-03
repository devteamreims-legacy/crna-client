'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:PositionCtrl
 * @description
 * # PositionCtrl 
 * Controller of the crnaClientApp
 */
angular.module('position', ['positionServices', 'positionDirectives'])
.controller('PositionController', ['$scope', 'myPosition', function($scope, myPosition) {
  var vm = this;
  vm.myPosition = myPosition.myPosition;
}]);
