// Make a file called best-things-ever.txt
// inside put this in with no extra whitespace or lines:
// lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap
// Make a command line app that reads what's inside best-things-ever.txt 
// and outputs each thing on a new line in the terminal. Do not output the commas.

var fs = require('fs'); //reads and writes files

fs.readFile("best-things-ever.txt", "utf8", function(error, data) {

	if (error){
	console.log(error);
	}

    var dataArr = data.split(',');
    
    for(i = 0; i<dataArr.length; i++){
    	console.log(dataArr[i]);
    }
});