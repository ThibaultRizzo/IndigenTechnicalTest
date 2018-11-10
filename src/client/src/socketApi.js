import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToMessages(retrieveFn) {
  socket.emit('subscribeToMessages');
  socket.on('notify', msg => retrieveFn(null, msg));
}

function emitNotification(msg) {
  console.log('Emitted!!');
  socket.emit('notification', msg);
}

function disconnect() {
  socket.emit('disconnect');
  socket.close();
}

export { subscribeToMessages, emitNotification, disconnect };
