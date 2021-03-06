'use strict';

/**
 * @ngdoc function
 * @name sectorFilters
 * @description
 * # sectorFilters
 * Transforms a sector array ( ['UR', 'XR'] ) into a commonly readable string ( 'UXR' )
 **/
angular.module('sectorFilters', ['crnaConstants', 'sectorServices'])
.filter('sectorsToString', ['allSectors', function(allSectors) {
  return function(input) {
    if(input === undefined || input.length === 0) {
      return '-';
    }

    return allSectors.reduceSector(input).join('');
  };
}]);
