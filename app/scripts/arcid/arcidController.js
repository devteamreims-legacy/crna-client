'use strict';

/**
 * @ngdoc function
 * @name arcid
 * @description
 * Arcid Controllers
 */
angular.module('arcidController', ['crnaConstants', 'arcidDirectives', 'arcidServices', 'underscore'])
.controller('ArcidController', ['$scope', 'arcidFlightsAutocomplete', 'arcidFlightsHistory', '_', function ($scope, allArcidFlights, arcidFlightsHistory, _) {
  var vm = this;
  vm.loading = true;
  vm.showFlight = function(f) {
    if(f === undefined) {
      return;
    }
    vm.displayedFlight = f;
  };
}]);
