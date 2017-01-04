var request = require('request');
request('http://www.rutgers.edu', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
	var fs = require('fs'); //reads and writes files
	fs.writeFile("index.html", body, function(err) {
		if(err) {
			return console.log(err);
		}
	});
	}
});



