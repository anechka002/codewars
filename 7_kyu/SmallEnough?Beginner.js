// Description:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Solution: 

function smallEnough(a, limit){
  // return a.every(el => el <= limit)

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if(element > limit) {
      return false
    }
  }
  return true
}
console.log(smallEnough([66, 101], 200)) // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) // false
console.log(smallEnough([8,7,5,9,6,3,5,4,8,7,1], 2)) // false
console.log(smallEnough([3,6,3,7,4,1,3], 4)) // false