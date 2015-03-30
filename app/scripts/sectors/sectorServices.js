'use strict';

/**
 * @ngdoc function
 * @name sectorServices
 * @description
 * # sectorServices
 * Services managing sectors
 */

angular.module('sectorServices', ['mainWebSocket'])
.service('MySectors', ['socket', function(socketSecteur) {
  this.mySectors = ['UR', 'XR', 'KR', 'HR'];
}]);
