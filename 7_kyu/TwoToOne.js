// Description:

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Solution

function longest(s1, s2) {
  let res = (s1 + s2).split('');
  let sorted = res.sort((a, b) => a.localeCompare(b))
  let unique = [...new Set(sorted)]
  return unique.join('')
}
console.log(longest("aretheyhere", "yestheyarehere"))