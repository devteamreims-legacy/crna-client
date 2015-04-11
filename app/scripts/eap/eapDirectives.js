'use strict';

/**
 * @ngdoc function
 * @name eapDirectives
 * @description
 * # eapDirectives
 * Directives related to the extended ATC planner
 **/
angular.module('eapDirectives', ['crnaConstants'])
.directive('eapMessages', [function() {
  return {
    restrict: 'E',
    templateUrl: 'views/eap/_eapMessages.html',
    controller: ['eapStubMessages', function(eapStubMessages) {
      var vm = this;
      vm.my = {};
      vm.my.messages = angular.copy(eapStubMessages);

      vm.panelClass = function(message) {
        var ret = 'panel-default';
        switch(message.category) {
          case 'stam':
            ret = 'panel-info';
            break;
          case 'hotspot':
            ret = 'panel-warning';
            break;
          case 'regulation':
            ret = 'panel-primary';
            break;
          default:
            break;
        }
        return ret;
      };
    }],
    controllerAs: 'ctrl'
  };
}]);
