'use strict';

/**
 * @ngdoc function
 * @name navbarDirectives 
 * @description
 * # navbarDirectives
 * Directives for xman
 **/
angular.module('navbarDirectives', [])
// Reload Application 
.directive('crnaReloadApp', function() {
  return {
    restrict: 'A',
    controller: ['$window', function($window) {
      var vm = this;
      vm.reloadApp = function() {
        $window.location.reload();
      };
    }],
    controllerAs: 'c',
    transclude: true,
    template: '<div ng-click="c.reloadApp()" ng-transclude></div>'
  };
});
