// Description:
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕

// SOLUTION:

function printArray(array){
  return array.join(',')
}
console.log(printArray([2, 3, 4, 5]))
console.log(printArray([[1,2],["a","b"]]))
