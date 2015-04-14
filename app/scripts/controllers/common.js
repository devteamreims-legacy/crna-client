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
}]);
