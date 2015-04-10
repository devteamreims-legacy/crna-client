'use strict';


/**
 * @ngdoc function
 * @name crnaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crnaClientApp
 */
angular.module('commonControllers', ['ui.bootstrap', 'positionServices'])
.controller('mainController', function () {
})
.controller('navBarController', ['$scope', '$state', '$modal', function($scope, $state, $modal) {
  $scope.showHelp = function() {
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
.controller('configController', ['$scope', '$window', '$modal', 'myPosition', function($scope, $window, $modal, myPosition) {
  $scope.reloadPage= function() {
    return $window.location.reload();
  };

  $scope.positionModal = function() {
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
