
//+++++++++Задачи для отработки деструктуризации:+++++++++++++++
// const user = { name: 'John', age: 25, city: 'New York' };
// // const res = user.name
// // const res = user.age
// const res = user.city
// // console.log(res);

// const fruits = ['apple', 'banana', 'orange'];
// const secondFruit = fruits[1]
// const thirdFruit = fruits[2]
// console.log(secondFruit)
// console.log(thirdFruit)


// const person = { name: 'Alice', age: 30 };
// // Деструктуризация в параметрах функции
// function printPersonDetails({name, age}) {
//  console.log(`Name: ${name}, Age: ${age}`);
// }
// printPersonDetails(person);  


// const car = { brand: 'Toyota', model: 'Camry' };
// const { model, brand, year = "2022" } = car
// // console.log(brand);
// // console.log(year);

// const students = [
//   { name: 'Alex', grade: 'A' },
//   { name: 'Emma', grade: 'B' },
//   { name: 'Chris', grade: 'C' },
// ];

// const [{ name: student1 }, , { name: student3 }] = students;
// console.log(student1); // 'Alex'
// console.log(student3); // 'Chris'



// const person = { firstName: 'Max', lastName: 'Johnson' };
// const firstName = 'first Name: Nina';
// const lastName = 'last Name: Ivanov';
// const {firstName: newFirstName, lastName: newLastName, age = 25} = person
// console.log(newFirstName)
// console.log(newLastName)
// console.log(age)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//====================Задачи для отработки методов:============================

// push() ++++
// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('pear', 'plum')
// console.log('Fruits: ', fruits)


// pop()++++
// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: false,
//   },
// ];
// const deletedUser = users.pop();
// console.log('deletedUser ', deletedUser)
// console.log('users ', users)


// shift()++++
// const firstUser = users.shift()
// console.log('firstUser, ', firstUser)
// console.log('users ', users)


// unshift()++++
// const res = users.unshift({id: 0, name: 'Test', isStudent: false})
// console.log('res ', res)
// console.log('users ', users)


// split()reverse()join()++++
// const str = 'JavaScript is awesome';
// const res = str.split(' ').reverse().join(' ')
// console.log('res: ', res)
// console.log('str ', str)


// concat()++++
// function mergeArrays(a, b) {
//   let res = a.concat(b)
//   return res
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); 


// flat()++++
// function flattenArray(a) {
//   let res = a.flat(Infinity)
//   return res
// }
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); 
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); 


// forEach()++++
// function calculateSquare (arr) {
//   arr.forEach( function (el) { 
//     let res = el * el
//     console.log(`${el} squared is ${res}`)
//     } )
// }
// console.log(calculateSquare([1, 2, 3, 4, 5]))


// find()++++
// function findFirstElement(arr) {
//   const res = arr.find(function (el) {
//     return el > 25
//   })
//   return res
// }
// console.log(findFirstElement([10, 20, 30, 40, 50]))

// function findFirstElement(arr) {
//   const res = arr.find(function (el) {
//     return el.charAt(0) === 'а'
//   })
//   return res
// }
// console.log(findFirstElement(["яблоко", "банан", "апельсин", "киви"]))


// includes()++++
// function checkElement(arr) {
//   return arr.includes(3)
// }
// console.log(checkElement([1, 2, 3, 4, 5]))

// function checkElement(arr) {
//   return arr.includes("виноград")
// }
// console.log(checkElement(["яблоко", "банан", "апельсин", "киви"]))


// filter()+++++
// let numbers1 = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45];
// function filterGreaterThan(numbers1) {
//   const res = numbers1.filter((el) => el > 25)
//   return res
// }
// console.log(filterGreaterThan(numbers1))
// function filterGreaterThan(numbers2) {
//   const res = numbers2.filter((el) => el > 20)
//   return res
// }
// console.log(filterGreaterThan(numbers2))


// sort()+++++
// let people = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
// ];
// function sortAlphabeticallyByProperty(people) {
//   let res = people.sort((a, b) => a.name.localeCompare(b.name))
//   // console.log(res)
//   return res
// }
// console.log(sortAlphabeticallyByProperty(people))

// let numbers = [5, 2, 8, 1, 4];
// function sortAlphabeticallyByProperty(numbers) {
//   let res = numbers.sort((a, b) => b - a)
//   // console.log(res)
//   return res
// }
// console.log(sortAlphabeticallyByProperty(numbers))


// map()++++
// let data = [
//   { value: 1, name: 'Option 1' },
//   { value: 2, name: 'Option 2' },
//   { value: 3, name: 'Option 3' },
// ];
// function formattedData (data) {
//   return data.map((el) => {
//     return {
//       value: el.value,
//       label: el.name
//     }
//   })
// }
// console.log(formattedData(data))

// let products = [
//   { id: 1, name: 'Apple', price: 1.99 },
//   { id: 2, name: 'Banana', price: 0.99 },
//   { id: 3, name: 'Orange', price: 2.49 },
// ];
// function productsWithDiscount (products) {
//   return products.map((el) => {
//     return {
//       id: el.id,
//       name: el.name,
//       price: el.price,
//       discountedPrice: el.price * 0.9
//     }
//   })
// }
// console.log(productsWithDiscount(products))