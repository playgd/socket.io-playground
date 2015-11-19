'use strict';

let clientPort = 5002;
let ioClient = require('socket.io-client')(`http://localhost:${clientPort}`);

ioClient.on('connect', () => {
  console.log(`io server connected from client on port ${clientPort}!`);
  ioClient.emit('myServerEvent', 'Message sent by server.');
});

ioClient.on('myClientEvent', (data) => {
  console.log('MESSAGE RECEIVED FROM CLIENT:', data);
});

ioClient.on('disconnect', () => {
  console.log('io server disconnected from client!');
})
