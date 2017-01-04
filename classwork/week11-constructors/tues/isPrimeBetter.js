var prompt = require("prompt");
prompt.start();

function isPrime(n) {
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
	if (n%2==0) return (n==2);
	if (n%3==0) return (n==3);
	var m=Math.sqrt(n); // assigns the square root of the number to m
	for (var i=5;i<=m;i+=6) {
		if (n%i==0)     return false;
		if (n%(i+2)==0) return false;
	}
	return true;
}

prompt.get(['number'], function (err, result) {
	if(isPrime(result.number)){
		var output = "The number "+result.number+" is prime";
	}else{
		var output = "The number "+result.number+" is NOT prime";
	}
	console.log(output);
});
