'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:sectorController
 * @description
 * # sectorController
 * Controller of the crnaClientApp
 */
angular.module('sectorController', ['sectorServices', 'sectorFilters', 'sectorDirectives', 'trafficLoadServices'])
.controller('SectorController', ['$scope', 'mySectors', function ($scope, mySectors) {
  var vm = this;
  vm.mySectors = mySectors.mySectors;
}])
.controller('MySectorStatusController', ['$scope', 'mySectors', 'myPosition', 'myTrafficLoad', function($scope, mySectors, myPosition, myTrafficLoad) {
  var vm = this;
  vm.mySectors = mySectors.mySectors;
  vm.myPosition = myPosition.myPosition;
  $scope.myTrafficLoad = new myTrafficLoad().myLoad;
}]);
