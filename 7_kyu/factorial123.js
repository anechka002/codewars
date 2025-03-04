// Description:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// Solution: 

function factorial(n){
  if(n === 0 || n === 1) return 1
  return n * (factorial (n - 1) )
}
console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(7)) // 5040