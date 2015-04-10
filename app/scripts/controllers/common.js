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
      controller: function($scope, $modalInstance) {
        $scope.closeHelp = function() {
          $modalInstance.dismiss();
        }
      },
      templateUrl: 'views/help/' + $state.current.name + 'Help.html'
    });
  };
}])
.controller('configController', ['$scope', '$window', function($scope, $window) {
  $scope.reloadPage= function() {
    return $window.location.reload();
  };

}]);
