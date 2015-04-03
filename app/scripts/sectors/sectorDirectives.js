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
    restrict: 'EA',
    controller: 'SectorController', // Link to Sector Controller
    controllerAs: 's',
    template: '<span ng-bind="s.mySectors | toString"></span>' // Use toString filter to reduce sector array to a readable string
  };
});

