// Description:
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Solution:

function noOdds( values ){
  const res = []
  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (element % 2 === 0) {
      res.push(element)
    } 
  }
  return res
  // return values.filter(el => el % 2 === 0)
}
console.log(noOdds([0,1]))
console.log(noOdds([0, 1, 2, 3]))