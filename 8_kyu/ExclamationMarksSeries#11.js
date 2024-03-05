// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// SOLUTION:

function replace(s){
  const regExp = /\a|e|i|o|u|A|E|I|O|U|\$/g;
  return s.replace(regExp, '!')
}