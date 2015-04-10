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
      templateUrl: 'views/help/' + $state.current.name + 'Help.html'
    });
  };
}]);
