// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// SOLUTION:

function reverseSeq(n) {
  let arr = [];
  for(let i = 1; i <= n; i += 1) {
    arr.push(i)
  }
  return arr.reverse()
}