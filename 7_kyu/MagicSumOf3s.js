// Description:
// The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.

// Complete the function which accepts an array of integers and returns its magic sum of 3s.

// Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

// If there is no such number in the array, 0 should be returned.

// Solution:

function magicSum(numbers) {
  if(!numbers.length) return 0
  return numbers
    .filter((el) => el % 2)
    .reduce((acc, el) => {
      if(el.toString().includes(3)) {
        acc += Number(el)
      }
      return acc
    }, 0)
}
console.log(magicSum([3, 12, 5, 8, 30, 13]))
console.log(magicSum([]))
console.log(magicSum([3]))