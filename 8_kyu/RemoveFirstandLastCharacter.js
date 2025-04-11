// Description:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// Solution:

function removeChar(str){
  if(str.length <= 2) return str
  const res = str.slice(1, -1)
  return res
};

console.log(removeChar('hello'))
console.log(removeChar('h'))