// Description:
// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// Solution:

function switcher(x){
  let result = '';
    x.forEach(num => {
      const n = parseInt(num);
      if (n >= 1 && n <= 26) {
          result += String.fromCharCode(122 - (n - 1));
      } else if (n === 27) {
          result += '!';
      } else if (n === 28) {
          result += '?';
      } else if (n === 29) {
          result += ' ';
      }
    });

  return result;
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])) // 'codewars'