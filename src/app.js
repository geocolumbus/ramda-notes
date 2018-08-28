const R = require('ramda');

let a = R.add(2,3)
console.log(a)  //  5
let b = R.add(5)(5)
console.log(b)  // 10

// Curry R.add()
let c = R.add(9)
console.log(c)  // [Function: f1]
let d = c(10)
console.log(d)  // 15
