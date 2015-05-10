'use strict';

/**
 * @ngdoc function
 * @name dashboardDirectives 
 * @description
 * # dashboardDirectives 
 * Directives for the dashboard 
 **/
angular.module('dashboardControllers', ['crnaConstants', 'sectorServices', 'trafficLoadServices', 'underscore'])
.controller('DashboardController', DashboardController);


DashboardController.$inject = ['mySectors', 'myTrafficLoad'];
function DashboardController(mySectors, myTrafficLoad) {
  var vm = this;
  vm.mySectors = mySectors;
  vm.myTrafficLoad = myTrafficLoad;
}
