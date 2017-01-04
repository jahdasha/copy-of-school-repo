//===============================================
// RUN THIS USING NODE
//===============================================

//================================================
// TEST CASES
//================================================

// // Case 1 - Small Set of Numbers
var arr = [];
for (var i=0, t=40; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}

//Case 2 - Large set of Numbers
// var arr = [];
// for (var i=0, t=400000; i<t; i++) {
//     arr.push(Math.round(Math.random() * t))
// }

//================================================
// SOLUTION - Insertion Sort
//================================================
function insertionSort(arr) {
  var len = arr.length;

  for(var i = 0; i < len; i++) {
    var tmp = arr[i]; //Copy of the current element.
    /*Check through the sorted part and compare with the
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
      //Shift the number
      arr[j+1] = arr[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    arr[j+1] = tmp;
  }
}
var ul = [5, 3, 1, 2, 4];
insertionSort(ul);
console.log(ul);
//================================================
// FUNCTION CALL
//================================================
// console.log("PRE-SORT");
// console.log(arr.join(" "));
// console.log("---------------------------")
// console.log("POST-SORT");
// console.log(insertionSort(arr).join(" "));
