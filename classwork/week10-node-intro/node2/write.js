var fs = require('fs'); //reads and writes files

  fs.writeFile("movies.txt", 'Inception Part, Die Hard', function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("movies.txt was updated!");
  });
}