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
    controller: trafficLoadChartController,
    controllerAs: 'vm',
    scope: {
      sector: '=',
    },
    template: '<nvd3 options="vm.chart.options" data="vm.chart.data"></nvd3>'
  };
}

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
trafficLoadChartController.$inject = ['$scope', '$timeout', 'trafficLoadAndDistribution', '_'];

/* Directive controller */
function trafficLoadChartController($scope, $timeout, trafficLoadAndDistribution, _) {
  var vm = this;
  vm.chart = {};
  vm.chart.options = {};
  vm.chart.options.chart = {
    type: 'lineChart',
    height: 400,
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
  
  $scope.$watch('sector', function () {
    if(promise !== undefined) {
      $timeout.cancel(promise);
    }
    promise = setInterval();
    loadData();
  });

  var promise;
  /* Set a refresh timer */
  function setInterval() {
    return $timeout(function() {
      loadData();
      promise = setInterval();
    }, 15000);
  }

  /* Load traffic load */
  function loadData() {
    var tl = trafficLoadAndDistribution.getLoad($scope.sector);
    vm.chart.data = [{key: tl.sector, values: tl.load}];
  }
}

/* Traffic distribution chart */
trafficDistributionChartController.$inject = ['$scope', '$timeout', 'trafficLoadAndDistribution', '_'];
function trafficDistributionChartController($scope, $timeout, trafficLoadAndDistribution, _) {
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
      $timeout.cancel(promise);
    }
    loadData();
    promise = setInterval();
  });

  var promise;
  function setInterval() {
    return $timeout(function() {
      loadData();
      promise = setInterval();
    }, 15000);
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
