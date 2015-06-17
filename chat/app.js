'use strict';
var express = require( 'express' );
var app = express();
var serveStatic = require( 'serve-static' );
var server = require( 'http' ).Server( app );
var io = require( 'socket.io' )( server );

app.use( serveStatic( __dirname + '/public' ) );

app.get( '/', function( req, res ) {
  res.sendFile( __dirname + '/public/index.html' );
});

io.on( 'connection', function( socket ) {
  console.log( 'a user connected' );
  socket.on( 'disconnect', function() {
    console.log( 'user disconnected' );
  });

  socket.on( 'chat message', function( data ) {
    console.log( data );
  });
});

server.listen( 3000 );
console.log( 'The chat magic is happen on http://localhost:3000' );
