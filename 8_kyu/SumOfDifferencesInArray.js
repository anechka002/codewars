// Description:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// Solution:

function sumOfDifferences(arr) {
  const sortedArr = arr.sort((a, b) => b - a)
  if(sortedArr.length === 0) return 0
  let sum = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    sum = sum + (sortedArr[i] - sortedArr[i + 1])
  }
  return sum

  //  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
console.log(sumOfDifferences([2, 1, 10]))