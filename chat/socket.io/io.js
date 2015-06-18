'use strict';

module.exports = function( io ) {
  function init() {
    initSocketEvents();
  }

  function initSocketEvents() {
    io.on( 'connection', function( socket ) {
      console.log( 'a user connected' );
      socket.on( 'disconnect', handleDisconnect );
      socket.on( 'chat message', handleChatMessage );
      socket.on( 'is typing', handleTyping );
    });
  }

  function handleDisconnect() {
    console.log( 'user disconnected' );
  }

  function handleChatMessage( msg ) {
    this.broadcast.emit( 'chat message', msg );
  }

  function handleTyping( typing ) {
    this.broadcast.emit( 'is typing', typing );
  }

  init();
};
