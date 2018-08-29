const R = require('ramda')

console.log('')

let a = R.add(2, 3)
console.log(a)  //  5
let b = R.add(5)(5)
console.log(b)  // 10

console.log('----------------')

// Curry R.add()
// In ramda, a function called with missing parameters automatically returns a curried function that accepts the
// missing parameters only.
let add9 = R.add(9)
console.log(add9)  // [Function: f1]
let d = add9(10)
console.log(d)  // 19

console.log('----------------')


// Curry R.prop() and apply to simple data
let data = {'name': 'George', 'status': 'dad'}
let getName = R.prop('name')
console.log(getName(data)) // George

console.log('----------------')

// Composing
// Note it works backwards - first the amount property is found, then 1 is added, then modulus is applied
let add1modulo = R.compose(R.mathMod(17), R.add(1), R.prop('amount'))
console.log(add1modulo({amount: 7})) // 17 % (7+1) === 1
data = [{amount: 3}, {amount: 5}, {amount: 2}]
console.log(R.map(add1modulo, data)) // [1, 5, 2]