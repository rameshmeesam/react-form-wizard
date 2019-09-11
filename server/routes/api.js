const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
   
    let userData = req.body
    let user = {email: "rock@gmail.com", password: "rock"};
    let {email,password} = user;
    console.log("request got from client : " + userData.email);
        if (email !== userData.email) {
          res.status(401).send('Invalid Email')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
  })

  module.exports = router;