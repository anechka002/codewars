// Description:
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// Solution:

function fizzbuzz(n){
  let res = [];
  for (let index = 1; index <= n; index++) {
    if(index % 3 === 0 && index % 5 === 0) {
      res.push('FizzBuzz')
    } else if(index % 3 === 0) {
      res.push('Fizz')
    } else if(index % 5 === 0) {
      res.push('Buzz')
    } else {
      res.push(index)
    }
  }
  return res
}
console.log(fizzbuzz(3))
console.log(fizzbuzz(10))