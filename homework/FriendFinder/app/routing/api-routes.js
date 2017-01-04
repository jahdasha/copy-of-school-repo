// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information from other files
// ===============================================================================
var friendsArray 		= require('../data/friends.js');
var path 			= require('path');

// ROUTING
// ===============================================================================
module.exports = function(app){
// 	Your api-routes.js file should include two routes:

//res.json sends a JSON response composing of a stringified version of the specified data, which in this case will be the friendsArray, which
//is a JSON of all possible friends.
app.get('/api/friends', function(req, res){
	res.json(friendsData);
});

/// This route checks the array of survey answers in ( req.body ) sent to it vs the friendsArray in friends.js.
//It essentially handles incoming survey results and the compatiablity against friendsArray.
app.post('/api/friends-check', function(req, res){

//hopethisworks is an array that will store all the objects with the compared score numbers and differences
var hopeThisWorks = [];
for (var i =0; i< friendsArray.length; i++){

//make a variable to store each individual friends array result
var friendWithArray = friendsArray[i]
var totalDifference =0

//compare the individual scores from the array
for (var j =0; j< friendsArray[i].scores.length; j++){

// api check scores and then api will take the scores that they were submitted and compares the results from friends.js
//The req.body.scores comes from the survey results that people entered
//Math.abs makes a negative number  positive
//+= means to append on the page
totalDifference += Math.abs(req.body.scores[j] - friendsArray[i].scores[j])
 };

//Calculate each difference from the friendsWithArray. Remember the friendWithArray is from the friends.js file, which is 
//why its important to use the path mdm because it can link other files
 friendWithArray.total = totalDifference;

//push the total differences into the hopethisworks array. This will compare the differences for each question
 hopeThisWorks.push(friendWithArray)
	 };
	 console.log(hopeThisWorks)

//comparing each survey result against the tempUser and then resetting the TempUser to the survey score. Remember
//we made the hopeThisWorks variable earlier to store the different results for each question
var tempUser = {total:1000}
for (var k =0; k< hopeThisWorks.length; k++){
if (hopeThisWorks[k].total < tempUser.total){
	tempUser = hopeThisWorks[k]
}
}

//res.json(): Sends a JSON response composed of a stringified version of the specified data.

res.json(tempUser);

});
}