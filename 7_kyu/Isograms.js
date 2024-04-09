// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// SOLUTION:

function isIsogram(str){
  let strLow = str.toLowerCase();

  for (let i = 0; i < strLow.length; i++) {
    console.log(strLow[i])
    for (let j = i + 1; j < strLow.length; j++) {
      console.log(strLow[j])
      if (strLow[i] === strLow[j]) {
        return false
      }
    } 
  }
  return true
}