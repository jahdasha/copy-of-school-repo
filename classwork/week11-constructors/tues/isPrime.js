var prompt = require("prompt");
// Start the prompt 
prompt.start();
// Get number from the user


function isPrime(num){

	if(num === 1){
		return true;
	}
	for(i=2; i<num; i++) {
		if(num%i===0){
			return false;
		}
	}	
}

prompt.get(['number'], function (err, result) {
	if(isPrime(result.number)){
		var output = "The number "+result.number+" is prime";
	}else{
		var output = "The number "+result.number+" is NOT prime";
	}
	console.log(output);
});


