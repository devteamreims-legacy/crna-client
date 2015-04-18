'use strict';

/**
 * @ngdoc function
 * @name trafficLoadServices
 * @description
 * # trafficLoadServices
 * Services managing traffic load
 */

angular.module('trafficLoadServices', ['sectorServices', 'underscore', 'crnaConstants'])
.factory('singleTrafficLoad', [function() {
  // Constructor
  function SingleTrafficLoad(sector) {
    this.sector = sector;
    this.load = [];
    // Load random values
    // Range : Now - 5 minutes -> Now + 30 minutes
    for(var i = -5;i <= 30; i++) {
      var _load = {
        when: Date.now() + i*60*1000,
        total: Math.floor((Math.random() * 20) + 1)
      };
      this.load.push(_load);
    }
  }

  SingleTrafficLoad.build = function(data) {
    if(data.sector === undefined) {
      return; // Invalid data passed to the constructor
    }
    return new SingleTrafficLoad(data.sector);
  };
  
  return SingleTrafficLoad;

}])
.factory('distributedTrafficLoad', distributedTrafficLoad)
.factory('myTrafficLoad', myTrafficLoad);

/*
 * myTrafficLoad
 * Get current traffic-load
 * Get traffic-load distribution
 */
myTrafficLoad.$inject = ['mySectors', 'singleTrafficLoad', 'distributedTrafficLoad'];
function myTrafficLoad(mySectors, singleTrafficLoad, distributedTrafficLoad) {
  var data = {};

  var service = {
    getLoad: getLoad,
    getDistribution: getDistribution
  };

  function loadAll() {
    data.myLoad = singleTrafficLoad.build({sector: mySectors.reduced});
    data.myDistribution = distributedTrafficLoad.getDistribution({sector: mySectors.reduced});
  }

  function getLoad() {
    return data.myLoad;
  }

  function getDistribution() {
    return data.myDistribution;
  }

  loadAll();

  return service;
}

/*
 * distributedTrafficLoad
 * Get distribution of traffic load on a given group of sectors
 */
distributedTrafficLoad.$inject = ['mySectors', 'singleTrafficLoad', 'crnaSectors', '_'];
function distributedTrafficLoad(mySectors, singleTrafficLoad, crnaSectors) {
  var service = {
    getDistribution: getDistribution
  };

  var distribution = [];
  function getDistribution(sector) {
    var childs = _.find(crnaSectors, function(i) { return i.name === sector });
    if(childs === undefined) {
      return distribution; // We have an atomic sector, return empty distribution
    }
    return distribution;
  }

  return service;

}
