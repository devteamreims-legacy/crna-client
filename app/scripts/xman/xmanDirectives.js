'use strict';

/**
 * @ngdoc function
 * @name xmanDirectives
 * @description
 * # xmanDirectives
 * Directives for xman
 **/
angular.module('xmanDirectives', ['smart-table'])
// Xman flight list directive
.directive('xmanFlightList', function() {
  return {
    restrict: 'EA',
    controller: 'XmanController', // Link to Position Controller
    controllerAs: 'x',
    templateUrl: 'views/xman/_xmanFlightList.html'
  };
})
// Xman applied by snippet
.directive('xmanAppliedBy', function() {
  return {
    restrict: 'E',
    scope: {
      flightId: '=',
      applied: '='
    },
    templateUrl: 'views/xman/_xmanAppliedBy.html'
  };
})
.directive('xmanApply', function() {
  return {
    restrict: 'E',
    scope: {
      flightId: '=',
      applied: '='
    },
    templateUrl: 'views/xman/_xmanApply.html'
  };
});
