// Description:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// Solution:

function expandedForm(num) {
  // const digits = num.toString().split('');
  // const length = digits.length;
  // const result = [];
  // for (let i = 0; i < length; i++) {
  //   const value = digits[i] * Math.pow(10, length - i - 1);
  //   if(value > 0) {
  //     result.push(value);
  //   }
  // }
  // return result.join(' + ');

  // 2 var 
  return num.toString()
    .split("")
    .reverse()
    .map( (a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");
}
console.log(expandedForm(12))
console.log(expandedForm(70304))