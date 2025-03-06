// Description:
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// Solution: 

function isSortedAndHow(array) {
  const ascending = array.every((el, index) => index === 0 || el >= array[index - 1])
  const descending = array.every((el, index) => index === 0 || el <= array[index - 1])

  if(ascending) {
    return 'yes, ascending'
  } else if(descending) {
    return 'yes, descending'
  } else {
    return 'no'
  }
}
console.log(isSortedAndHow([15, 7, 3, -8])) // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])) // 'no'