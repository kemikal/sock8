const express = require('express');
const router = express.Router();
const { randomUUID } = require('crypto');

const connection = require('../lib/conn.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', (req,res) =>{

  let userEmail = req.body.userEmail
  let userPassword = req.body.userPassword

  

})

// Create a new user
router.post('/add', function(req, res) {
  let userName = req.body.username;
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  let userId = randomUUID();

  let sql = "INSERT into users (userId, userName, userEmail, userPassword) VALUES (?, ?, ?, ?)";
  let values = [userId, userName, userEmail, userPassword];

  connection.query(sql, values, (err, data) => {
    if (err) console.log("err", data);
    res.json({ message: "Your account has been created"});
  })
})


module.exports = router;
