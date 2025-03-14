// Description:
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 

// Solution:

function minSum(arr) {
  let sortedNum = arr.sort((a, b) => a - b);
  console.log(sortedNum)

  let sum = 0;
  const length = sortedNum.length;
  console.log(length)

  for (let i = 0; i < length / 2; i++) {
    sum += arr[i] * arr[length - 1 - i];
    console.log(sum)
  }
  return sum
}
console.log(minSum([5,4,2,3])) // 22