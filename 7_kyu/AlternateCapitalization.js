// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// Solution:

function capitalize(s){
  const res1 = s.split('').map((el, index) => index % 2 === 0 ? el.toUpperCase() : el).join('')
  const res2 = s.split('').map((el, index) => index % 2 !== 0 ? el.toUpperCase() : el).join('')
  return [res1, res2]
};
console.log(capitalize("codewars"))