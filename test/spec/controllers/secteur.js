'use strict';

describe('Controller: SecteurCtrl', function () {

  // load the controller's module
  beforeEach(module('crnaClientApp'));

  var SecteurCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecteurCtrl = $controller('SecteurCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.).toBe(3);
  });
});
