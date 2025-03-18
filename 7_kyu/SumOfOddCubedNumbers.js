// Description:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// Solution:

function cubeOdd(arr) {
  if(arr.some(el => typeof el === 'string')){
    return undefined
  }
  let cubedOdds = arr
    .filter(el => typeof el === 'number')
    .map(el => Math.pow(el, 3))
    .filter(el => el % 2 !== 0)

  let sum = cubedOdds.reduce((acc, el) => acc + el, 0);

  return sum 
}
console.log(cubeOdd([1, 2, 3, 4])) // 28
console.log(cubeOdd([-3,-2,2,3])) // 0
console.log(cubeOdd(["a",12,9,"z",42])) // undefined