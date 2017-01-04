// 13.3 Arrow function syntax
// The "fat" arrow => (as opposed to the thin arrow ->) was chosen to be compatible with CoffeeScript, whose fat arrow functions are very similar.
//
// Specifying parameters:
//
//     () => { ... } // no parameter
//      x => { ... } // one parameter, an identifier
// (x, y) => { ... } // several parameters
// Specifying a body:
//
// x => { return x * x }  // block
// x => x * x  // expression, equivalent to previous line


doThis = (x, y) => {
  console.log(x);
  console.log(y);
}

doThis(2, 3);
