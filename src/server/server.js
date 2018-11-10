const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

//Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

io.on('connection', client => {
  console.log('A new user has connected!');

  client.on('notification', msg => {
    io.emit('notify', msg);
    console.log('Received!', msg);
  });

  client.on('subscribeToTimer', interval => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

http.listen(process.env.PORT || 8000, () =>
  console.log(`Example app listening on port ${port}!`)
);
