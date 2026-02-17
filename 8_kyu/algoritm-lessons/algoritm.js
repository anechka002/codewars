// let a = 5;
// let b = 15;
// let temp;
// temp = a; // 5
// a = b // 15
// b = temp
// console.log(a)
// console.log(b)
// console.log(temp)

// ============================

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[0] // 1
// arr[0] = arr[2] // 3
// arr[2] = temp // 1

// console.log(arr) // [3, 2, 1, 4, 5]

// ============================

// const array = [1, 2, 3, 4, 5];
// for (let i = array.length - 1; i >= 0; i--) {
//   const currentElement = array[i];
//   console.log(currentElement)
// }

// ============================

// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   const currentElement = array[i];
//   const nextElement = array[i + 1];
//   let isOnLastElement = i + 1 === array.length // i === array.length - 1
//   if(isOnLastElement) { 
//     console.log(currentElement, 'No next element')
//   } else {
//     console.log(currentElement, nextElement)
//   }
// }

// ============================

// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   const currentElement = array[i];
//   const prevElement = array[i - 1];
//   let isStartElement = i === 0 
//   if(isStartElement) {
//     console.log('No previous element', currentElement)
//   } else {
//     console.log(prevElement, currentElement)
//   }
// }

// ============================

// const array = [1, 2, 3, 4, 5];
// let i = 0;
// while(i < array.length) {
//   const currentElement = array[i];
//   console.log(currentElement)
//   i++
// }

// ============================

// const numbers = [88, 2, 647, 8, 0, 1, 2, 3, -1, 4, 5];
// let minElement = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   if(element < minElement) {
//     minElement = element;
//   }
// }
// console.log(minElement)

// ============================

// const numbers = [88, 2, 647, 8, 0, 1, 2, 3, -1, 4, 5];
// let maxElement = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   if(element > maxElement) {
//     maxElement = element;
//   }
// }
// console.log(maxElement)

// ============================

// const fruits = ['apple', 'banana', 'cherry', 'orange', 'apple', 'banana'];
// let applesCount = 0;
// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   if(fruit === 'apple') {
//     applesCount = applesCount + 1;
//   }
// }
// console.log('apple -', applesCount)

// ============================

// const fruits = ['apple', 'banana', 'cherry', 'orange', 'apple', 'banana'];
// let apples = [];
// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   if(fruit === 'apple') {
//     apples.push(fruit);
//   }
// }
// console.log(apples)

// ============================

// const fruits = ['apple', 'banana', 'cherry', 'orange', 'apple', 'banana'];
// let fruitsObj = [];
// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   fruitsObj.push({title: fruit, isWashed: false});
// }
// console.log(fruitsObj)

// ============================

// const fruits = ['apple', 'banana', 'cherry', 'orange', 'apple', 'banana'];
// let fruitsCounter = {};
// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];

//   if(!fruitsCounter[fruit]) {
//     fruitsCounter[fruit] = 0;
//   } 
//   fruitsCounter[fruit] = fruitsCounter[fruit] + 1;
// }
// console.log(fruitsCounter)

// ============================

// const numbers = [88, 2, 647, 5, 3, 1, 8, 0, 1, 2, 3, -1, 4, 5];
// let counter = {
//   // 88: [0]
// }
// for (let i = 0; i < numbers.length; i++) {
//   const currentNumber = numbers[i];
//   // console.log(currentNumber)
//   if(!counter[currentNumber]) {
//     counter[currentNumber] = [];
//   } 

//   counter[currentNumber].push(i);
  
// }
// console.log(counter) 

// ============================

// const numbers = [88, 2, 647, 5, 3, 1, 8, 0, 1, 2, 3, -1, 4, 5, 5, 5];
// let counter = {
//   // 88: false
// }
// let dublicates = [];
// for (let i = 0; i < numbers.length; i++) {
//   const currentNumber = numbers[i];
//   // console.log(currentNumber)
//   if(counter[currentNumber] === undefined) {
//     counter[currentNumber] = false;
//   } else if(counter[currentNumber] === false) {
//     dublicates.push(currentNumber);
//     counter[currentNumber] = true;
//   }

// }
// console.log(counter) 
// console.log(dublicates) 

// ============================


