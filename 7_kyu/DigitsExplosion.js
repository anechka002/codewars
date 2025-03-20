// Description:
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

// Solution:

function explode(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    str += element.repeat(element)
  }
  return str
}
console.log(explode("312"))