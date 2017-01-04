var request = require("request");

//var xls = require("xlsx");


//console.log(xls);
var a = "hello";
console.log(a);



//http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10


request('http://api.giphy.com/v1/gifs/search?q=dog&api_key=dc6zaTOxFJmzC&limit=10', function (error, response, body) {
    if (!error && response.statusCode == 200) {


var newBody = JSON.parse(body); // JSON.parse() makes this an object


console.log(newBody.data[0].type);

	// fs.writeFile(name+".html", body, function(err) {
 //    if(err) {
 //        return console.log(err);
 //    }
}



}); 




if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('sample.xlsx');
/* DO SOMETHING WITH workbook HERE */

var name = workbook.Props.Title;
//console.log(workbook);


var fs = require('fs');

request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {


	fs.writeFile(name+".html", body, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

   //     console.log(body); // Show the HTML for the Modulus homepage.


    }
});

