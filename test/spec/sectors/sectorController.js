'use strict';

describe('Controller: SectorCtrl', function () {

    // load the controller's module
    beforeEach(angular.mock.module('crnaClientApp'));

    var SectorCtrl,
    MySectors,
    scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, MySectors) {
          scope = $rootScope.$new();
          MySectors = MySectors;
          SectorCtrl = $controller('SectorCtrl', {
              $scope: scope
              });
          }));

    it('should attach mySectors to the scope', function () {
        expect(scope.mySectors).toBeDefined();
        });
    });
