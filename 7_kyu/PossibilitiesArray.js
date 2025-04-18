// Description:
// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Examples:

// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

// Solution:

function isAllPossibilities(x){
  let uniq = [...new Set(x)];
  console.log(uniq)
  let n = x.length
  if(uniq.length !== n){
    return false;
  }
  for (let i = 0; i < n; i++) {
    if(!uniq.includes(i)){
      return false;
    }
  }
  return true
}
console.log(isAllPossibilities([1,2,0,3])) // true (4 - 1 = 3)
console.log(isAllPossibilities([0,1,2,2,3])) // false (5 - 1 = 4)
