'use strict';

/**
 * @ngdoc function
 * @name positionServices
 * @description
 * # positionServices
 * Services managing our position number
 */

angular.module('positionServices', [
  'mainWebSocket', // Our main webSocket
  'ngCookies' // Cookies
])
.factory('myPosition', ['socketPosition', 'cookiePosition', 'socket', '$log', function(socketPosition, cookiePosition, socket, $log) {
  var myPosition = {};

  
  // Load our position from cookie when instantiated
  myPosition.name = cookiePosition.positionFromCookie().name;

  /**
   * Bind websocket events
   */
  // Backend wants to assign us a position
  socket.on('position:set', function (data) { 
      $log.debug('Backend assigned us a position : ' + data.name);
      setPosition(data);
  });

  // Backend doesn't know who we are, register our position
  socket.on('position:get', function() {
    if(myPosition.name === undefined || myPosition.name === '') { // We don't have a position, we can't answer the backend yet
      $log.warn('Backend requested our position, we don\'t know it yet');
      return;
    }
    socketPosition.registerPosition(myPosition);
  });

  function setPosition(data) {
    if(data === undefined || data.name === undefined || data.name === '') {
      return;
    }
    // Set local variable, refresh $rootScope
    // Here, we could do a myPosition = data; but this would recreate a javascript object and not reference the original one
    // Thus, ending in not updating the view and losing two way syncing
    myPosition.name = data.name;
    // Register to the backend
    socketPosition.registerPosition(myPosition);
    // Set the cookie
    cookiePosition.positionToCookie(myPosition);
  }

  return { // Return our service
    myPosition: myPosition,
    setPosition: setPosition
  };
}])
/* Handles position cookie registration and loading */
.factory('cookiePosition', ['$cookieStore', '$log', function($cookieStore, $log) {
  var cookieStr = 'my-position'; // Our Cookie string

  function positionToCookie(data) { // Write cookie with position data
    if(data === undefined || data.name === undefined) { // Sanitize incoming data
      return false;
    }
    $log.debug('Storing position cookie : ' + data.name);
    return $cookieStore.put(cookieStr, data);
  }

  function positionFromCookie() { // Load position from cookie
    $log.debug('Getting position cookie');
    return $cookieStore.get(cookieStr); 
  }

  return {
    positionFromCookie: positionFromCookie,
    positionToCookie: positionToCookie
  };
}])
/* Handles position websocket communication */
.factory('socketPosition', ['socket', '$log', function(socket, $log) {
  
  function requestPosition() { // Request our position from the remote server
    $log.debug('Requesting position from backend (socket)');
    return socket.emit('position:request');
  }

  function registerPosition(data) { // Register our position to the remote server
    $log.debug('Register position ' + data.name + ' to backend');
    return socket.emit('position:register', data);
  }
  
  return {
    requestPosition: requestPosition,
    registerPosition: registerPosition
  };
}]);
