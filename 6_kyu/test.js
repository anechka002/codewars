// const employees = {
//   'Alice': 80,
//   'Bob': 60,
//   'Charlie': 40,
//   'David': 90,
//   'Eve': 70
// };

// function performanceReview (employees) {
//   let length = Object.keys(employees).length;
//   let totalSum = 0;

//   if(length === 0) {
//     return "Нет сотрудников для оценки";
//   }

//   for (const key in employees) {
//     totalSum += employees[key]
//   }

//   const res = totalSum / length;
  
//   if(res < 50) {
//     return "Нужно улучшить"
//   } else if (res >= 50 && res <= 75) {
//     return "Хорошо, но можно лучше"
//   } else {
//     return "Отличная работа!"
//   }
// }
// console.log(performanceReview(employees))

//========================================
// const votes = {
//   'Alice': 10,
//   'Bob': 15,
//   'Charlie': 15,
//   'David': 5
// };

// function winner(votes) {
//   const winners = [];
//   const maxVotes = Math.max(...Object.values(votes))
//   if(Object.keys(votes).length === 0) return []
//   for (const key in votes) {
//     if(votes[key] === maxVotes) {
//       winners.push(key)
//     }
//   }
//   return winners
// }
// console.log(winner(votes))

//========================================
// const students = {
//   'Alice': [90, 85, 88],
//   'Bob': [70, 75, 80],
//   'Charlie': [100, 95, 90]
// };

// function averageGrades(students) {
//   let obj = {};

//   for (const key in students) {
//     const sum = students[key].reduce((a, b) => a + b, 0);
//     const average = sum / students[key].length;
//     obj = {...obj, [key]: average}
//     // obj[key] = average; 
//   }
//   return obj
// }
// console.log(averageGrades(students))

//========================================
// const employees = [
//   { name: 'Alice', department: 'Finance' },
//   { name: 'Bob', department: 'HR' },
//   { name: 'Charlie', department: 'Finance' },
//   { name: 'David', department: 'IT' }
// ];

// function groupByDepartment(employees) {
//   let obj = {};
//   if(employees.length === 0) return obj
//   employees.forEach((el) => {
//     if (obj[el.department]) {
//       obj[el.department].push(el.name)
//     } else {
//       obj[el.department] = [el.name];     
//     }
//   })
//   return obj
// }
// console.log(groupByDepartment(employees))

//========================================
// const products = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// function countUniqueProducts(products) {
//   let obj = {};
//   if(products.length === 0) return obj
//   products.forEach((el) => {
//     if(!obj[el]) {
//       obj[el] = 1;
//     } else {
//       obj[el] += 1;
//     }
//   })
//   return obj
// }
// console.log(countUniqueProducts(products))
//========================================
// const text = "hello world hello everyone";

// function wordFrequency(text) {
//   let obj = {};
//   const arr = text.replace(/[.,!?]/g, '').toLowerCase().split(' ')
//   arr.forEach((el) => {
//     if(!obj[el]) {
//       obj[el] = 1;
//     } else {
//       obj[el] += 1;
//     }
//   })
//   return obj
// }
// console.log(wordFrequency(text))

//========================================

// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 30 },
//   { name: 'David', age: 25 }
// ];

// function groupByAge(people) {
//   const obj = {};
//   if (people.length === 0) {
//     return {};
//   }
//   people.forEach((person) => {
//     if (!obj[person.age]) {
//       obj[person.age] = [];
//     } 
//     obj[person.age].push(person.name);
//   })
//   return obj
// }
// console.log(groupByAge(people))
// console.log(groupByAge([]))

//========================================

console.log(typeof typeof 7)
