'use strict';

let port = 5002;
let io = require('socket.io')(port);

io.on('connect', (socket) => {
  console.log(`io client connected on port ${port}!`);

  socket.emit('myClientEvent', 'Message sent by client.');
  socket.on('myServerEvent', (data) => {
    console.log('MESSAGE RECEIVED FROM SERVER:', data);
  });
});

io.on('disconnect', () => {
  console.log('io client disconnected!');
});
