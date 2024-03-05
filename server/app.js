const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const connection = require('./lib/conn.js');
require('dotenv').config()



connection.connect(function(err){
    if(err) throw err
    else console.log("Uppkopplad till databasen");
  })


const usersRouter = require('./routes/users');
const chatRouter = require('./routes/chat');

const app = express();

app.listen(process.env.PORT || '3000')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/api/users', usersRouter);
app.use('/api/chat', chatRouter);


module.exports = app;
