'use strict';

/**
 * @ngdoc function
 * @name crnaClientApp.controller:XmanCtrl
 * @description
 * # XmanController
 * Controller of the crnaClientApp
 */
angular.module('xmanController', ['crnaConstants', 'xmanDirectives'])
.controller('XmanController', ['xmanStubData', function (xmanStubData) {
  var vm = this;
  vm.xmanData = xmanStubData;
}]);
