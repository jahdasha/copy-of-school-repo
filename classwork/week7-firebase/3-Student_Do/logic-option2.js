// Link to Firebase
var clickData = new Firebase("https://jahdasha-tester.firebaseio.com/");

// Set Initial Counter 
var initialValue = 100;
var clickCounter = initialValue;	

// --------------------------------------------------------------
 $("#clickButton").on("click", function() {
    clickData.update({
        dbClickCount: clickCounter
    });
})
// At the initial load, get a snapshot of the current data. 
	// Print the initial data to the console.	
	// Change the html to reflect the initial value.
	// Change the clickcounter to match the data in the database
	// Log the value of the clickCounter
	// Change the HTML Value
	// If any errors are experienced, log them to console. 

clickData.on("value", function(snapshot){
	console.log(snapshot.val());
	$("#clickValue").html(initialValue);
	clickCounter = snapshot.val().dbClickCount;
	console.log(clickCounter);
	$("#clickValue").html(snapshot.val().dbClickCount);
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {

	// Reduce the clickCounter by 1
	// Alert User and reset the counter
	// Save new value to Firebase
	// Log the value of clickCounter

	clickCounter --;
	if (clickCounter == 0 ) {
		alert("Phew! You made it! That sure was a lot of clicking.");
		clickCounter = initialValue;
	}
	dbClickCount: clickCounter;
	console.log(clickCounter);
});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {

	// Set the clickCounter back to initialValue	
	// Save new value to Firebase
	// Log the value of clickCounter
	// Change the HTML Values

	clickCounter = initialValue;
	dbClickCount: clickCounter;
	console.log(clickCounter);
	$('#clickValue').html(clickCounter);

});

