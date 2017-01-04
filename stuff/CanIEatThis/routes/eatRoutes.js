var express = require('express');
var path = require('path');
var router = express.Router();
var uuid = require('node-uuid')
var request = require('request');
var User = require('../models/models.js')[0];
var Searches = require('../models/models.js')[1];

var app = express();
var createUUID = uuid.v4();

//display main app page
router.get('/', function (req, res) {
  res.render('index', { checkSession: req.session });
});

router.get('/aboutus', function (req, res) {

  console.log(req.session )
    res.render('aboutus');
});

router.get('/searchResults', function(req, res) {

  var upc = req.query.upccode;
  
  request('http://api.foodessentials.com/label?sid=3f0b67c7-a3b6-4fb8-a5e0-a60807e4d936&n=10&appid=x93sp3m2mrn3tuzwvd5979mx&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx&u=' + upc, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('searchResults', { search: JSON.parse(body), checkSession: req.session });
    }
  })
});

router.get('/upc/:upccode', function (req, res, next) {
  //curl "http://api.foodessentials.com/label?sid=3f0b67c7-a3b6-4fb8-a5e0-a60807e4d936&n=10&appid=x93sp3m2mrn3tuzwvd5979mx&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx&u=028400071932"

  request('http://api.foodessentials.com/label?sid=3f0b67c7-a3b6-4fb8-a5e0-a60807e4d936&n=10&appid=x93sp3m2mrn3tuzwvd5979mx&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx&u=' + req.params.upccode, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var parsedBody = JSON.parse(body);

      //check if user is logged in and store results in our database
      if (req.session.logged_in) {
        User.findOne({
          where: { id: req.session.user_id }
        }).then(function (user) {
          
          //add into our database searches table based on the logged in user id
          Searches.create({
            user_search: parsedBody.product_name,
            userID: user.id,
            upcCode: req.params.upccode
          });
        });
      }
      res.send(body);
    }
  })
});


module.exports = router;
