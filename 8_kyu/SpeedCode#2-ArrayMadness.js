// DESCRIPTION:
// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

// SOLUTION:

function arrayMadness(a, b) {
  let x = a.map(el => el ** 2).reduce((acc, el) => acc + el, 0)
  let y = b.map(el => el ** 3).reduce((acc, el) => acc + el, 0)
  return x > y ? true : false
}
console.log(arrayMadness([4, 5, 6], [1, 2, 3]))
console.log(arrayMadness([5,6,7],[4,5,6]))