'use strict';

/**
 * @ngdoc function
 * @name sectorFilters
 * @description
 * # sectorFilters
 * Transforms a sector array ( ['UR', 'XR'] ) into a commonly readable string ( 'UXR' )
 **/
angular.module('sectorFilters', [])
.filter('toString', function() {
  return function(input) {
    if(input.length === 0) {
      return 'X';
    }
    return input.join('');
  }
});
