'use strict';

/**
 * @ngdoc function
 * @name xmanDirectives
 * @description
 * # xmanDirectives
 * Directives for xman
 **/
angular.module('xmanDirectives', ['crnaConstants', 'smart-table', 'angularMoment', 'sectorServices', 'positionServices', 'underscore'])
// Xman flight list directive
.directive('xmanFlightList', ['_', function(_) {
  return {
    restrict: 'EA',
    controller: 'XmanController', // Link to Position Controller
    controllerAs: 'x',
    templateUrl: 'views/xman/_xmanFlightList.html',
    link: function(scope) {
      scope.getRowClass = function(flight) {
        var ret = 'no-speed-to-apply';
        if(_.isEmpty(flight.applied) === true && flight.speed !== '0') {
          ret = 'speed-not-applied';
        }
        return ret;
      };
    }
  };
}])
// Xman delay snippet
.directive('xmanDelay', function() {
  return {
    restrict: 'E',
    scope: {
      flight: '='
    },
    controllerAs: 'xm_delay',
    templateUrl: 'views/xman/_xmanDelay.html',
    controller: ['$scope', function($scope) {
      $scope.delayClass = function(flight) {
        if(flight.delay >= 20) {
          return 'high-delay';
        } else if (flight.delay >= 10) {
          return 'medium-delay';
        } else {
          return 'low-delay';
        }
      };
    }]
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
    controller: ['$scope', 'xmanDefaultSpeeds', 'myPosition', 'mySectors', function($scope, xmanDefaultSpeeds, myPosition, mySectors) {
      $scope.xmanDefaultSpeeds = xmanDefaultSpeeds; // Pass default speeds to our scope
      
      // TODO : Use a service/factory here
      // Undo speed function
      $scope.undoSpeed = function(flight) {
        flight.applied = {};
      };
      // Set speed function
      $scope.setSpeed = function(flight, s) {
        if(flight.applied.speed === s) {
          return; // Don't update
        }
        flight.applied = {
          position: myPosition.myPosition.name,
          sectors: angular.copy(mySectors.mySectors),
          speed: s,
          minCleanSpeed: flight.applied.minCleanSpeed,
          when: Date.now()
        };
      };

      // Click on "MCS" button
      $scope.toggleMcs = function(flight) {
        flight.applied = {
          position: myPosition.myPosition.name,
          sectors: angular.copy(mySectors.mySectors),
          speed: flight.applied.speed,
          minCleanSpeed: !flight.applied.minCleanSpeed,
          when: Date.now()
        };
        return;
      };

      
      $scope.mcsClass = function(flight) {
        var ret = '';
        
        if(flight.applied.minCleanSpeed === true) {
          ret = 'md-primary';
        }
        return ret;
      };

      /*
       * Returns a css class given an xmanFlight and a buttonSpeed
       */
      $scope.buttonClass = function(flight, buttonSpeed) {
        var def = '';
        
        if (flight.speed === '0') { // No speed request, disabled buttons, no button class
          return def;
        }

        if (flight.applied.speed === undefined) { // Nothing has been applied yet
          if (buttonSpeed === flight.speed) {
            def = 'md-accent'; // Requested speed will show as primary
          }
        } else { // We have an applied speed reduction
          if (flight.speed === flight.applied.speed) { // Applied speed equals requested speed 
            if (buttonSpeed === flight.applied.speed) { // All is good, disable input
              def = 'md-primary';
            }
          } else {
            if (buttonSpeed === flight.applied.speed) {
              def = 'md-primary';
            }
            if (buttonSpeed === flight.speed) {
              def = 'md-accent';
            }
          }
        }

        return def;
      };
    }]
  };
}]);
