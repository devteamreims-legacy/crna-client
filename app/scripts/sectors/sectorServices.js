'use strict';

/**
 * @ngdoc function
 * @name sectorServices
 * @description
 * # sectorServices
 * Services managing sectors
 */

angular.module('sectorServices', ['btford.socket-io'])
// Socket.io Factory
.factory('socketSecteur', ['socketFactory', function (socketFactory) {
  var myFactory = socketFactory({
  });
  return myFactory;
}])
.service('MySectors', ['socketSecteur', function(socketSecteur) {
  this.mySectors = ['UR', 'XR', 'KR', 'HR'];
}]);
