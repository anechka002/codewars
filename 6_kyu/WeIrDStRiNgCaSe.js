// Description:
// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

// Solution: 

function toWeirdCase(string){
  return string
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((el, index) => index % 2 === 0 ? el.toUpperCase() : el.toLowerCase())
        .join('')
  }).join(' ')
}

console.log(toWeirdCase("string")) //  "StRiNg"
console.log(toWeirdCase("This is a test")) //  'ThIs Is A TeSt'
