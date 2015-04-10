'use strict';

/**
 * @ngdoc function
 * @name arcidDirectives 
 * @description
 * # arcidDirectives
 * Directives for xman
 **/
angular.module('arcidDirectives', ['crnaConstants', 'smart-table', 'arcidServices'])
// ARCID Single flight detail panel
.directive('arcidFlightPanel', function() {
  return {
    restrict: 'E',
    controller: 'arcidController', 
    controllerAs: 'x',
    templateUrl: 'views/arcid/_arcidFlightPanel.html'
  };
});
