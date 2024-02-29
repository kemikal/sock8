const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const connection = require('./lib/conn.js');

connection.connect(function(err){
    if(err) throw err
    else console.log("Uppkopplad till databasen");
  })


const usersRouter = require('./routes/users');
const chatRouter = require('./routes/chat');
// const server = require('http').server(app);
// const io = require('socket.io')(server);

// io.on("connection", function(socket) {
//   console.log("user connected");

//   socket.on("disconnect", function() {
//       console.log("user disconnected");
//   })

//   socket.on("chat message", function(message) {
//       console.log("message", message);
//       io.emit("chat message", message);
//   })
// })

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/api/users', usersRouter);
app.use('/api/chat', chatRouter);


module.exports = app;
