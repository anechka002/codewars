// Description:
// Task Overview
// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

// Examples:

// n = 1 should return 1
// n = 5 should return 101
// n = 11 should return 1011

// Solution:

function toBinary(n){
  return Number(n.toString(2));
}
console.log(toBinary(1))
console.log(toBinary(2))
console.log(toBinary(3))
console.log(toBinary(5))