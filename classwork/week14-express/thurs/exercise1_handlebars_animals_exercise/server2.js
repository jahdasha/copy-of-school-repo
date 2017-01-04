var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var animals = [
  {animalType: 'dog', pet: true, fierceness: 4},
  {animalType: 'giraffe', pet: false, fierceness: 4},
  {animalType: 'zebra', pet: false, fierceness: 8},
  {animalType: 'cat', pet: true, fierceness: 10},
  {animalType: 'lion', pet: false, fierceness: 10}
];

app.get('/dog', function(req,res) {
  //handlebars requires an object to be sent to the dog handlebars file
  //lucky for us, animals[0] is an object!

  //1. send the dog object from the animals array to the dog handlebars file.
  res.render('dog', animals[0]);
});

app.get('/all-pets', function(req,res) {
  //handlebars requires an object to be sent to the index handlebars file

  //2. send the animals to the index handlebars file. Remember that animals is an array and not an object.
var trueAnimal = [];

//console.log(animals[i].pet);

for (var i = 0; i < animals.length; i++) {

   if (animals[i].pet === true) {
   trueAnimal.push(animals[i]);
   }
 }
console.log(trueAnimal);
  // var data = {
  //   anims : [animals[0], animals[1]]
  // }
 res.render("index2", {isAPet: (trueAnimal)});

});

app.get('/all-non-pets', function(req,res) {
  //handlebars requires an object to be sent to the index handlebars file.

  //3. send all the animals that are not pets to the index handlebars file.
  var trueAnimal = [];

  for (var i = 0; i < animals.length; i++) {

     if (animals[i].pet === false) {
     trueAnimal.push(animals[i]);
     }
   }

  var data = {
    people : ["gdfgfd","fsdfds","fdsgfdgfd"],
    anims : [{animalType: 'mammal', pet: true, fierceness: 2},{animalType: 'mamsmal', pet: true, fierceness: 2},{animalType: 'mammal', pet: true, fierceness: 2},{animalType: 'mammal', pet: true, fierceness: 2},{animalType: 'mammal', pet: true, fierceness: 2},{animalType: 'mammal', pet: true, fierceness: 2},{animalType: 'mammal', pet: true, fierceness: 2},{animalType: 'mammal', pet: true, fierceness: 2}]
  }

  res.render('index2', data);

});

var port = 3000;
app.listen(port, function(){

  console.log("Running");
});