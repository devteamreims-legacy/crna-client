'use strict';

/**
 * @ngdoc function
 * @name trafficLoadDirectives
 * @description
 * # trafficLoadDirectives
 * Directives to manage traffic-load
 **/
angular
  .module('trafficLoadDirectives', ['trafficLoadServices', 'nvd3', 'underscore'])
  .directive('trafficLoadChart', myTrafficLoadChart)
  .directive('trafficDistributionChart', myTrafficDistributionChart);

/* Directive */
function myTrafficLoadChart() {
  return {
    restrict: 'E',
    controller: myTrafficLoadChartController,
    controllerAs: 'vm',
    template: '<nvd3 options="vm.chart.options" data="vm.chart.data"></nvd3>'
  };
}

function myTrafficDistributionChart() {
  return {
    restrict: 'E',
    controller: myTrafficDistributionChartController,
    controllerAs: 'vm',
    template: '<nvd3 options="vm.chart.options" data="vm.chart.data"></nvd3>'
  };
}

/* Directive controller dep injection */
myTrafficLoadChartController.$inject = ['myTrafficLoad', '_'];

/* Directive controller */
function myTrafficLoadChartController(myTrafficLoad, _) {
  var vm = this;
  vm.chart = {};
  vm.chart.options = {};
  vm.chart.options.chart = {
    type: 'lineChart',
    height: 450,
    transitionDuration: 300,
    xAxis: {
      tickFormat: function(d) {
        return d3.time.format('%H:%M')(new Date(d));
      }
    },
    yAxis: {
      tickFormat: function(d) {
        return d3.format('d')(d);
      }
    }
  };
  
  /* Load traffic load */
  var tl = myTrafficLoad.getLoad();
  var load = tl.load.map(function(d) {
    return {
      x: d.when,
      y: d.total
    };
  });

  vm.chart.data = [{area: true, key: tl.sector[0], values: load}];
}

/* Traffic distribution chart */
myTrafficDistributionChartController.$inject = ['myTrafficLoad', '_'];
function myTrafficDistributionChartController(myTrafficLoad, _) {
  var vm = this;
  vm.chart = {};
  vm.chart.options = {};
  vm.chart.data = {};

  vm.chart.options.chart = {
    type: 'areaChart',
    height: 450,
    transitionDuration: 300,
    xAxis: {
      tickFormat: function(d) {
        return d3.time.format('%H:%M')(new Date(d));
      }
    },
    yAxis: {
      tickFormat: function(d) {
        return d3.format('.0%')(d);
      }
    }
  };

  vm.chart.data = myTrafficLoad.getDistribution();


}
