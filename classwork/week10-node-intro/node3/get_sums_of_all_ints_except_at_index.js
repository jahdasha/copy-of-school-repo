// For example, given:
// [1, 7, 3, 4]
// your function would return:
// [14, 8, 12, 11]
// by calculating:
// [7+3+4, 1+3+4, 1+7+4, 1+7+3]

var args = process.argv.slice(2)
console.log(args);
var returnArray = [];

var addAllBut = function (position){
    var total = 0;

    for(var b = 0; b < args.length; b++){

        if (b != position){
            total += parseFloat(args[b]);
        }
    }

    return total;
}

for(var i = 0; i < args.length; i++){
    returnArray.push(addAllBut(i));
}

console.log(returnArray);
