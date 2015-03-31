'use strict';

/**
 * @ngdoc function
 * @name positionDirectives
 * @description
 * # positionDirective
 * Directives to manage our position
 **/
angular.module('positionDirectives', [])
.directive('crnaMyPosition', [function(scope, element) {
  return {
    controller: 'PositionController', // Link to Position Controller
    template: '{{ position.name }}'
  };
}]);

