'use strict';

describe('Service: recipes', function () {

  // load the service's module
  beforeEach(module('cookbriteApp'));

  // instantiate service
  var recipes;
  beforeEach(inject(function (_recipes_) {
    recipes = _recipes_;
  }));

  it('should do something', function () {
    expect(!!recipes).toBe(true);
  });

});
