var express = require('express');
var router = express.Router();
var sandwich = require('../models/sandwich.js');

router.get('/', function(req,res) {
	res.redirect('/sandwiches')
});

router.get('/sandwiches', function(req,res) {
	sandwich.all(function(data){
		var hbsObject = {sandwiches : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/sandwiches/create', function(req,res) {
	sandwich.create(['sandwich_name', 'devoured'], [req.body.sandwich_name, req.body.devoured], function(data){
		res.redirect('/sandwiches')
	});
});

router.put('/sandwiches/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	sandwich.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/sandwiches');
	});
});

module.exports = router;