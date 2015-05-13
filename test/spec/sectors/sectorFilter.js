'use strict';

describe('Filters: MySectors', function () {

  // load the controller's module
  beforeEach(module('sectorFilters'));

  describe('sectorsToString', function() {
    it('should return an - when no sectors are set',
      inject(function(sectorsToStringFilter) {
        expect(sectorsToStringFilter([])).toBe('-');
      })
    );

    it('should return UXR when sectors are UR and XR',
      inject(function(sectorsToStringFilter) {
        expect(sectorsToStringFilter(['UR', 'XR'])).toBe('UXR');
      })
    );
  });
});
