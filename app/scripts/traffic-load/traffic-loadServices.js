'use strict';

/**
 * @ngdoc function
 * @name trafficLoadServices
 * @description
 * # trafficLoadServices
 * Services managing traffic load
 */

angular.module('trafficLoadServices', ['sectorServices', 'underscore'])
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
.factory('myTrafficLoad', ['mySectors', 'singleTrafficLoad', function(mySectors, singleTrafficLoad) {
  var myLoad = [];
  
  var service = {
    getLoad: getLoad
  };

  function loadLoad() {
    myLoad = [];
    for(var i = 0; i < mySectors.mySectors.length;i++) {
      myLoad.push(singleTrafficLoad.build({sector: mySectors.mySectors[i]}));
    }
  }

  function getLoad() {
    return myLoad;
  }

  loadLoad();

  return service;
}]);
