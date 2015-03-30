'use strict';

describe('Filters: MySectors', function () {

  // load the controller's module
  beforeEach(module('sectorFilters'));

  describe('toString', function() {
    it('should return an X when no sectors are set',
      inject(function(toStringFilter) {
        expect(toStringFilter([])).toBe('X');
    }));
  });
});
