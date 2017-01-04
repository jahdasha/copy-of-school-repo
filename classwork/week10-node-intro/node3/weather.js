// Write a command line node app that takes in the user's zip code and check what the weather is for that zipcode:

// if it is 45 or below console.log a sad movie's json data (your choice)
// if it is between 45 and 60 (inclusive) then console.log the json data for "Norwegian Ninja"
// if it is above 60 then console.log an action movie (make sure it has Michael Biehn in it)
// The open weather map API returns the temperature in Kelvin. You can use this formula to convert Kelvin to Fahrenheit This will help.
// ºF =(K - 273.15)* 1.8000 + 32.00

// open weather map search by zipcode url (below)
// "http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&APPID=ebcff40396082b381b5e0d0ce812562b"

// Global Variables
var request = require('request');
var zipcode = process.argv[2];
var apiKey = ",us&APPID=ebcff40396082b381b5e0d0ce812562b";
var weatherQueryUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";

request(weatherQueryUrl + zipcode + apiKey, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body);
    var weatherBody = JSON.parse(body);
    //console.log(weatherBody);

    var currentTemp = weatherBody.main.temp;
    console.log	(currentTemp);

    //ºF =(K - 273.15)* 1.8000 + 32.00

	}
});