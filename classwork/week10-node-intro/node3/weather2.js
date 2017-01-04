var request = require('request');

request("http://api.openweathermap.org/data/2.5/weather?zip=07112,us&APPID=ebcff40396082b381b5e0d0ce812562b", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
	}
});