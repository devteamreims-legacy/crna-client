'use strict';

/**
 * @ngdoc function
 * @name crnaRouting
 * @description
 * angular-ui-router configuration
 * https://github.com/angular-ui/ui-router
 */

angular.module('crnaRoutes', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/'); // Unmatched URLs, redirect to /

  $stateProvider
    .state('root', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'mainController'
    })
    .state('xman', {
      url: '/xman',
      templateUrl: 'scripts/xman/views/xman.html',
      controller: 'XmanController'
    })
    .state('ctlroom', {
      url: '/ctlroom',
      templateUrl: 'views/ctlroom.html',
      controller: 'SectorController'
    })
    .state('arcid', {
      url: '/arcid',
      templateUrl: 'views/arcid.html',
      controller: 'arcidController'
    });
}]);

