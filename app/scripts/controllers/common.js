'use strict';


/**
 * @ngdoc function
 * @name crnaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crnaClientApp
 */
angular.module('commonControllers', ['positionServices'])
.controller('mainController', function () {
})
.controller('navBarController', ['$scope', '$state', 'LxDialogService', function($scope, $state, LxDialogService) {
  $scope.showHelp = function() {
    return;
    return $modal.open({
      size: 'lg',
      controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
        $scope.closeHelp = function() {
          $modalInstance.dismiss();
        };
      }],
      templateUrl: 'views/help/' + $state.current.name + 'Help.html'
    });
  };
}])
.controller('configController', ['$scope', '$window', 'LxDialogService', function($scope, $window, LxDialogService) {
  $scope.reloadPage= function() {
    return $window.location.reload();
  };

  $scope.positionModal = function() {
    return;
    return $modal.open({
      controller: ['$scope', '$modalInstance', 'myPosition', function($scope, $modalInstance, myPosition) {
        $scope.closePositionModal = function() {
          $modalInstance.dismiss();
        };
        
        $scope.my = {selectedPosition: angular.copy(myPosition.myPosition.name)}; // Copy our current position

        $scope.savePositionAndClose = function() {
          console.log('Scope :', $scope.my.selectedPosition);
          myPosition.setPosition({name: $scope.my.selectedPosition});
          $modalInstance.dismiss();
        };

      }],
      templateUrl: 'views/config/positionModal.html'
    });
  };
}]);
