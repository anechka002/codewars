// Description:
// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Solution: 

function add(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  let maxLength = Math.max(strNum1.length, strNum2.length);
  const n1 = strNum1.padStart(maxLength, '0');
  const n2 = strNum2.padStart(maxLength, '0');
  let result = '';
  for (let i = maxLength-1; i >= 0; i--) {
    const sum = parseInt(n1[i]) + parseInt(n2[i]);
    result = sum + result
  }
  return +result
}

console.log(add(2, 13))
