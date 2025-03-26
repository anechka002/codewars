// Description:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// Solution:

function createPhoneNumber(numbers){
  // 1 variant
  // if(numbers.length !== 10) return '';
  // let kod = `(${numbers.join('').slice(0, 3)})`
  // // console.log(kod)
  // let num = numbers.join('').slice(3, 6);
  // // console.log(num)
  // let num2 = numbers.join('').slice(6);
  // // console.log(num2)
  // return `${kod} ${num}-${num2}`;
  // 2 variant
  // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  // 3 variant
  let format = "(xxx) xxx-xxxx";
  for(let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  } 
  return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890"