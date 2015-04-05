'use strict';

/**
 * @ngdoc function
 * @name crnaConstants
 * @description
 * Multiple services with static content (sectors, positions) 
 */

angular.module('crnaConstants', [])
.constant('crnaAtomicSectors', [
    'UR', 'XR', 'KR', 'YR', 'HR',
    'UB', 'UN', 'KN', 'HN',
    'KD',
    'UF', 'KF',
    'E', 'UE', 'XE', 'KE', 'HE',
    'SE', 'UH', 'XH', 'KH', 'HH'
])
.constant('crnaSectors',[ 
    { name: 'UXR',    children: ['UR', 'XR'] },
    { name: 'UXKR',   children: ['UR', 'XR', 'KR'] },
    { name: 'KHR',    children: ['KR', 'YR', 'HR'] },
    { name: 'HYR',    children: ['YR', 'HR'] },
    { name: '5R',     children: ['UXR', 'KHR'] },
    { name: 'UBN',    children: ['UN', 'UB'] },
    { name: 'UBKN',   children: ['UBN', 'KN'] },
    { name: 'KHN',    children: ['KN', 'HN'] },
    { name: '4N',     children: ['UB', 'UN', 'KN', 'HN'] }
])
.constant('crnaPositions', [
    '30', '31', '32', '33', // 4R
    '34', '35', '36', '37', // 4N
    '20', '21', '22', '23', // KD + 4H + FIR
    '24', '25', '26', '27', // 4E + 2F
    '11', '12', '13', '14'  // FIR + KF + Nuit
])
.constant('xmanStubData', [ // Stub data for xman module
    // http://google-styleguide.googlecode.com/svn/trunk/jsoncstyleguide.xml?showone=Property_Name_Format#Property_Name_Format
  {
    flightId: 1234,
    callsign: 'BAW63G',
    delay: 19,
    speed: -3,
    applied: {
      position: 12,
      when: Date.now() - 1000*60*10, // 10 minutes ago
      sectors: ['UR', 'XR'],
      speed: -2
    }
  },
  {
    flightId: 1235,
    callsign: 'BAW677',
    delay: 21,
    speed: -4,
    applied: {}
  },
  { 
    flightId: 1236,
    callsign: 'EZS1023',
    delay: 10,
    speed: -4,
    applied: {
      position: 14,
      when: Date.now() - 1000*60*4, // 4 minutes ago
      sectors: ['UF', 'KF', 'KD'],
      speed: 0
    }
  },
  {
    flightId: 1237,
    callsign: 'UAE77',
    delay: 35,
    speed: -4,
    applied: {
      position: 14,
      when: Date.now() - 1000*60*8,
      sectors: ['UF', 'KF'],
      speed: -4
    }
  }
])
.constant('xmanDefaultSpeeds', [
  'mcs', // Minimum clean speed
  -4, -3, -2, -1, 0
]);
