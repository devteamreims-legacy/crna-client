'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:PositionCtrl
 * @description
 * # PositionCtrl 
 * Controller of the crnaClientApp
 */
angular.module('position', ['positionServices', 'positionDirectives'])
.controller('PositionController', ['$scope', 'MyPosition', function($scope, MyPosition) {
  $scope.position = MyPosition.getPosition();  
}]);
