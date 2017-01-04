var express = require('express');
var mysql = require('mysql');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

// database, username, password, {host: will either be localhost or host address, dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'}
var sequelize = new Sequelize('ment2_rcb', 'ment2_26','6xvDMHBT', {
  host: "db154.pair.com",
  dialect: 'mysql'
});

var User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
});

var PORT = process.env.NODE_ENV || 3045;

var app = express();

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function(req, res) {
  var msgIn = req.query.msg;
  res.render('home',{msg: msgIn});
});

app.post('/register', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.create({
    email: email,
    password: password
  }).then(function(result) {
    res.redirect('/success');
  }).catch(function(err) {
    res.redirect('/?msg=' + err.message);
  });
});

app.post('/login', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({
    where: {
      email: email,
      password: password
    }
  }).then(function(result) {
      if(result) {
        res.redirect('/success');
      } else {
        res.redirect('/?msg=Invalid login');
      }
  });
});

// app.get('/success', function(req, res) {
//   res.send('SUCCESS PAGE!');
// });


app.get('/success', function(req, res)
{
  User.findAll({
    // attributes: ['id', 'email', 'password']
  }).then(function(result){
    console.log(result);
      res.render("success", {user: result}); //html
      // res.send(result); just sends raw info of result
  });
});


sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});
