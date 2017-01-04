// = Requirements ================================================================s
  var express = require('express');
  var app = express();
  var request = require('request');
  var cheerio = require('cheerio');

// = Database configuration ================================================
  var mongojs = require('mongojs');
  var databaseUrl = "scraperr";
  var collections = ["scrapedData"];
  var db = mongojs(databaseUrl, collections);
  db.on('error', function(err) {
    console.log('Database Error:', err);
  });

// = Routes ================================================================
  app.get('/', function(req, res) {
    res.send("Hello world");
  });

  // = api ================================================================

  //Get the data from DB (scrapedData)
  app.get('/all', function(req, res) {
    db.scrapedData.find({}, function(err, found) {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });

  //Scrapes the data from the requested site then saves it to the DB (scrapedData)
  app.get('/scrape', function(req, res) {
    request('https://news.ycombinator.com/', function(error, response, html) {
      var $ = cheerio.load(html);
      $('.title').each(function(i, element) {
        var title = $(this).children('a').text();
        var link = $(this).children('a').attr('href');

        if (title && link) { // if there is a title and link save that in the DB
          db.scrapedData.save({ // you can also use db.scrapedData.insert
            title: title,
            link: link
            // this is an object being saved into the scrapedData collection
          }, function(err, saved) {
            if (err) {
              console.log(err);
            } else {
              console.log(saved);
            }
          });
        }
      });
    });
    res.send("Scrape Complete");
  });


  app.listen(3000, function() {
    console.log('App running on port 3000!');
  });
