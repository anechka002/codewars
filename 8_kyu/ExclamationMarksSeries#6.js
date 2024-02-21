// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

//Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"

// SOLUTION:

function remove(s, n) {
  let i = 0;
  let res = s.replace(/!/g, match => i++ < n ? '' : match)
  return res
}
