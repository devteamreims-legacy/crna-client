'use strict';

/**
 * @ngdoc function
 * @name arcid
 * @description
 * Arcid Controllers
 */
angular.module('arcidController', ['crnaConstants', 'arcidDirectives', 'arcidServices', 'underscore'])
.controller('ArcidController', ArcidController);

ArcidController.$inject = ['$scope', 'arcidFlightsAutocomplete', 'arcidFlightsHistory', 'arcidFlight'];
function ArcidController($scope, allArcidFlights, arcidFlightsHistory, arcidFlight) {
  var vm = this;
  vm.loading = true;
  vm.displayedFlight = false;
  vm.showFlight = function(f) {
    if(f === undefined || f.callsign === undefined) {
      return;
    }
    vm.displayedFlight = f;
  };
}
