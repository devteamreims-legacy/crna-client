'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:sectorController
 * @description
 * # sectorController
 * Controller of the crnaClientApp
 */
angular.module('sector', ['sectorServices', 'sectorFilters'])
.controller('sectorController', ['$scope', 'MySectors', function ($scope, MySectors) {
  $scope.mySectors = MySectors.mySectors;
}])
.directive('mySector', function() {
  return {
    template: '{{mySectors | toString}}' 
  };
});
