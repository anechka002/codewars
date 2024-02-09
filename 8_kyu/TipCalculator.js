// DESCRIPTION:
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// SOLUTION:

function calculateTip(amount, rating) {
  let count = Math.ceil(amount)
 
  let ratingUpperCase = rating.toUpperCase();

  if (ratingUpperCase === 'Terrible'.toUpperCase()) {
    let res = (count * 0) / 100;
    let result = Math.ceil(res)
    return result;
  } else if (ratingUpperCase === 'Poor'.toUpperCase()) {
    let res = (count * 5) / 100;
    let result = Math.ceil(res)
    return result;
  } else if (ratingUpperCase === 'Good'.toUpperCase()) {
    let res = (count * 10) / 100;
    let result = Math.ceil(res)
    return result;
  } else if (ratingUpperCase === 'Great'.toUpperCase()) {
    let res = (count * 15) / 100;
    let result = Math.ceil(res)
    return result;
  } else if (ratingUpperCase === 'Excellent'.toUpperCase()) {
    let res = (count * 20) / 100;
    let result = Math.ceil(res)
    return result;
  } else {
    return 'Rating not recognised'
  }
}