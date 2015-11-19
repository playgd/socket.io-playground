'use strict';

let clientPort = 5002;
let ioClient = require('socket.io-client');
var socketClient = ioClient.connect(`http://localhost:${clientPort}`);

socketClient.on('connect', () => {
  console.log(`io server connected from client on port ${clientPort}!`);
  socketClient.emit('myServerEvent', 'Message sent by server.');
});

socketClient.on('myClientEvent', (data) => {
  console.log('MESSAGE RECEIVED FROM CLIENT:', data);
});

socketClient.on('disconnect', () => {
  console.log('io server disconnected from client!');
})
