function Life(hungry){
	var person = this; // uses this this to reference the scope

	this.hungry = hungry;
	this.keepPromptingUser = function() {
		prompt.start();

		prompt.get(['hungry'], function(err, result) {    
		    person.hungry = result.hungry; 

		    if (person.hungry == 'yes'){
		        console.log("Here's some Pad See Ew!")
		        person.keepPromptingUser();
		    }else{
		        console.log("Take a nap. You had a big meal.");
		    }
		});
	}
}

module.exports = Life;