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
    'xman', // Xman
    'commonControllers' // Controllers communs
]);
