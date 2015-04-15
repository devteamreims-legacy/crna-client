'use strict';

/**
 * @ngdoc function
 * @name navbarDirectives 
 * @description
 * # navbarDirectives
 * Directives for xman
 **/
angular.module('navbarDirectives', ['positionServices'])
// Reload Application 
.directive('crnaReloadApp', function() {
  return {
    restrict: 'E',
    controller: ['$window', function($window) {
      var vm = this;
      vm.reloadApp = function() {
        $window.location.reload();
      };
    }],
    controllerAs: 'reloadApp',
    transclude: true,
    template: '<span ng-click="reloadApp.reloadApp()" ng-transclude></span>'
  };
})
// Handle dialog linking
.directive('crnaChoosePosition', function() {
  return {
    restrict: 'E',
    transclude: true,
    controller: ['$mdDialog', function($mdDialog) {
      var vm = this;
      vm.openPositionDialog = function($event) {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event, // Click event used to construct dialog
          templateUrl: '/views/config/_positionDialog.html',
          controller: ['$mdDialog', 'myPosition', function($mdDialog, myPosition) {
            var vm = this;
            vm.my = {selectedPosition: angular.copy(myPosition.myPosition.name)};

            vm.closeDialog = function() {
              $mdDialog.hide();
            };

            vm.saveAndCloseDialog =  function() {
              console.log('Saving position:', vm.my.selectedPosition);
              myPosition.setPosition({name: vm.my.selectedPosition});
              vm.closeDialog();
            };
          }],
          controllerAs: 'choosePositionDialog',
        });
      };
    }],
    controllerAs: 'choosePosition',
    template: '<span ng-click="choosePosition.openPositionDialog($event)" ng-transclude></span>'
  };
})
.directive('crnaHelpButton', function() {
  return {
    restrict: 'E',
    transclude: true,
    controller: ['$mdDialog', '$state', function($mdDialog, $state) {
      var vm = this;
      vm.open = function($event) {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event,
          templateUrl: '/views/help/_helpDialog.html',
          controller: 'HelpDialogController',
          controllerAs: 'helpDialog',
          locals: {
            title: vm.title(),
            subTemplateUrl: vm.subTemplateUrl()
          }
        });
      };
      vm.close = function() {
        $mdDialog.hide();
      };
      vm.title = function() {
        return $state.current.name;
      };
      vm.subTemplateUrl = function() {
        return 'views/help/' + $state.current.name + 'Help.html';
      };

    }],
    controllerAs: 'helpDialog',
    template: '<span ng-click="helpDialog.open()" ng-transclude></span>'
  };  
})
.controller('HelpDialogController', ['title', 'subTemplateUrl', function(title, subTemplateUrl) {
  var vm = this;
  vm.title = title;
  vm.subTemplateUrl = subTemplateUrl;
}]);


