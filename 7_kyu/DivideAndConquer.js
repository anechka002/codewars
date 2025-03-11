// Description:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// Solution:

function divCon(x){
  const nonString = x.filter(el => typeof el !== 'string').reduce((acc, el) => acc + el, 0);
  const string = x.filter(el => typeof el === 'string').reduce((acc, el) => acc + Number(el), 0);
  return nonString - string;
}
console.log(divCon([9, 3, '7', '3']))