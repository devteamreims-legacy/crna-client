'use strict';

/**
 * @ngdoc function
 * @name trafficLoadDirectives
 * @description
 * # trafficLoadDirectives
 * Directives to manage traffic-load
 **/
angular.module('trafficLoadDirectives', ['trafficLoadServices', 'nvd3', 'underscore'])
.directive('trafficLoadChart', myTrafficLoadChart);

/* Directive */
function myTrafficLoadChart(myTrafficLoad) {
  return {
    restrict: 'E',
    controller: myTrafficLoadChartController,
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
    type: 'multiBarChart',
    height: 450,
    stacked: true,
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
  vm.chart.data = [];
  _.each(tl, function(l) {
    vm.chart.data.push({key: l.sector, values: l.load});
  });
}
