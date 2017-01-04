var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];

// Write a for loop that looks at each index of the array to see if it matches the random value
// If it does match the random value display an alert box with the index of the array and the value

for (var i = 0; i < stuff.length; i++){
  if (stuff[i] === random_value){
    console.log("The random value matches "+stuff[i]);
  }else{
    console.log("The random number does not match any of the numbers in the stuff array")
  }
}


// divide stuff by 2 or check the middle number of stuff to see if the number is less than or greater than the number
// then search for the number in the range that the number falls in
