const express = require('express');
const router = express.Router();
const connection = require('../lib/conn.js')

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

router.post('/:id', (req, res) => {
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

module.exports = router;
