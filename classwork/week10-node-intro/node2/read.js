var fs = require('fs'); //reads and writes files

fs.readFile("movies.txt", "utf8", function(error, data) {
    console.log(data);

    var dataArr = data.split(',');

    console.log(dataArr);

});