'use strict';

describe('Controller: XmanCtrl', function () {

  // load the controller's module
  beforeEach(module('crnaClientApp'));

  var XmanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    XmanCtrl = $controller('XmanCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
