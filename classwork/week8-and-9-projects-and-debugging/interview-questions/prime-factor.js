function primeFactorsIT(){
		var i = 2;
		var	primes = [];
		var	num = 600851475143;

	    for(i=2; i<num; i++) {
	    	if(num%i===0){
	    		num = num / i;
	    		console.log(i);
	    		primes.push(num);
	    	}
	    }
	    
	    console.log(i);
	    console.log(primes);
	    return i;

}

primeFactorsIT();


//  --------------------------------------------

function primeFactors(){
	var i = 2;
	var	primes = [];
	var	num = 600851475143;

	while (num>i){
    	if(num%i===0){
    		num = num / i;
    		console.log(i);
    		primes.push(num);
    	}
    	i++
	}
	console.log(i);
	console.log(primes);
	return i;
}