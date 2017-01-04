// Make line Node app that takes in two numbers as arguments and returns true if they are both multiples of 7

console.log(process.argv[2]);
console.log(process.argv[3]);

if((process.argv[2] % 7 === 0) && (process.argv[3] % 7 === 0)){
	console.log("They are both multiples of 7");
}
else {
	console.log("They are not both multiples of 7");
}