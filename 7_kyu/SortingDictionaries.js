// Description:
// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

// The list must be sorted by the value and be sorted largest to smallest.

// Examples
// sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
// sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

// Solution:

function sortDict(dict) {
  return Object.entries(dict)
    .sort(([, valueA],[, valueB]) => valueB - valueA)
    .map(([key, value]) => {
      if(!isNaN(key)){
        return [Number(key), value]
      } else {
        return [key, value]
      }
    } );
}
console.log(sortDict({1:2, 2:4, 3:6})) // [[3,6], [2,4], [1,2]]
console.log(sortDict({'a':2, 'b':4, 'c':6})) // [['c',6], ['b',4], ['a',2]]