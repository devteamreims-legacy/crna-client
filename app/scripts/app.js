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
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.socket-io',
    'sector', // Secteurs
    'commonControllers' // Controllers communs
])
.config(function ($routeProvider) {
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
});
