'use strict';

describe('Controller: ArcidCtrl', function () {

  // load the controller's module
  beforeEach(module('crnaClientApp'));

  var ArcidCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArcidCtrl = $controller('ArcidCtrl', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
