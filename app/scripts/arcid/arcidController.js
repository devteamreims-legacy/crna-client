'use strict';

/**
 * @ngdoc function
 * @name arcid
 * @description
 * Arcid Controllers
 */
angular.module('arcid', ['crnaConstants', 'arcidDirectives'])
.controller('arcidController', ['$scope', 'arcidFlightList', 'arcidPointProfile', function ($scope, arcidFlightList, arcidPointProfile) {
  var arcid = this;

  arcid.flightList = arcidFlightList;
  
  arcid.pointProfile = arcidPointProfile;

}]);
