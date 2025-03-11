// Description:
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// Solution:

function findLongest(array){
  return array.reduce((maxNum, currentNum) => {
    return String(currentNum).length > String(maxNum).length ? currentNum : maxNum;
  })
}
console.log(findLongest([8, 900, 500])) // 900
console.log(findLongest([900, 180804, 411435]))