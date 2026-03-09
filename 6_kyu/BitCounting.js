// Description:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Solution:

function countBits(n) {
  const res = n.toString(2)
  .split('')
  .filter((el) => el != '0')
  return res.length;
  // .reduce((acc, el) => {
  //   if(el === '1') {
  //     return ++acc
  //   } else {
  //     return acc
  //   }
  // }, 0)
  // return res;
}
console.log(countBits(1234))