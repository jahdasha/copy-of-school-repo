var mysql = require("mysql");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database: "places"  //select the database you would like to full from
});

connection.connect(function(err){
	if(err){
		console.error("error connection: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
	// threadId is your unique key for when you connect to the mysql server
});

// //show tables query
// connection.query("show tables", function(err, res){
// 	if(err) throw err;
// 	console.log(res);
// });

// //select everything from cities tables query
// connection.query("select * from cities", function(err, res){
// 	if(err) throw err;
// 	console.log(res);
// });

//console.log(connection);

// SELECT Customers.CustomerName, Orders.OrderID FROM Customers LEFT JOIN Orders ON Customers.CustomerID=Orders.CustomerID ORDER BY Customers.CustomerName;
// Question is...in one sql statement how do get back the hipister counts from all US cities with hipsters? Display the cities in alphabetical order.
connection.query("SELECT * FROM countries LEFT JOIN cities ON countries.id = cities.country_id WHERE countries.country='U.S.A.'", function(err, res) {
  if (err) throw err;
  console.log(res);
});