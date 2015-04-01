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
.service('myPosition', ['socketPosition', 'cookiePosition', 'socket', function(socketPosition, cookiePosition, socket) {
  var vm = this;

  vm.setPosition = setPosition; // Sets our position, sets a cookie with it, sends update to the remote server
  
  vm.myPosition = cookiePosition.positionFromCookie();
  
  /**
   * Bind websocket events
   */
  // Backend wants to assign us a position
  socket.on('position:set', function (data) { 
    setPosition(data);
  });
  // Backend doesn't know who we are, register our position
  socket.on('position:get', function(data) {
    if(vm.myPosition.name === undefined || vm.myPosition.name === '') { // We don't have a position, we can't answer the backend yet
      return;
    }
    socketPosition.registerPosition(myPosition);
  });

  

  function setPosition(data) {
    if(data === undefined || data.name === undefined || data.name === '') {
      return;
    }
    // Set local variable
    vm.myPosition = data;
    // Register to the backend
    socketPosition.registerPosition(vm.myPosition);
    // Set the cookie
    cookiePosition.positionToCookie(vm.myPosition);
  }
}])
/* Handles position cookie registration and loading */
.service('cookiePosition', ['$cookieStore', function($cookieStore) {
  var vm = this;

  vm.positionToCookie = positionToCookie; // Write cookie with position data
  vm.positionFromCookie = positionFromCookie; // Load position from cookie

  var cookieStr = 'my-position'; // Our Cookie string

  function positionToCookie(data) {
    if(data === undefined || data.name === undefined) { // Sanitize incoming data
      return false;
    }
    return $cookieStore.put(cookieStr, data);
  }

  function positionFromCookie() {

    return $cookieStore.get(cookieStr); 
  }
}])
/* Handles position websocket communication */
.service('socketPosition', ['socket', function(socket) {
  var vm = this;
  
  vm.requestPosition = requestPosition; // Request our position from the remote server
  vm.registerPosition = registerPosition; // Register our position to the remote server
  vm.myPosition = {}; // position data, our parent service (myPosition) will keep this in sync

  function requestPosition() {
    return socket.emit('position:request');
  }

  function registerPosition(data) {
    return socket.emit('position:register', data);
  }
}]);
