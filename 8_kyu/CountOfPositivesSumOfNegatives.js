// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// SOLUTION:

function countPositivesSumNegatives(input) {
  let res = [];
  let countPositives = 0;
  let sumNegatives = 0;
  if (input === null || input.length < 1) return res
  for(let i = 0; i < input.length; i += 1){
    if(input[i] > 0){
    countPositives += 1
      // console.log(countPositives)
  }
  }
    for(let j = 0; j < input.length; j += 1){
      if(input[j] < 0){
        sumNegatives += input[j]
        // console.log(sumNegatives)
    }
    }
  res.push(countPositives)
  res.push(sumNegatives)
  return res
}
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));