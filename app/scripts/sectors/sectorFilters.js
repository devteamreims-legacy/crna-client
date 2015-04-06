'use strict';

/**
 * @ngdoc function
 * @name sectorFilters
 * @description
 * # sectorFilters
 * Transforms a sector array ( ['UR', 'XR'] ) into a commonly readable string ( 'UXR' )
 **/
angular.module('sectorFilters', ['crnaConstants', 'underscore', 'sectorServices'])
.filter('sectorsToString', ['allSectors', '_', function(allSectors, _) {
  return function(input) {
    if(input === undefined || input.length === 0) {
      return 'X';
    }

    return allSectors.reduceSector(input).join('');
  };
}]);
