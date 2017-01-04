var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database: "places"  //select the database you would like to full from
});

connection.connect(function(err){
	if(err){
		console.error("error connection: "); // clear error without the error code
		return;
	}

	prompt.get(["city", "hipsters", "country_id"], function (err, result) {
	    if (err){
	        console.log(err)
	    }

	// example 1 (wordier)
		var post  = {city: result.city, hipsters: result.hipsters, country_id: result.country_id};
		// console.log(post);
		var query = connection.query('INSERT INTO cities SET ?', post, function(err, result) { 
		});

	// // example 2 (less wordy)
	// 	var post  = {city: result.city, hipsters: result.hipsters, country_id:result.country_id};
	// 	var insert = "INSERT INTO cities (city, hipsters, country_id)  VALUES ('"+result.city+"','"+result.hipsters+"','"+result.country_id+"')";
	// 	//	console.log(post);
	// 	var query = connection.query(insert, function(err, result) {
	// 	});

		connection.query("SELECT * FROM countries LEFT JOIN cities ON countries.id = cities.country_id WHERE countries.country='U.S.A.'", function(err, res) {
		  if (err) throw err;
		  console.log(res);
		});
	});
});
