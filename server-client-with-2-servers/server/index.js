'use strict';

let port = 5001;
let clientPort = 5002;
let io = require('socket.io')(port);
let ioClient = require('socket.io-client');
var socketClient = ioClient.connect(`http://localhost:${clientPort}`);

socketClient.on('connect', () => {
  console.log('io server connected!');
  socketClient.emit('myServerEvent', 'Message sent by server.');
});

socketClient.on('myClientEvent', (data) => {
  console.log('MESSAGE RECEIVED FROM CLIENT:', data);
});
