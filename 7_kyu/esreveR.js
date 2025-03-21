// Description:
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// Solution:

function reverse(array) {
  const arr = []
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
    arr.push(array[i])
  }
  return arr
}
console.log(reverse([1,null,14,"two"]))