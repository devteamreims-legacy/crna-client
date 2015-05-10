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
  .directive('trafficDistributionChart', trafficDistributionChart);

function trafficDistributionChart() {
  return {
    restrict: 'E',
    controller: trafficDistributionChartController,
    controllerAs: 'vm',
    scope: {
      sector: '='
    },
    template: '<nvd3 options="vm.chart.options" data="vm.chart.data"></nvd3>'
  };
}

/* Directive controller dep injection */
/* Traffic distribution chart */
trafficDistributionChartController.$inject = ['$scope', '$interval', 'trafficLoadAndDistribution', '_'];
function trafficDistributionChartController($scope, $interval, trafficLoadAndDistribution, _) {
  var vm = this;
  vm.chart = {};
  vm.chart.options = {};
  vm.chart.data = {};

  vm.chart.options.chart = {
    type: 'stackedAreaChart',
    height: 400,
    style: 'expand',
    showControls: false,
    transitionDuration: 300,
    useInteractiveGuideline: true,
    x: function(d) { return d.when; },
    y: function(d) { return d.total; },
    refreshDataOnly: true,
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

  // Add a scope watch, refresh charts when triggered
  $scope.$watch('sector', function() {
    if(promise !== undefined) {
      $interval.cancel(promise);
    }
    loadData();
    promise = setInterval();
  });

  var promise;
  function setInterval() {
    return $interval(function() {
      loadData();
    }, 5*60*1000);
    // TODO angular nvd3 has a nasty memory leak bug, we need to clear SVG data at some point
  }

  function loadData() {
    var dis = trafficLoadAndDistribution.getDistribution($scope.sector);
    var data = [];
    _.each(dis, function(d) {
      data.push({key: d.sector, values: d.load});
    });
    vm.chart.data = data; 
  } 
}
