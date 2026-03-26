// Description:
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

function divisors(integer) {
  if(integer <= 1) {
    return
  }

  let arr = []

  for (let index = 2; index <integer; index++) {
    if(integer % index === 0) {
      arr.push(index)
    }
  }
  return arr.length > 0 ? arr : `${integer} is prime`
}
