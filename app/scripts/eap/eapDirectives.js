'use strict';

/**
 * @ngdoc function
 * @name eapDirectives
 * @description
 * # eapDirectives
 * Directives related to the extended ATC planner
 **/
angular
  .module('eapDirectives', ['crnaConstants'])
  .directive('eapMessagesList', eapMessagesList)
  .directive('eapMessage', eapMessage);





/* Message list directive */
function eapMessagesList() {
  return {
    restrict: 'E',
    templateUrl: 'views/eap/_eapMessagesList.html',
    controller: ['eapStubMessages', function(eapStubMessages) {
      var vm = this;
      vm.my = {};
      vm.my.messages = angular.copy(eapStubMessages);
    }],
    scope: true,
    controllerAs: 'vm'
  };
}

/* Single Message directive */
function eapMessage() {
  return {
    restrict: 'E',
    templateUrl: 'views/eap/_eapMessage.html',
    controller: ['$scope', function($scope) {
      var vm = this;
      vm.my = {};
      vm.my.message = $scope.message;

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
    controllerAs: 'vm',
    scope: {
      message: '='
    }
  };
}

