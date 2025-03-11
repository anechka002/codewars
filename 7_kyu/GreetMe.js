// Description:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// Solution:

function greet(name) {
  let str = name.toLowerCase().split('')
  let result = str.map((el, i) => {
    if(i === 0) {
      return el.toUpperCase()
    }else {
      return el
    }
  });
  return `Hello ${result.join('')}!`;
};
console.log(greet('riley'))
console.log(greet('JACK'))