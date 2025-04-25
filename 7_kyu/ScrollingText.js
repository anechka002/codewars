// Description:
// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

function scrollingText(text){
  let res = []
  for (let i = 0; i < text.length; i++) {
    let str = text.slice(i) + text.slice(0, i)
    res.push(str.toUpperCase())
  }
  return res
}
console.log(scrollingText('codewars'))
console.log(scrollingText(''))