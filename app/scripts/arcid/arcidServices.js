'use strict';

/**
 * @ngdoc function
 * @name arcidServices 
 * @description
 * # arcidServices
 * Services for ARCID module
 */

angular.module('arcidServices', ['crnaConstants', 'underscore'])
// Single flight with pointprofile
.factory('arcidFlight', ['arcidPointProfile', function(arcidPointProfile) {
  // Constructor
  function ArcidFlight(callsign) {
    this.callsign = callsign;
    this.departure = 'EDDM';
    this.destination = 'EGLL';
    this.pointProfile = angular.copy(arcidPointProfile); // Initialize point profile with stub data
  }

  
  // Static method to call constructor (arcidFlight.build(...))
  ArcidFlight.build = function(data) {
    if(data.callsign === undefined || data.callsign.length === 0) {
      return; // Invalid data passed to the builder
    }
    return new ArcidFlight(data.callsign);
  };
  
  return ArcidFlight;
}])
// List all arcid flights
.factory('allArcidFlights', ['arcidFlightList', 'arcidFlight', function(arcidFlightList, arcidFlight) {
  // Constructor
  function AllArcidFlights() {
    this.flights = [];
    for (var i = 0; i < arcidFlightList.length; i++) {
      this.flights.push(arcidFlight.build({callsign: arcidFlightList[i]}));
    }
  }

  return AllArcidFlights;
}]);
