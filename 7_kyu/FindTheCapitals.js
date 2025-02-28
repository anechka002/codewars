// Description:
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// Solution:

function capitals(word) {
  return word
    .split('')
    .map((el, index) => el === el.toUpperCase() ? index : null)
    .filter(el => el !== null)
};
console.log(capitals('CodEWaRs'))