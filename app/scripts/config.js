'use strict';
/**
 * @ngdoc overview
 * @name crnaClientApp
 * @description
 * # crnaClientApp.config
 *
 * Main configuration of the application.
 */
angular.module('crnaClientApp')
.config(['$mdThemingProvider', function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('deep-orange', {
      'default': '500'
    });
  $mdThemingProvider.theme('success-warning')
    .primaryPalette('green')
    .accentPalette('deep-orange');
}]);
