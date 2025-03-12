// Description:
// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

// Solution:

function solve(arr) {
  // 1 var
  const reversed = arr.reverse();
  return [...new Set(reversed)].reverse()
  // 2 var
  // const unique = new Set();
  // const res = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   const element = arr[i];
  //   if(!unique.has(element)) {
  //     res.unshift(element)
  //     unique.add(element)
  //   }
  // }
  // return res
}
console.log(solve([3, 4, 4, 3, 6, 3])) // [4, 6, 3]