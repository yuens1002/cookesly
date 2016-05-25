'use strict';

describe('Controller: SaveCtrl', function () {

  // load the controller's module
  beforeEach(module('cookbriteApp'));

  var SaveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaveCtrl = $controller('SaveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SaveCtrl.awesomeThings.length).toBe(3);
  });
});
