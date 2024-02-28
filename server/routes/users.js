const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', (req,res) =>{

  let userEmail = req.body.userEmail
  let userPassword = req.body.userPassword

  

})

module.exports = router;
