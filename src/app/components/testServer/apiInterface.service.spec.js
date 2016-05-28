(function() {
  'use strict';

  describe('service apiInterface', function() {
    var apiInterface;

    beforeEach(module('whitebridge'));
    beforeEach(inject(function(_apiInterface_) {
      apiInterface = _apiInterface_;
    }));

    it('should be registered', function() {
      expect(apiInterface).not.toEqual(null);
    });

    describe('getData function', function() {
      it('should exist', function() {
        expect(apiInterface.getData).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = apiInterface.getData();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
