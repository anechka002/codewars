// Description:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Solution:

function duplicateEncode(word){
  // let wordMap = {};
  // let result = "";
  // const lowerWord = word.toLowerCase();

  // for (const el of lowerWord) {
  //   wordMap[el] = (wordMap[el] || 0) + 1;
  // }

  // for (const el of lowerWord) {
  //   if (wordMap[el] > 1) {
  //     result += ")";
  //   } else {
  //     result += "(";
  //   }
  // }
  // return result

  // 2 var
  const lowerWord = word.toLowerCase();
  const counts = {};
  // Подсчет количества каждого символа
  lowerWord.split("").forEach(char => {
    counts[char] = (counts[char] || 0) + 1;
  });
  // Замена символов на ( или )
  return lowerWord
    .split("")
    .map(char => (counts[char] > 1 ? ")" : "("))
    .join("");
}
console.log(duplicateEncode("din")) // '((('
console.log(duplicateEncode("recede" )) // '()()()'