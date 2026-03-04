// Description:
// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   }) //returns 3

// Solution:

function strCount(obj){
  function countStrings(value) {
    if (typeof value === "string") return 1;

    if (Array.isArray(value)) {
      return value.reduce((sum, item) => sum + countStrings(item), 0);
    }

    if (value !== null && typeof value === "object") {
      return Object.values(value).reduce((sum, item) => sum + countStrings(item), 0);
    }

    return 0;
  }
  return countStrings(obj)

  // 2 var
  // let count = 0;
  // for (key in obj) {
  //   if (typeof obj[key] == 'string') count++;
  //   if (typeof obj[key] == 'object') count += strCount(obj[key]);
  // }
  // return count;
}
console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }))