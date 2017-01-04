// Create a website with 4 routes:
// Home
// Favorite Food
// Favorite Movies
// Favorite CSS Frameworks
// Serve the HTML from files rather than straight in the JavaScript

 var http = require('http'),
  url = require('url');

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

//We need a function which handles requests and send response
function handleRequest(req, res) {
  var url_parts = url.parse(req.url);
console.log(url_parts);


  switch (url_parts.pathname) {
    case '/favoriteFood':
      display_page(url_parts.pathname, req, res);
      break;
    case '/favoritemovies':
      display_portfolio(url_parts.pathname, req, res);
      break;
    case '/favoritecssframework':
      display_portfolio(url_parts.pathname, req, res);
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

function display_page(url, req, res) {
  var myHTML = '<html>';
  myHTML += '<body><h1>Home Page</h1>';
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

fs.readFile("template.html", "utf8", function(error, data) {
  connection.query("SELECT * FROM countries LEFT JOIN cities ON countries.id = cities.country_id WHERE countries.country='U.S.A.'", function(err, res) {
//    console.log(res);
    var newData = data.replace("{{World}}",res[0].country);
      response.end(newData);
    //
  });
});

}