'use strict';

describe('Service: save', function () {

  // load the service's module
  beforeEach(module('cookbriteApp'));

  // instantiate service
  var save;
  beforeEach(inject(function (_save_) {
    save = _save_;
  }));

  it('should do something', function () {
    expect(!!save).toBe(true);
  });

});
