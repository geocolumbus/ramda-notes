const R = require('ramda');

let a = R.add(2,3)
console.log(a)  //  5
let b = R.add(5)(5)
console.log(b)  // 10

// Curry R.add()
let add9 = R.add(9)
console.log(add9)  // [Function: f1]
let d = add9(10)
console.log(d)  // 19
