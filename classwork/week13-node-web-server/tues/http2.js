//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs'); //reads and writes files
var mysql = require('mysql'); //reads and writes files

var connection = mysql.createConnection({
  host : "localhost", // or 127.0.01
  user : "root",
  password : "",
  database: "places"
});

//Lets define a port we want to listen to
var PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
//  console.log(request.headers["user-agent"]);
console.log(request.url);


fs.readFile("template.html", "utf8", function(error, data) {
  connection.query("SELECT * FROM countries LEFT JOIN cities ON countries.id = cities.country_id WHERE countries.country='U.S.A.'", function(err, res) {
//    console.log(res);
    var newData = data.replace("{{World}}",res[0].country);
      response.end(newData);
    //
  });
});

}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});