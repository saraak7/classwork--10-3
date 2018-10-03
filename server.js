
//express
var express = require("express");
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));


console.log("running");

var socket = require('socket.io');
var io = socket(server);

//look for sockets opening on 3000
io.sockets.on('connection', newConnection);


function newConnection(socket){

  console.log('next connection:' + socket.id);
  //if there is a message called mouse trigger this function
  socket.on('mouse', mouseMsg);

  function mouseMsg(data){
    // servere waiting for connection - say there is a new connection - when there is a new message it logs message
    // last - when a mouse message comes in - send the same message back out
    // take name and daat in, send name and data back out
    socket.broadcast.emit('mouse', data);
    // global option
    io.sockets.emit('mouse', data);
    console.log(data);
  }

}
