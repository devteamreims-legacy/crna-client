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
]);