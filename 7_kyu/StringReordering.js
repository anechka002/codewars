// Description:
// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

// Example
// Input:
// List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//        ]

// Output:
// 'Vatsan took his dog for a spin'

// Solution:

function sentence(arrayOfObjects) {
  const pairs = arrayOfObjects.map((el) => {
    const key = Number(Object.keys(el)[0])
    const value = Object.values(el)[0]
    return [key, value]
  })

  return pairs
    .sort((a,b) => a[0] - b[0])
    .map((el) => el[1])
    .join(' ');
}

console.log(sentence([{'12': 'spin' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'1': 'dog'}]))