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

  arcid.showFlight = function(f) {
    if(f === undefined) {
      return;
    }
    arcid.displayedFlight = f;
  };
}]);
