// Description:
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// Solution:

function opposite(number) {
  return number === 0 ? 0 : -number;
}
console.log(opposite(4.25))
console.log(opposite(0))