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
      flight: '='
    },
    templateUrl: 'views/xman/_xmanAppliedBy.html'
  };
})
// Button to show and apply speed reduction
.directive('xmanSpeed', function() {
  return {
    restrict: 'E',
    scope: {
      flight: '='
    },
    templateUrl: 'views/xman/_xmanSpeed.html'
  };
});
