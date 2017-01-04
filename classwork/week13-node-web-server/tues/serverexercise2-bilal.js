var http = require('http');
var fs = require('fs');
var url = require('url');

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});


function handleRequest(req, res){
	var url_parts = url.parse(req.url);
	console.log(url_parts);


  switch (url_parts.pathname) {
    case '/':
      display_home(url_parts.pathname, req, res);
      break;
    case '/food':
      display_food(url_parts.pathname, req, res);
      break;
    case '/movies':
      display_movie(url_parts.pathname, req, res);
      break;
    case '/css':
      display_css(url_parts.pathname, req, res);
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

function display_home(url,req,res) {
	fs.readFile("home.html", "utf8", function(error, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
}

function display_food(url,req,res) {
	fs.readFile("food.html", "utf8", function(error, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
}

function display_movie(url,req,res) {
	fs.readFile("movie.html", "utf8", function(error, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
}
function display_css(url,req,res) {
	fs.readFile("css.html", "utf8", function(error, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
}

function display_404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}