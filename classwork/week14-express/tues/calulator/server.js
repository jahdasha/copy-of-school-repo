	var express = require("express");
	var bodyParser = require('body-parser')
	var app = express();
	var logger = require("morgan");

	app.use(bodyParser.urlencoded({extended: true}));
	app.listen(3001);
	app.use(logger("dev"));

// Calculator Exercise (review params and get request):

// You will create an express app with one get route. Follow the numbered instructions that were slacked out to you.
// The get route will consist of three parameters, an operation, a number and a second number.
// There are four values a user may use. add, subtract, multiply, divide.
// When the route is hit, your browser should display the result of the math operation and the numbers
// Example: When the user goes to this url http://localhost:3000/addition/10/1, the page will display 11.

// example 1
	app.get('/addition', function (req, res) {

		res.send('Hello World');
		// res.render('addition');

	});

// // example 2
// 	// morgan allows the :num1/:num2 to be addded
// 	app.get('/addition/:num1/:num2', function (req, res) {

// 		var number1 = parseInt(req.params.num1);
// 		var number2 = parseInt(req.params.num2);
// 		var total = number1 + number2;
// 		res.send('the total is ' + total);
// 		//res.send('num1 is '+ req.params.num1 + ' and num2 is '+ req.params.num2);

// 		console.log('num1 is '+ req.params.num1);
// 		console.log('num2 is '+ req.params.num2);
// 		console.log(total);
// 	});

// example 3
	// morgan allows the :num1/:num2 to be addded
	app.get('/:operation/:num1/:num2', function (req, res) {

		console.log(req.params);
		var number1=parseInt(req.params.num1);
		var number2=parseInt(req.params.num2);

		if(req.params.operation=="addition"){
		  var total= number1 + number2;
		}

		if(req.params.operation=="subtraction"){
		  var total= number1 - number2;
		}

		if(req.params.operation=="multiplication"){
		  var total = number1 * number2;
		}

		res.send("the outcome is "+total);

	});