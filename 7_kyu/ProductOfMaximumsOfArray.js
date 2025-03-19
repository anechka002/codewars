// Description:
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

// Solution:

function maxProduct(numbers, size){
  numbers.sort((a, b) => b - a);
  let maxProduct = 1
  for (let i = 0; i < size; i++) {
    maxProduct *= numbers[i];
  }
  return maxProduct
}
console.log(maxProduct([4, 3, 5], 2)) // 20