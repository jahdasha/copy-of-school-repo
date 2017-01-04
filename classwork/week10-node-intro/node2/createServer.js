var fs = require('fs'); //reads and writes files
var http = require("http");

var server = http.createServer(function(req, res) {

console.log(req.headers['user-agent']);

fs.appendFile("log.txt", req.headers['user-agent'], function(err) {
    if(err) {
        return console.log(err);
    }

    res.end("Logged");

    console.log("log.txt was updated!");
});


}).listen(8080);