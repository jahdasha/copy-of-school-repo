// Create a command line node application that takes in two parameters and outputs whether they are equal or not.

// HINT: Start by simply command logging the value of each argument to console. 
// Then just approach this using your usual Javascript approach (because Node is still just Javascript).

console.log(process.argv[2]);
console.log(process.argv[3]);

if (process.argv[2] === process.argv[3]){
	console.log("equal");
} else {
	console.log("not equal");
}