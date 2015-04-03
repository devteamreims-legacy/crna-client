'use strict';

describe('Controller: SectorController', function () {

    // load the controller's module
    beforeEach(angular.mock.module('crnaClientApp'));

    var SectorController,
    mySectors,
    scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, mySectors) {
          scope = $rootScope.$new();
          mySectors = mySectors;
          SectorController = $controller('SectorController', {
              $scope: scope
              });
          }));

    it('should attach mySectors to the scope', function () {
        scope.$apply();
        expect(SectorController.mySectors).toBeDefined();
        });
    });
