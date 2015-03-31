'use strict';
/**
 * @ngdoc overview
 * @name crnaClientApp
 * @description
 * # crnaClientApp
 *
 * Main module of the application.
 */
angular
.module('crnaClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'btford.socket-io',
    'crnaRoutes', // Angular-ui-router routes
    'position', // Position module
    'sector', // Secteurs
    'commonControllers' // Controllers communs
])
/*
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/xman', {
      templateUrl: 'views/xman.html',
      controller: 'XmanCtrl'
    })
    .when('/arcid', {
      templateUrl: 'views/arcid.html',
      controller: 'ArcidCtrl'
    })
    .when('/ctlroom', {
      templateUrl: 'views/ctlroom.html',
      controller: 'SectorCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}])*/;
