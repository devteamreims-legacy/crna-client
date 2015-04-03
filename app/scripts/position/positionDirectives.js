'use strict';

/**
 * @ngdoc function
 * @name positionDirectives
 * @description
 * # positionDirective
 * Directives to manage our position
 **/
angular.module('positionDirectives', ['positionServices'])
.directive('crnaMyPosition', ['myPosition', function(scope, element, myPosition) {
  return {
    restrict: 'EA',
    controller: 'PositionController', // Link to Position Controller
    controllerAs: 'p',
    template: '<span ng-bind="p.myPosition.name"></span>'
  };
}]);

