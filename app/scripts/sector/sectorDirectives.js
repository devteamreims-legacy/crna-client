'use strict';

/**
 * @ngdoc function
 * @name sectorDirectives
 * @description
 * # sectorDirective
 * Directives to manage our sector
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

