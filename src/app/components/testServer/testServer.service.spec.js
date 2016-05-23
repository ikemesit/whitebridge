(function() {
  'use strict';

  describe('service testServer', function() {
    var testServer;

    beforeEach(module('whitebridge'));
    beforeEach(inject(function(_testServer_) {
      testServer = _testServer_;
    }));

    it('should be registered', function() {
      expect(testServer).not.toEqual(null);
    });

    describe('getData function', function() {
      it('should exist', function() {
        expect(testServer.getData).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = testServer.getData();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
