const express = require('express');

const http = require('http');

const path = require('path');

const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

var app = express();

//create our own server appart from express
// var server = http.createServer((req, res) => {
//
// });
//because http.createServer is so integrated into express
//we can instead use
var server = http.createServer(app)

var io = socketIO(server);

//define port
const port = process.env.PORT || 3000;

//create middleware to serve static pages
//define from where to serve static pages
app.use(express.static(publicPath));

//register an event to start listening on
io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect',() => {
    console.log('Client disconnected from server');
  });
});


// app.get('/', (req, res) => {
//   res.render('index.html');
//
// });

// app.listen(port, () => {
//   console.log(`server is up on port ${port}`);
// });
//the previous code changes to
server.listen(port, () => {
  console.log(`server is up on port ${port}`);
});

//method 1 to navigate to a directory
//console.log(__dirname + '/../public');

//better method to navigate to a directory
//console.log(publicPath);
