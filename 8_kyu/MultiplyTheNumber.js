// Description:
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

// Solution:

function multiply(number){
  let length = String(Math.abs(number)).length;
  return number * Math.pow(5, length);
}
console.log(multiply(3))
console.log(multiply(0))
console.log(multiply(10))
console.log(multiply(-2))