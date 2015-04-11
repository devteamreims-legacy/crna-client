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
      templateUrl: 'views/sector/mySectorStatus.html',
      controller: 'MySectorStatusController'
    })
    .state('xman', {
      url: '/xman',
      templateUrl: 'views/xman/xman.html',
      controller: 'XmanController'
    })
    .state('ctlroom', {
      url: '/ctlroom',
      templateUrl: 'views/ctlroom.html',
      controller: 'SectorController'
    })
    .state('arcid', {
      url: '/arcid',
      templateUrl: 'views/arcid/arcid.html',
      controller: 'ArcidController',
      controllerAs: 'arcid'
    })
    .state('arcid2', {
      url: '/arcid2',
      templateUrl: 'views/arcid/arcidSearch.html',
      controller: 'ArcidController',
      controllerAs: 'arcid'
    });
}]);

