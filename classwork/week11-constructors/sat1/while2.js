var prompt = require('prompt');

prompt.start();

var life = {
    hungry: 'yes',
    keepPromptingUser : function() {
        prompt.get(['hungry'], function(err, result) {    
            life.hungry = result.hungry; 

            if (life.hungry == 'yes'){
                console.log("Here's some Pad See Ew!")
                life.keepPromptingUser();
                // this.keepPromptingUser(); did not work
                // life.keepPromptingUser(); did work
            }else{
                console.log("Take a nap. You had a big meal.");
            }
        });
    }

}

life.keepPromptingUser();