const express = require('express');
const router = express.Router();
const connection = require('../lib/conn.js')
const { randomUUID } = require('crypto');


/* GET all users*/ 
router.get('/', function(req, res) {
 connection.connect((err)=> {
  if(err) console.log(err)

    let query = `SELECT *
                 FROM users`;
  connection.query(query , (err, result) => {
    if(err) console.log(err)
    let newResult = Object.keys(result).length // Checks the lenght of the result

    
    if(newResult == 0) {
      res.status(404).json({message: 'No users exist'})
    } else {
      result.forEach(user => {
        delete user.userPassword
      })
      res.json(result)
      console.log(result)
    }
  })
 })
});

/**Get specific user by id */

router.get('/:id', (req, res) => {
  let id = req.params.id;

  connection.connect((err) => {
    if (err) throw err;

    let query = `SELECT *
                 FROM users
                 WHERE userID = ?`;
    let values = [id]

    connection.query(query, values, (err, result) => {
      if (err) throw err;

      result.forEach(user => {
        delete user.userPassword
      })
        res.json(result)
    })
  })
})

router.post('/login', (req,res) =>{

  let userEmail = req.body.userEmail
  let userPassword = req.body.userPassword

  

})

// Create a new user
router.post('/add', function(req, res) {
  let userName = req.body.userName;
  let userEmail = req.body.userEmail;
  let userPassword = req.body.userPassword;
  let textColour = req.body.textColour;
  let userId = randomUUID();
  
  let sql = "INSERT into users (userId, userName, userEmail, userPassword, textColour) VALUES (?, ?, ?, ?, ?)";
  let values = [userId, userName, userEmail, userPassword, textColour];

  connection.query(sql, values, (err, data) => {
    if (err) console.log("err", err);
    res.json({ message: "Your account has been created"});
  })
})


module.exports = router;
