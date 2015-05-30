'use strict';

var config = require( './config.json' );
var io = require( 'socket.io' )( 3000 );
var tw = require( 'node-tweet-stream' )( config );
tw.track( 'javascript' );
var counter = 0;
tw.on( 'tweet', function( tweet ) {
  io.emit( 'tweet', tweet );
  console.log( (counter++) + '. ' + tweet.text + '\nvia @' + tweet.user.screen_name + '\n' );
});
