// Description:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// Solution: 

var isAnagram = function(test, original) {
  let str = test.toLowerCase().replace((/[^a-z]/g, ''))
  let str2 = original.toLowerCase().replace((/[^a-z]/g, ''))

  if(str.length !== str2.length) return false
  let t = str.split('').sort().join();
  let o = str2.split('').sort().join();
  return (t === o) ? true : false 
};
console.log(isAnagram("foefet", "toffee"))