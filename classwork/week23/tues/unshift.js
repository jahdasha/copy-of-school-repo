var fruits = new Array();

fruits.push("orange");
fruits.push("apple");
fruits.push("banana");

function unshiftMe(array, item){
  /// return the array with item in the front
  for (var i = array.lenght - 1; i >= 0; i--){
    array[i+1] = array[1];
  }
  array[0] = item;
}

console.log(fruits);

unshiftMe(fruits, "mango");

console.log(fruits);
