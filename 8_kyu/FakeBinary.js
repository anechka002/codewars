// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// SOLUTION:

function fakeBin(x) {
  let res = '';
  for (let i of x) {
    if (i < 5) {
      res += 0;
    } else {
      res += 1;
    }
  }
  return res;
}
