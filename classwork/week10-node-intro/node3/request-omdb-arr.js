var request = require('request');

movie = process.argv[2];


request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
	}
});


