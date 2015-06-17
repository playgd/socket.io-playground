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

server.listen( 3000 );
console.log( 'The chat magic is happen on http://localhost:3000' );
