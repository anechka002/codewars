// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// Solution:

function findOutlier(integers){
  const evenNum = integers.filter(el => el % 2 === 0);
  const oddNum = integers.filter(el => el % 2 !== 0)
  // return evenNum.length > oddNum.length ? Number(oddNum.join()) : Number(evenNum.join());
  return evenNum.length === 1 ? evenNum[0] : oddNum[0];
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // 160
console.log(findOutlier([0, 1, 2])) // 1
console.log(findOutlier([1,1,0,1,1])) // 0