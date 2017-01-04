var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
	host : "localhost", // or 127.0.01
	user : "root",
	password : "",
	database: "bears_db"  //select the database you would like to full from
});

// console.log(connection); check to see if connection has been created

connection.connect(function(err){
	if(err){
		console.error("error connection: "); // clear error without the error code
		return;
	}

	prompt.get(["name", "favorite_food", "personality"], function (err, result) {
	    if (err){
	        console.log(err)
	    }

		var post  = {name: result.name, favorite_food: result.favorite_food, personality: result.personality};
		// console.log(post);
		var query = connection.query('INSERT INTO happy_bears SET ?', post, function(err, result) { 
		});

		connection.query("SELECT * FROM happy_bears", function(err, result) {
		  if (err) throw err;
		  console.log(result); 
		});

		// // to get the 1st row
		// SELECT * FROM happy_bears LIMIT 0, 1;
		// //
		// SELECT * FROM happy_bears LIMIT 2, 4;
		// SELECT * FROM happy_bears LIMIT 2, 0;

		// var deleteFirstBear = function(){
		// 	connection.query("DELETE FROM happy_bears LIMIT 1;", function (err, result) {
		// 	  if (err) throw err;
		// 	  console.log(result.rows); 
		// 	})
		// }
		var deleteFirstBear  = function (){
			connection.query('SELECT * FROM happy_bears LIMIT 1', function(err,res){
				if (!err) {
					console.log(res[0].id);
					connection.query('DELETE FROM happy_bears WHERE id =\''+res[0].id+'\'',function(err2,res2){
						if (err2) console.log(err2)
					})
				} else console.log(err)
			})
		};
		deleteFirstBear();
	});
});

