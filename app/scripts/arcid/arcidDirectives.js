'use strict';

/**
 * @ngdoc function
 * @name arcidDirectives 
 * @description
 * # arcidDirectives
 * Directives for xman
 **/
angular.module('arcidDirectives', ['angularMoment', 'arcidServices'])
// ARCID Single flight detail panel
.directive('arcidFlightPanel', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/arcid/_arcidFlightPanel.html',
    scope: {
      flight: '='
    }
  };
})
.directive('arcidHistory', arcidHistory)
.directive('arcidSearch', arcidSearch);

/* arcidHistory */
function arcidHistory() {
  return {
    restrict: 'E',
    templateUrl: 'views/arcid/_arcidHistory.html',
    controller: arcidHistoryController,
    controllerAs: 'vm',
    scope: {
      loading: '=',
      selectFlight: '='
    }
  };
}

arcidHistoryController.$inject = ['$scope', 'arcidFlightsHistory'];
function arcidHistoryController($scope, arcidFlightsHistory) {
  var vm = this;
  $scope.loading = true;
  vm.selectFlight = $scope.selectFlight;

  arcidFlightsHistory.get()
  .then(function(flights) {
    $scope.loading = false;
    vm.history = flights;
  });
}

/* arcidSearch */
function arcidSearch() {
  return {
    restrict: 'E',
    templateUrl: 'views/arcid/_arcidSearch.html',
    controller: arcidSearchController,
    controllerAs: 'vm',
    scope: {
      loading: '=',
      query: '=',
      selectFlight: '='
    }
  };
}

arcidSearchController.$inject = ['$scope', 'arcidFlightsAutocomplete'];
function arcidSearchController($scope, arcidFlightsAutocomplete) {
  var vm = this;
  $scope.loading = true;
  vm.selectFlight = $scope.selectFlight;

  var promise;
  $scope.$watch('query', function() {
    $scope.loading = true;
    if(promise && promise.resolve) {
      promise.resolve();
    }
    promise = arcidFlightsAutocomplete.search($scope.query)
    .then(function(flights) {
      $scope.loading = false;
      vm.flights = flights;
    });
  });


}
