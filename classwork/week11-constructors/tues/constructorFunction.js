// Part one:
// ---------
// Make a dog object with two keys.
// One key called sleepy = false;
// Second key called noise = 'woof';
// Third key called makeNoise which console.logs the noise to the screen if the dog is not sleepy. 
var dog = {
	sleepy: false,
	noise: "woof",
	makeNoise: function(){
		if (this.sleepy === false){
			console.log(this.noise);
			// so that it doesn't return undefined activate the below line
			//return(this.noise);
		}
	}
}
// Part two:
// ---------
// Make a cat object with two keys.
// One key called sleepy = true;
// Second key called noise = 'meow';
// Third key called makeNoise which console.logs the noise to the screen if the cat is not sleepy. 
var cat = {
	sleepy: true,
	noise: "meow",
	makeNoise: function(){
		if (this.sleepy === true){
			console.log(this.noise);
			// so that it doesn't return undefined activate the below line
			//return(this.noise);
		}
	}
}
// Part Three:
// -----------
// make the dog bark 
// make the cat meow
console.log(dog.makeNoise());
console.log(cat.makeNoise());
// Part Four:
// -----------
// Why are parts one and two redundant? What are ways we can write dry code?

// capitalize the function name since it's a constructor function
function Animal(sleepy, noise){
	this.sleepy = sleepy;
	this.noise = noise;
	this.makeNoise = function(){
		if (this.sleepy === false){
			console.log(this.noise);
			// so that it doesn't return undefined activate the below line
			//return(this.noise);
		}
	}
}


var duck = new Animal(false, "quack");
duck.makeNoise();