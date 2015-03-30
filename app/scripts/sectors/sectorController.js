'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:SecteurCtrl
 * @description
 * # SecteurCtrl
 * Controller of the crnaClientApp
 */
angular.module('sector', ['sectorServices', 'sectorFilters'])
.controller('SectorCtrl', ['$scope', 'MySectors', function ($scope, MySectors) {
  $scope.mySectors = MySectors.mySectors;
}])
.directive('mySector', function() {
  return {
    template: '{{mySectors | toString}}' 
  };
});
