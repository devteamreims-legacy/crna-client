'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:sectorController
 * @description
 * # sectorController
 * Controller of the crnaClientApp
 */
angular.module('sector', ['sectorServices', 'sectorFilters', 'sectorDirectives'])
.controller('SectorController', ['$scope', 'mySectors', function ($scope, mySectors) {
  var vm = this;
  vm.mySectors = mySectors.mySectors;
}]);
