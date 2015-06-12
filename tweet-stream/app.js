'use strict';

var config = require( './config.json' );
var express = require( 'express' );
var app = express();
var serveStatic = require( 'serve-static' );
var server = require( 'http' ).Server( app );
var io = require( 'socket.io' )( server );
var tw = require( 'node-tweet-stream' )( config );
var counter = 0;

app.use( serveStatic( __dirname + '/public' ) );
app.get( '/', function( req, res ) {
  res.sendFile( __dirname + '/public/index.html' );
});


io.on( 'connection', function( socket ) {
  console.log( 'socket.io connected!' );
  tw.track('wordcampbh');
  tw.on( 'tweet', function( tweet ) {
    socket.emit( 'tweet', tweet );
    console.log( (counter++) + '. ' + tweet.text + '\nvia @' + tweet.user.screen_name + '\n', tweet );
  });
});

server.listen( 3000 );
console.log( 'Magic happens on http://localhost:3000' );
