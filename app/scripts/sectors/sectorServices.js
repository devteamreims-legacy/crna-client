'use strict';

/**
 * @ngdoc function
 * @name sectorServices
 * @description
 * # sectorServices
 * Services managing sectors
 */

angular.module('sectorServices', ['mainWebSocket'])
.service('mySectors', ['socket', function(socket) {
  this.mySectors = ['UR', 'XR', 'KR', 'HR'];
}]);
