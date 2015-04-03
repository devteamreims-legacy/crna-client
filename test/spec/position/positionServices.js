'use strict';

describe('Services: socketPosition', function() {
  var socketPosition, socket;

  beforeEach(module('positionServices'));

  beforeEach(inject(function(_socketPosition_, _socket_) {
    socketPosition = _socketPosition_;
    socket = _socket_;
  }));

  it('should send a register call on the websocket', function() {
    spyOn(socket, 'emit');
    var position = {name: 11};
    socketPosition.registerPosition(position);
    expect(socket.emit).toHaveBeenCalledWith('position:register', position);
  });

  it('should send a request call on the websocket', function() {
    spyOn(socket, 'emit');
    socketPosition.requestPosition();
    expect(socket.emit).toHaveBeenCalledWith('position:request');
  });

});

describe('Services: cookiePosition', function() {
  var cookiePosition, $cookieStore;

  beforeEach(module('positionServices'));

  beforeEach(inject(function(_cookiePosition_, _$cookieStore_) {
    cookiePosition = _cookiePosition_;
    $cookieStore = _$cookieStore_;
  }));

  describe('set cookie', function() {
    it('should set a cookie with the proper value', function() {
      spyOn($cookieStore, 'put');
      var position = {name: 11};
      cookiePosition.positionToCookie(position);
      expect($cookieStore.put).toHaveBeenCalledWith('my-position', position);   
    });
  });

  describe('load cookie', function() {
    it('should load position data from cookie', function() {
      var position = {name: 30};
      spyOn($cookieStore, 'get').and.returnValue(position);
      expect(cookiePosition.positionFromCookie()).toBe(position);
      expect($cookieStore.get).toHaveBeenCalled();
    });
  }); 
});


describe('Services: myPosition', function () {

  var myPosition, cookiePosition, socketPosition;
  var cookiePositionMock, cookiePositionMockInstance;

  var position = {name: 30};

  beforeEach(module('positionServices'));

  beforeEach(function() {
    cookiePositionMock = {
      positionFromCookie: function() { return position; },
      positionToCookie: function(data) { return; }
    };
    
    angular.mock.module('positionServices', ['$provide', function($provide) {
      $provide.value('cookiePosition', cookiePositionMock);    
    }]);
    
    
  });

  beforeEach(inject(function(_myPosition_, _cookiePosition_, _socketPosition_) {
    myPosition = _myPosition_;
    socketPosition = _socketPosition_;
    cookiePosition = _cookiePosition_;
  }));

  it('should load cookie when constructed', function() {
    expect(myPosition.myPosition).toEqual(position);
  });

});
