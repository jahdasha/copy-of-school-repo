var http = require('http'),
  url = require('url');
  var fs = require("fs");
  

//Lets define a port we want to listen to
var PORT = process.env.PORT;

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
    case '/':
      display_page(url_parts.pathname, req, res);
      break;
    case '/favoritefood':
      display_page(url_parts.pathname, req, res);
      break;
    case '/favoritemovies':
      display_page(url_parts.pathname, req, res);
      break;
    case '/favoritecssframework':
      display_page(url_parts.pathname, req, res);
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

function display_page(url, req, res) {
console.log(url)
fs.readFile(url+".html","utf8", function(error, myHTML){
  console.log(myHTML)
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
  
})

}

function display_404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}