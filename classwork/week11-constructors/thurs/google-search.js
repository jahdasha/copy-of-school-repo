// Create a node app that will take in as input the user's name
// console log out that name along with the results of a google search for the name that was inputted.
// The ​*request*​ URL that you are hitting would be like:
// https://www.google.com/search?q=michael

	var prompt = require("prompt");
	var request = require("request");

	// Start the prompt 
	prompt.start();


	prompt.get(["username"], function (err, result) {

		var username = result.username;
		var url = "https://www.google.com/search?q=";

		request(url + username, function (error, response, body) {
			console.log(body);
		});

	});
