// Write a command line app that opens a file on your computer and console.log out the first 500 characters of that file

var fs = require('fs'); //reads and writes files

fs.readFile("overview-full-stack-flex-program.txt", "utf8", function(error, data) {

	if (error){
	console.log(error);
	}

    var res = data.substring(1, 500);
    console.log(res);
});