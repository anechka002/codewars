// {
//     var a = 10;
// }
// function testScope() {
//   if (a) {
//     var b = 1;
//     const c = 3;
//   }
//   console.log(b); // 
//   console.log(c); //
// }
// console.log(a); 
// testScope();
// console.log(b); // не отработает

// 10  1  ReferenceError: c is not defined

//************************ */

// function first() {
//   console.log(1); 
//   second();
//   console.log(2);
// }

// function second() {
//   console.log(3); 
//   third();
//   console.log(4);
// }

// function third() {
//   console.log(5); 
// }

// first();

// 1 3 5 4 2

//************************ */
// function first() {
//   console.log(1); 
//   setTimeout(() => { 
//     console.log(6);
//   }, 0);
//   second();
//   console.log(2); 
// }

// function second() {
//   console.log(3); 
//   new Promise((resolve) => {
//     console.log(7); 
//     resolve();
//   }).then(() => { 
//     console.log(8);
//   });
//   third();
//   console.log(4); 
// }

// function third() {
//   console.log(5); 
// }

// first();

// 1 3 7 5 4 2 8 6

//************************ */

// const delay = (ms)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//         },ms)
//     })
// }

// const promisify = (fn) => { //Объявляем функцию promisify, которая принимает функцию fn
// 	return (...args)=>{ //Возвращаем новую функцию, которая принимает любое количество аргументов
// 	    return new Promise((resolve, reject)=>{ //Возвращаем новый Promise
// 	        const result = fn(...args)  //Вызываем исходную функцию fn с переданными аргументами
// 	        resolve(result) //Передаём результ. выполнения функции в resolve, чтобы Promise завершился успешно с этим результатом
// 	    })
// 	}
// }

//************************ */

// /* 📌 Задача 2.6: Что будет выведено в консоле и в какой последовательности? Что будет, если удалить первый catch? */

// (function trainingCase2() {
//   const p = new Promise((resolve, reject) => {
//     console.log('Start'); 
//     setTimeout(() => {
//       console.log('Rejecting...'); 
//       reject('fail');
//     }, 1000);
//   });
  

//   p.then(
//     () => console.log('A'),
//     () => console.log('B') 
//   )
//     .then(() => console.log('C')) 
//     .catch(() => console.log('D')) 
//     .finally(() => console.log('E')); 

//   p.catch(() => console.log('F')) 
//     .then(() => console.log('G')); 

//   p.then(
//     () => console.log('H'),
//     () => {
//       console.log('I');  
//       throw 'inner error';
//     }
//   )
//     .catch(() => console.log('J')) 
//     .finally(() => console.log('K'));  

//   console.log('End'); 
// })();

// Start End Rejecting... B F I C G J K E 


//  - Каждый .then() всегда возвращает промис, даже если явно не указан return;
//  - Если внутри .then() вернуть значение (не промис), оно автоматически будет обёрнуто в промис;
//  - Если внутри .then() выброшено исключение — оно будет передано в ближайший .catch().

//************************ */

// async function first() {
//     await console.log(1);
//     Promise.resolve(2).then(r => console.log(r)); // ...await // mic // 2
//     console.log(3); 
// }
// function second() {
//     Promise.resolve(4).then(r => console.log(r)); // mic // 4
//     console.log(5); 
// }
// first();
// console.log(0)
// second();

// 1 0 5 3 4 2

//************************ */

// async function foo(){
//     return 777
// }
// const result = foo()
// console.log(result) 
// result.then(v=>console.log(v)) 

//************************ */

// (function question3() {
//     try {
//         let x = 4;
//         if (true) {
//             console.log("x_let:", x);  
//             let x = 5;
//         }
//     } catch (err) {
//         console.log("x_let:error", err); 
//     }

//     try {
//         const y = 4;
//         if (true) {
//             const y = 5;
//             console.log("y_const_1:", y);
//         }
//         console.log("y_const_2:", y);
//     } catch (err) {
//         console.log("y_const_1:error");
//     }
// }())

// ReferenceError: Cannot access 'x' before initialization  y_const_1:5  y_const_2:4 

//************************ */

// async function globalF() {
//   const run = async () => {
//     try {
//       const github = fetch('https://github.com/?query=js');
//       const bingData = fetch('https://bing.com/?query=js');
//       const googleData = fetch('https://google.com/?query=js');

//       const result = await Promise.any([github, bingData, googleData]);
//       console.log(result.url); //1) https
//     } catch (e) {
//       console.log("catch");
//       console.log(e);
//     } finally {
//       console.log("finally"); //2) finally
//       return 123;
//     }
//   };

//   const result = await run();
//   console.log(1); //3) 1
//   console.log(result); //4) 123
// }
// globalF();

//************************ */

/* 📌 Задача 2.10.1: Что будет выведено в консоле и в какой последовательности? */
// async function first() {
//     await Promise.resolve(1).then(r => console.log(r)); // ...await // mic //
//     console.log(2); 
// }
// async function second() {
//     await Promise.resolve(3).then(r => console.log(r)); // ...await // mic //
//     console.log(4); 
//     await queueMicrotask(() => console.log(5)); // ...await // 
//     setTimeout(() => console.log(6), 0); // mac
// }
// second();
// first();

// 3 1 4 2 5 6

// переписал на Promise
// function second() {
//     Promise.resolve(3).then(r => console.log(r)); 
//     Promise.resolve().then(()=>{
//         console.log(4); 
//         Promise.resolve().then(()=>{
//             queueMicrotask(() => console.log(5)); 
//             setTimeout(() => console.log(6), 0);
//         })
//     })
// }

//************************ */

// /* 📌 Задача 2.10.2: Что будет выведено в консоле и в какой последовательности? */
// async function first() {
//     await console.log(1) 
//     console.log(2);  
// }
// async function second() {
//     await Promise.resolve(3).then(r => console.log(r));  // ...await // 
//     await console.log(4); 
//     queueMicrotask(() => console.log(5)); 
// }
// first();
// second();

// 1 2 3 4 5

//************************ */

/* 📌 Задача 2.10.3: Что будет выведено в консоле и в какой последовательности? */
// async function first() {
//     await console.log(1); 
//     await Promise.resolve(2).then(r => console.log(r)); // ...await // mic // 
//     await console.log(3); // ...await
// }
// async function second() {
//     await Promise.resolve(4).then(r => console.log(r));  // ...await // 
//     console.log(5); 
//     await queueMicrotask(() => console.log(6)); // ...await //
//     setTimeout(() => console.log(7), 0);
// }
// second();
// first()
// 1 4 5 2 6 3 7

//************************ */


/* 📌 Задача 2.10.4: Что будет выведено в консоле и в какой последовательности? */
// async function first() { 
//     await console.log(1); // ...await
//     await console.log(2); 
// }
// async function second() {
//     await console.log(3); // ..await 
//     console.log(4); 
//     await console.log(5); 
// }
// second(); 
// first(); 

// 3 1 4 5 2

//************************ */

/* 📌 Задача 2.10.5: Что будет выведено в консоле и в какой последовательности? */
// async function first() { 
//     console.log(1); 
//     await console.log(2); 
// }
// async function second() {
//     await console.log(3); // ...await
//     console.log(4); 
//     await console.log(5); 
// }
// second(); 
// first(); 
// console.log(14)

// 3 1 2 14 4 5

//************************ */

// /* 📌 Задача 2.10.6: Что будет выведено в консоле и в какой последовательности? */
// async function first() {
//     console.log(1); 
//     await Promise.resolve(2).then(r => console.log(r)); // mic
//     console.log(3); 
// }
// async function second() {
//     Promise.resolve(4).then(r => console.log(r)); //...await // mic
//     console.log(5);
//     await queueMicrotask(() => console.log(6)); // ...await // mic
//     setTimeout(() => console.log(7), 0);
// }
// first();
// second();

// 1 5 2 4 6 3 7

//************************ */

// async function third() {
//   await console.log(1); // ...await
//   Promise.resolve(4).then(r => console.log(r));
// }
// async function first() {
//   third()
//   await Promise.resolve(2).then(r => console.log(r)) // ...await
//   await console.log(5); 
// }
// async function second() {
//   first();
//   Promise.resolve(3).then(r => console.log(r)); // mic
// 	console.log(6) 
// }
// second();

// 1 6 2 3 4 5

//************************ */ 

/* 📌 Вариант 1: Мы писали код через Console Driven Development.
Часть кода у нас потерялась, но остался последний вывод. Расставьте тексты 
для console.log. Последний вывод: 1, 2, 3, 4, 5, 6 */
// async function foo2() {
//   await console.log(3) 
//   Promise.resolve(6).then(r => console.log(r)) // mic
// }
// async function foo3() {
//   Promise.resolve(1).then(r => console.log(r)) 
//   await queueMicrotask(() => {
//       console.log(2) 
//       foo2()
//       console.log(4) 
//   }); 
// 	console.log(5) 
// }
// foo3()

//************************ */ 

/* 📌 Вариант 2: Мы писали код через Console Driven Development.
Часть кода у нас потерялась, но остался последний вывод. Расставьте тексты 
для console.log. Последний вывод: 1, 2, 3, 4, 5, 6 */
// async function foo2() {
//     await console.log(3)  
//     Promise.resolve(6).then(r => console.log(r)) // m
// }
// async function foo3() {
//     await console.log(1) 
//     console.log(2)
//     foo2() 
//     Promise.resolve(5).then(r => console.log(r)); // m
//     console.log(4)
// }
// foo3()

//************************ */ 
