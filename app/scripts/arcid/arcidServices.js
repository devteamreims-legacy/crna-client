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
.factory('arcidFlightsAutocomplete', ['$timeout', '_', 'arcidFlightList', function($timeout, _, arcidFlightList) {
  var service = {
    search: search,  
  };

  var searchCache = [];
  var searchPromise;

  // Takes a query string and returns a promise
  function search(query) {
    if(searchPromise) {
      // Cancel previous promise
      $timeout.cancel(searchPromise);
    }
    searchPromise = $timeout(function() {
      searchCache = [];
      searchCache = angular.copy(_.filter(arcidFlightList, function(callsign) {
        return callsign.match(RegExp(query, 'i'));
      }));
      searchCache = _.map(searchCache, function(callsign) {
        return {callsign: callsign, departure: 'EDDM', destination: 'EGKK' };

      console.log('Search loaded with querystring', query);
      return searchCache;
    }, 1500);

    return searchPromise;
  };

  return service;
}])
.factory('arcidFlightsHistory', ['$timeout', 'arcidHistory', 'arcidPointProfile', function($timeout, arcidHistory, arcidPointProfile) {
  var service = {
    get: get,
  };

  var flights = [];

  function get() {
    return $timeout(function() {
      flights = [];
      for(var i = 0; i < arcidHistory.length; i++) {
        flights.push(arcidHistory[i]);
      }
      console.log('History loaded !');
      return flights;
    }, 1500);
  };

  return service;
}]);
