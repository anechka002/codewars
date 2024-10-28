// Description:
// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// divisor = 2, bound = 7 ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// SOLUTION:

function maxMultiple(divisor, bound){
  // return bound - (bound % divisor)
  let res =  Math.floor(bound / divisor) * divisor
  if(res > 0) return res
  if(res <= 0) return 0
}
console.log(maxMultiple(2, 7))
console.log(maxMultiple(7, 17))