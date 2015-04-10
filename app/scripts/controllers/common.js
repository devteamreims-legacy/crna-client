'use strict';


/**
 * @ngdoc function
 * @name crnaClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crnaClientApp
 */
angular.module('commonControllers', ['ui.bootstrap'])
.controller('mainController', function () {
})
.controller('navBarController', ['$scope', '$state', '$modal', function($scope, $state, $modal) {
  $scope.showHelp = function() {
    return $modal.open({
      size: 'lg',
      controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
        $scope.closeHelp = function() {
          $modalInstance.dismiss();
        }
      }],
      templateUrl: 'views/help/' + $state.current.name + 'Help.html'
    });
  };
}])
.controller('configController', ['$scope', '$window', '$modal', function($scope, $window, $modal) {
  $scope.reloadPage= function() {
    return $window.location.reload();
  };

  $scope.positionModal = function() {
    return $modal.open({
      controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
        $scope.closePositionModal = function() {
          $modalInstance.dismiss();
        }
      }],
      templateUrl: 'views/config/positionModal.html'
    });
  };
}]);
