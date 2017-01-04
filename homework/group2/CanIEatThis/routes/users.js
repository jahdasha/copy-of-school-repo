// Dependencies
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var path = require('path');
var User = require('../models/models.js')[0];

//this is the users_controller.js file

//allows the user to sign-out
router.get('/users/sign-out', function(req,res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  })
});

//if user tries to sign in with the wrong password or email tell them that on the page
router.post('/users/login', function(req, res) {
  User.findOne({
    where: {email: req.body.email}
  }).then(function(user) {
    bcrypt.compare(req.body.password, user.password_hash, function(err, result) {
      if (result == true){
        //make session
        req.session.logged_in = true;
        req.session.user_id = user.id;
        req.session.user_email = user.email;
        req.session.username = user.username;
        res.redirect('/');
      }
    });
  })
});

//to do: check if the username/email exist - if they do then redirect the user back to the signup page and say sorry you need to choose a new name
router.post('/users/create', function(req,res) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create({
        username: req.body.username,
        email: req.body.email,
        password_hash: hash
      }).then(function(user){
        req.session.logged_in = true;
        req.session.user_id = user.id;
        req.session.user_email = user.email;
        req.session.username = user.username;
        res.redirect('/');
      });
    });
  });
});

module.exports = router;
