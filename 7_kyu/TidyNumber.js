// Description:
// Definition
// A Tidy Number is a number whose digits are in non-decreasing order.

// Task
// Given a number, determine if it is tidy or not.

// Notes
// The number passed will always be positive.
// Return the result as a boolean.
// Examples
// 12 ==> return true
// Explanation: Digits {1, 2} are in non-decreasing order (1 <= 2).

// 32 ==> return false
// Explanation: Digits {3, 2} are not in non-decreasing order (3 > 2).

// 1024 ==> return false
// Explanation: Digits {1, 0, 2, 4} are not in non-decreasing order (1 > 0).

// 13579 ==> return true
// Explanation: Digits {1, 3, 5, 7, 9} are in non-decreasing order.

// 2335 ==> return true
// Explanation: Digits {2, 3, 3, 5} are in non-decreasing order (3 = 3).

// Solution:

function tidyNumber(n) {
  const num = n.toString();
  const numLength = num.length;

  for (let i = 0; i < numLength - 1; i++) {
    if (num[i] > num[i + 1]) {
      return false;
    } 
  }
  return true
}
console.log(tidyNumber(12)); // true
console.log(tidyNumber(102)); // false
