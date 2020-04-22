let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');
// let favicon = require('serve-favicon')

// app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});


io.of('/stream').on('connection', stream);
var PORT = process.env.PORT || 5000;

server.listen(PORT);
// var express = require('express');
// var app = express();

// var http = require('http');
// var server = http.Server(app);

// app.use(express.static('client'));

// server.listen(PORT, function() {
//   console.log('Chat server running');
// });

// var io = require('socket.io')(server);

// io.on('connection', function(socket) {
//   socket.on('message', function(msg) {
//     io.emit('message', msg);
//   });
// });
