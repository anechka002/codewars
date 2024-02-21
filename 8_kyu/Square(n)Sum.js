// DESCRIPTION:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// SOLUTION:

function squareSum(numbers){
  let sum = 0;
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
    res = numbers[i] ** 2;
    sum += res
    console.log(res)
  }
    return  sum
}