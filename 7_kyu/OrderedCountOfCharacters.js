// Description:
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// Solution:

function orderedCount(text) {
  const count = new Map();
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    if(count.has(element)){
      count.set(element, count.get(element) + 1)
    } else {
      count.set(element, 1)
    }
  }
  const result = Array.from(count.entries())
  return result;
}
console.log(orderedCount("abracadabra"))