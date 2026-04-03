// Description:
// Task
// Given the number n, return the sequence of numbers from n to 1.


// Range
// The number n can be negative and also large number:  -9999  <=  n  <=  9999


// Examples
// n =  5    >>     5, 4, 3, 2, 1
// n = -1    >>    -1, 0, 1

// Solution:

function seqToOne(n){
  if(n >= 1) {
    return Array.from({length: n}, (_, i) => n - i)
  } else {
    return Array.from({length: Math.abs(n) + 2}, (_, i) => n + i)
  }
}

console.log(seqToOne(5))
console.log(seqToOne(-1))