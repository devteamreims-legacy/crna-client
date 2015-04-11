'use strict';

/**
 * @ngdoc function
 * @name arcid
 * @description
 * Arcid Controllers
 */
angular.module('arcidController', ['crnaConstants', 'arcidDirectives', 'arcidServices', 'underscore'])
.controller('ArcidController', ['$scope', 'allArcidFlights', '_', function ($scope, allArcidFlights, _) {
  var arcid = this;
  arcid.flightList = new allArcidFlights().flights;

  arcid.displayedFlights = [];

  $scope.addDisplayedFlight = function(f) {
    arcid.displayedFlights = _.without(arcid.displayedFlights, f); // Remove if already present
    arcid.displayedFlights.unshift(f);
    arcid.displayedFlights = arcid.displayedFlights.slice(0, 4); // Keep 4 elements only
  };
}]);
