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
    /* Expects a string */
    this.sector = sector;
    this.load = [];
    // Load random values
    // Range : Now - 5 minutes -> Now + 30 minutes
    for(var i = -5;i <= 90; i++) {
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
.factory('trafficLoadAndDistribution', trafficLoadAndDistribution)
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
 * trafficLoadAndDistribution
 * Traffic load and distribution on a specific sector/group of sectors
 * Defaults to mySectors if no parameters passed
 */

trafficLoadAndDistribution.$inject = ['mySectors', 'singleTrafficLoad', 'distributedTrafficLoad'];
function trafficLoadAndDistribution(mySectors, singleTrafficLoad, distributedTrafficLoad) {
  var service = {
    getLoad: getLoad,
    getDistribution: getDistribution
  };
  
  function getLoad(sector) {
    sector = typeof sector !== 'undefined' ? sector : mySectors.reduced;
    return singleTrafficLoad.build({sector: sector});
  }
  
  function getDistribution(sector) {
    sector = typeof sector !== 'undefined' ? sector : mySectors.reduced;
    return distributedTrafficLoad.getDistribution({sector: sector});
  }

  return service;
}

/*
 * distributedTrafficLoad
 * Get distribution of traffic load on a given group of sectors
 */
distributedTrafficLoad.$inject = ['mySectors', 'singleTrafficLoad', 'crnaSectors', '_'];
function distributedTrafficLoad(mySectors, singleTrafficLoad, crnaSectors, _) {
  var service = {
    getDistribution: getDistribution
  };

  function getDistribution(data) {
    var distribution = [];
    if(data === undefined || data.sector === undefined) {
      return distribution;
    }
    var c = _.find(crnaSectors, function(i) { return i.name === data.sector; });
    if(c === undefined || c.children === undefined || c.children.length === 0) {
      // We have an atomic sector, return a single load object
      return [singleTrafficLoad.build({sector: data.sector})];
    }
    _.each(c.children, function(d) {
      distribution.push(singleTrafficLoad.build({sector: d}));
    });

    return distribution;
  }

  return service;

}
