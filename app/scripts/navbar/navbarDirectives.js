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
    restrict: 'A',
    controller: ['$window', function($window) {
      var vm = this;
      vm.reloadApp = function() {
        $window.location.reload();
      };
    }],
    controllerAs: 'reloadApp',
    transclude: true,
    template: '<div ng-click="reloadApp.reloadApp()" ng-transclude></div>'
  };
})
// Handle dialog linking
.directive('crnaChoosePosition', function() {
  return {
    restrict: 'A',
    transclude: true,
    controller: [function() {
      var vm = this;
      vm.openPositionDialog = function() {
        //LxDialogService.open('position-dialog');
      };
    }],
    controllerAs: 'choosePosition',
    template: '<div ng-click="choosePosition.openPositionDialog()" ng-transclude></div>' +
              '<div ng-include="\'views/config/positionDialog.html\'"></div>'
  };
})
// What's inside the dialog
.directive('crnaChoosePositionForm', function() {
  return {
    restrict: 'E',
    controller: ['$scope', 'myPosition', function($scope, myPosition) {
      var vm = this;
      vm.my = {selectedPosition: angular.copy(myPosition.myPosition.name)};

      vm.closeDialog = function() {
        //LxDialogService.close('position-dialog');
      };

      vm.saveAndCloseDialog = function() {
        console.log('Saving position:', vm.my.selectedPosition);
        myPosition.setPosition({name: vm.my.selectedPosition});
        vm.closeDialog();
      };
    }],
    controllerAs: 'choosePositionForm',
    templateUrl: 'views/config/_positionChoiceForm.html'
  };
})
.directive('crnaHelpButton', function() {
  return {
    restrict: 'A',
    transclude: true,
    controller: ['$state', function($state) {
      var vm = this;
      vm.open = function() {
        //LxDialogService.open('help-dialog');
      };
      vm.close = function() {
        //LxDialogService.close('help-dialog');
      };
      vm.title = function() {
        return $state.current.name;
      };
      vm.subTemplateUrl = function() {
        return 'views/help/' + $state.current.name + 'Help.html';
      };

    }],
    controllerAs: 'helpDialog',
    template: '<div ng-click="helpDialog.open()" ng-transclude></div>' +
              '<div ng-include="\'views/help/_helpDialog.html\'"></div>'
    
  };  
  
});


