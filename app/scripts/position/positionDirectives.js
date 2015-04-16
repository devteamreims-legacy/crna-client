'use strict';

/**
 * @ngdoc function
 * @name positionDirectives
 * @description
 * # positionDirective
 * Directives to manage our position
 **/
angular.module('positionDirectives', [])
.directive('crnaMyPosition', function() {
  return {
    restrict: 'E',
    controller: 'PositionController', // Link to Position Controller
    controllerAs: 'p',
    template: '{{p.myPosition.name}}'
  };
});
