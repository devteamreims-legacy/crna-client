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
  .directive('trafficLoadChart', trafficLoadChart)
  .directive('trafficDistributionChart', trafficDistributionChart);

/* Directive */
function trafficLoadChart() {
  return {
    restrict: 'E',
    controller: myTrafficLoadChartController,
    controllerAs: 'vm',
    scope: {
      sector: '=chartSector',
    },
    template: '<nvd3 options="vm.chart.options" data="vm.chart.data"></nvd3>'
  };
}

function trafficDistributionChart() {
  return {
    restrict: 'E',
    controller: myTrafficDistributionChartController,
    controllerAs: 'vm',
    scope: {
      sector: '=chartSector'
    },
    template: '<nvd3 options="vm.chart.options" data="vm.chart.data"></nvd3>'
  };
}

/* Directive controller dep injection */
myTrafficLoadChartController.$inject = ['$scope', 'myTrafficLoad', '_'];

/* Directive controller */
function myTrafficLoadChartController($scope, myTrafficLoad, _) {
  var vm = this;
  vm.chart = {};
  vm.chart.options = {};
  vm.chart.options.chart = {
    type: 'lineChart',
    height: 450,
    transitionDuration: 300,
    useInteractiveGuideline: true,
    x: function(d) { return d.when; },
    y: function(d) { return d.total; },
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

  vm.chart.data = [{key: tl.sector, values: tl.load}];
}

/* Traffic distribution chart */
myTrafficDistributionChartController.$inject = ['$scope', 'myTrafficLoad', '_'];
function myTrafficDistributionChartController($scope, myTrafficLoad, _) {
  var vm = this;
  vm.chart = {};
  vm.chart.options = {};
  vm.chart.data = {};

  vm.chart.options.chart = {
    type: 'stackedAreaChart',
    height: 450,
    style: 'expand',
    showControls: false,
    transitionDuration: 300,
    useInteractiveGuideline: true,
    x: function(d) { return d.when; },
    y: function(d) { return d.total; },
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

  var dis = myTrafficLoad.getDistribution();

  var data = [];

  _.each(dis, function(d) {
    data.push({key: d.sector, values: d.load});
  });
  
  vm.chart.data = data; 
   
}
