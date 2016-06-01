'use strict';

describe('Service: styleIt', function () {

  // load the service's module
  beforeEach(module('cookbriteApp'));

  // instantiate service
  var styleIt;
  beforeEach(inject(function (_styleIt_) {
    styleIt = _styleIt_;
  }));

  it('should do something', function () {
    expect(!!styleIt).toBe(true);
  });

});
