// Description:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Solution:

function count(string) {
  const obj = {};
  for (const element of string) {
    obj[element] = (obj[element] || 0) + 1;
  }
  return obj;
}
console.log(count('aba'))
console.log(count(''))