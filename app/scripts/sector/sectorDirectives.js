'use strict';

/**
 * @ngdoc function
 * @name positionDirectives
 * @description
 * # positionDirective
 * Directives to manage our position
 **/
angular.module('sectorDirectives', [])
.directive('crnaMySectors', function() {
  return {
    restrict: 'E',
    controller: 'SectorController', // Link to Sector Controller
    controllerAs: 's',
    template: '{{s.mySectors | sectorsToString}}' // Use toString filter to reduce sector array to a readable string
  };
});

