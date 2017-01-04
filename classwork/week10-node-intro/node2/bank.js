// Make a command line node app called bank.js that will do the following:

// this outputs the total you have in your bank account

// node bank.js total
// this deposits 4.4 in so bank.txt gets 4.4 appended to the list

// node bank.js deposit 4.4
// this withdraws 4.4 from the bank.txt file

// node bank.js withdraw 3.2



var fs = require('fs'); //reads and writes files
console.log(process.argv[2]);

if (process.argv[2] === "total"){
	fs.readFile("bank.txt", "utf8", function(error, data) {

		if (error){
		console.log(error);
		}

		var dataArr = data.split(',');
		var	total = 0;

		for(i = 0; i<dataArr.length; i++){
		var num = parseFloat(dataArr[i]);
		total += num;
		//console.log(num);
		}
		console.log(total);
	});
}