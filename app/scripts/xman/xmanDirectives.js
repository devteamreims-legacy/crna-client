'use strict';

/**
 * @ngdoc function
 * @name xmanDirectives
 * @description
 * # xmanDirectives
 * Directives for xman
 **/
angular.module('xmanDirectives', ['crnaConstants', 'smart-table', 'angularMoment'])
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
.directive('xmanSpeed', [function() {
  return {
    restrict: 'E',
    scope: {
      flight: '='
    },
    templateUrl: 'views/xman/_xmanSpeed.html',
    controllerAs: 'xm',
    controller: ['$scope', 'xmanDefaultSpeeds', function($scope, xmanDefaultSpeeds) {
      $scope.xmanDefaultSpeeds = xmanDefaultSpeeds; // Pass default speeds to our scope
      /*
       * Returns a css class given an xmanFlight and a buttonSpeed
       */
      $scope.buttonClass = function(flight, buttonSpeed) {
        var def = '';

        if (flight.applied.speed === undefined) { // Nothing has been applied yet
          if (buttonSpeed === flight.speed) {
            def = 'btn-success'; // Requested speed will show as primary
          }
        } else { // We have an applied speed reduction
          if (flight.speed === flight.applied.speed) { // Applied speed equals requested speed
            if (buttonSpeed === flight.applied.speed) { // All is good, disable input
              def = 'btn-success disabled';
            }
          } else {
            if (buttonSpeed === flight.applied.speed) {
              def = 'btn-warning disabled';
            }
            if (buttonSpeed === flight.speed) {
              def = 'btn-success';
            }
          }
        }

        return def;
      };
    }]
  };
}]);
