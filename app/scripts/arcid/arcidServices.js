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
.factory('arcidFlight', ['$q', '$timeout', 'arcidPointProfile', 'arcidFlightList', function($q, $timeout, arcidPointProfile, arcidFlightList) {
  var service = {
    get: get
  };

  var localCache = [];
  var currentRequest;
  
  // Returns a promise of a single flight object
  function get(callsign) {
    // Cancel previous request
    if(currentRequest) {
      $timeout.cancel(currentRequest);
    }
    // Search cache first
    var cached = _.find(localCache, function(c) {
      return c.callsign === callsign;
    });
    if(cached) {
      var def = $q.defer();
      def.resolve(cached);
      return def.promise;
    }
    // Nothing in cache, mock a request to the backend

    return $timeout(function() {
      if(arcidFlightList.indexOf(callsign) === -1) {
        console.log('Not found!');
        return {};
      }
      var obj = {};
      obj.callsign = callsign;
      obj.departure = 'EDDM';
      obj.destination = 'EGLL';
      obj.pointProfile = angular.copy(arcidPointProfile);
      localCache.push(obj);
      return obj;
    }, 1500);
  }

  return service;
}])
// List all arcid flights
.factory('arcidFlightsAutocomplete', ['$timeout', '_', 'arcidFlightList', function($timeout, _, arcidFlightList) {
  var service = {
    search: search 
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
      });

      console.log('Search loaded with querystring', query);
      return searchCache;
    }, 1500);

    return searchPromise;
  };

  return service;
}])
.factory('arcidFlightsHistory', ['$timeout', 'arcidHistory', 'arcidPointProfile', function($timeout, arcidHistory, arcidPointProfile) {
  var service = {
    get: get
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
