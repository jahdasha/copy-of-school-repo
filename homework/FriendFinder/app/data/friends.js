
// DATA
// Below is the friendsArray. The friendsArray is more static where the results are set vs the survey results are more fluid.

var friendsArray = [
	{
		name: "Ahmed",
		photo: "https://www.placecage.com/200/300",
		scores: [
		5,
	    1,
	    3,
	    2,
  		5,
  	    1,
	    2,
	    3,
	    4,
	    1
	     ]
	},
	{
		name: "Angel",
		photo: "https://www.placecage.com/g/200/300",
		scores: [
		5,
	    1,
	    4,
	    4,
  		5,
  	    1,
	    2,
	    5,
	    4,
	    1
	     ]
	}

];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friendsArray; 