const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const connection = require('./lib/conn.js')

connection.connect(function(err){
    if(err) throw err
    else console.log("Uppkopplad till databasen");
  })


const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/api/users', usersRouter);

module.exports = app;
