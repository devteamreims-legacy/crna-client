'use strict';

/**
 * @ngdoc function
 * @name sectorServices
 * @description
 * # sectorServices
 * Services managing sectors
 */

angular.module('sectorServices', ['mainWebSocket', 'crnaConstants', 'underscore'])
.factory('mySectors', ['allSectors', 'socket', function(allSectors, socket) {
  var mySectors = ['UN', 'UB', 'KN', 'HN'];

  return {
    mySectors: mySectors,
    allSectors: allSectors,
    reduced: allSectors.reduceSector(mySectors)
  };
}])
.factory('allSectors', ['crnaSectors', 'crnaAtomicSectors', '_', function(crnaSectors, crnaAtomicSectors, _) {
  var allSectors = angular.copy(crnaSectors); // Initialize with non-expanded sectors
  /* TODO
   * Add logic here to pull a fully expanded sector list from the backend
   */

  var expandSector = function myself(name) {
    // Turns 'UXR' into ['UR', 'XR']
    // Turns '5R' into ['UXR', 'KHR'] then into ['UR', 'XR', 'KR', 'HR'] recursively
    if (crnaAtomicSectors.indexOf(name) !== -1) { // Already have an atomic sector
      return [name];
    }
    var e = _.find(allSectors, function(s) { // Find grouping name
      return s.name === name;
    });

    if(e === undefined) { // This shouldn't be happening, means we are trying to expand an unknown sector
      return [];
    }

    // At this point, we have an array of children sectors belonging to 'name', expand them

    var r = []; // Return value
    _.each(e.children, function(recur) {
      if (crnaAtomicSectors.indexOf(recur) !== -1) { // Atomic sector, push to r
        r.push(recur);
      } else { // Non atomic sector, recursively resolve it
        r.push(myself(recur));
      }
    });
    return _.flatten(r); // Flatten our return value
  };

  _.each(allSectors, function(s) { // Expand all sectors
    s.children = expandSector(s.name);
  });

  // At this point, we have a fully expanded sectors matching table */

  /*
   * Reduce a list of atomic sectors to the biggest group name
   * e.g : ['UR', 'XR'] will become ['UXR']
   */
  var reduceSector = function(sectors) {
    var e = _.find(allSectors, function(e) {
      return _.difference(sectors, e.children).length === 0;
    });
    if (e === undefined) { // Couldn't find a match, return the list of sectors
      return sectors;
    }
    return [e.name];
  };

  return {
    allSectors: allSectors,
    expandSector: expandSector,
    reduceSector: reduceSector
  };
}]);
