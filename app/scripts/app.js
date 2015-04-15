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
    'ngMaterial',
    'crnaRoutes', // Angular-ui-router routes
    'position', // Position module
    'navbar', // Navbar
    'sector', // Secteurs
    'xman', // Xman
    'arcid', // arcid
    'eap', // Extended ATC Planner
    'commonControllers' // Controllers communs
]);
