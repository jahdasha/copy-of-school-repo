var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var app = express();
//var uuid = require('node-uuid'); // required for foodessentials api "create session"

//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
app.use(cookieParser());

// setup our view engine to use handlebars
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//setup server routing to be used for site traversing
var eatRoutes = require('./routes/eatRoutes');
var users = require('./routes/users');

//app uses pre-defined routes on startup
app.use('/', eatRoutes);
app.use('/', users);

// if(searched=true){
//   res.redirect('/searchResults');
// };
// else{
//   res.send("Error!");
// }

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('listening on port '+ PORT + '!');
});
