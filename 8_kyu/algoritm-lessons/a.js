// let message;
// function simpleLogger() {
//     console.log(message);
//     message = "Goodbye";
// }
// function delayedLogger() {
//     message = "Hello";
//     setTimeout(() => {
//         console.log(message);
//         message = "Goodnight";
//         message = "Good";
//     }, 1000);
// }
// delayedLogger();
// simpleLogger();

/*❗️ Учебные вопросы 1:
1. Структура данных 
2. Очередь
*/

// function first() {
//     console.log(1);
//     second();
//     console.log(2);
// }

// function second() {
//     console.log(3);
//     third();
//     console.log(4);
// }

// function third() {
//     console.log(5);
// }

// first();

/*❗️ Учебные вопросы 2:
1. Асинхронное программирование
2. Event Loop
3. Микрозадачи и макрозадачи
*/

/*❗️ Учебные вопросы 4:
Event Queue
*/

/* 📌 Задача 1.2: Что будет выведено в консоле и в какой последовательности? */
// function first() {
//     console.log(1);
//     setTimeout(() => {
//     console.log(6);
//     }, 0);
//     second();
//     console.log(2);
// }
// function second() {
//     console.log(3);
//     new Promise((resolve) => {
//     console.log(7);
//     resolve();
//     }).then(() => {
//     console.log(8);
//     });
//     third();
//     console.log(4);
// }
// function third() {
//     console.log(5);
// }
// first();

/* 📌 Задача 1.3: Мы писали код через Console Driven Development.
Часть кода у нас потерялась, но остался последний вывод. Расставьте тексты 
для console.log. Последний вывод: 1, 2, 3, 4, 5, 6 */
// function myOrder() {
//     console.log('?');

//     async function asyncFoo() {
//     console.log('?');
//     await Promise.resolve(null);
//     console.log('?');
// }

// asyncFoo();

// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//         console.log('?');
//     }, 0);
//     }).then(() => {
//     console.log('?');
// });

// console.log('?');
// }

// myOrder();

/* 📌 Задача 1.4: Мы писали код через Console Driven Development.
Часть кода у нас потерялась, но остался последний вывод. Расставьте тексты 
для console.log. Последний вывод: 1, 2, 3, 4, 5, 6, 7 */
// async function checkOrder() {
//     console.log('');

//     const promise1 = Promise.resolve().then(() => {
//         console.log('');
//     });

//     setTimeout(() => {
//         console.log('');
//     }, 0);

//     await Promise.resolve();

//     const promise2 = new Promise((resolve) => {
//         console.log('');
//         resolve();
//     }).then(() => {
//         console.log('');
//     });

//     console.log('');
// }
// checkOrder();
// console.log('');

/*❗️ Учебные вопросы 5:
Объект Promise
*/
// Простая асинхронная функция с Promise
// const delay = (ms) => {
//     return new Promise((resolve) => setTimeout(resolve, ms))
// }

/* 📌 Задача 2.2: Напиши функцию promisify, которая преобразует функцию с обратным вызовом 
в функцию, возвращающую промис */

// const promisify = (fn) => {
// 	return (...arg) => {
// 	    return new Promise((resolve) => {
// 	        const result = fn(...arg)
// 	        resolve(result) //передаем результ выполн фун в resolve, чтобы Promise завершился успешно с этим результатом
// 	    })
// 	}
// }

// //test
// function fetch(url){
//     return `fethcing ${url} ...`
// }

// const result = promisify(fetch)
// console.log(result('http://vk.com')) //Promise { 'fethcing http://vk.com...' }

/*❗️ Учебные вопросы 5:
 Promise.resolve(value)
 Promise.reject(error)
*/

// setTimeout(() => {
//     console.log('timeout')
// }, 0);

// const p = new Promise((resolve, reject) => {
//     console.log('Promise creation');
//     resolve()
// })

// const p2 = new Promise((resolve, reject) => {
//     console.log(123)
// })

// p.then(() => {
//     console.log('Promise resolving');
// })

// console.log('End')
// console.log('p2 =>>', p2)

// then и catch — методы для обработки результатов и ошибок в Promise.
// 🔻then:
//   - Вызывается, когда Promise успешно выполнен (resolve);
//   - Принимает функцию, которая получает результат;
//   - Метод then принимает два аргумента (благодаря чему способен обрабатывать отказ):
//    - Первый аргумент — функция, которая выполняется при успешном разрешении Promise (fulfilled);
//    - Второй аргумент — функция, которая выполняется при отклонении Promise (rejected).
// 🔻catch:
//   - Вызывается, если Promise завершился с ошибкой (reject);
//   - Принимает функцию, которая получает ошибку.
// 🔻finally:
//   - это метод Promise, который выполняется всегда, независимо от того, завершился ли Promise успешно (resolve) или с ошибкой (reject). Он используется для выполнения кода, который должен быть выполнен в любом случае, например, для очистки ресурсов;
//   - Не получает аргументов (ни результат, ни ошибку);
//   - Не влияет на результат цепочки (его возвращаемое значение игнорируется).

/* 📌 Задача 2.4: Что будет выведено в консоле и в какой последовательности? */
// (function question(){
//     const p = new Promise((_, reject)=>{
//         setTimeout(()=> {
//             console.log('rejected'); //1) rejected
//             reject()
//         }, 2000);
//     });
//     //отдельно
//     p.then(
//         ()=>console.log('10'),
//         ()=>console.log('11') //2) 11
//     ).then(
//         ()=> console.log('13'), //5) 13
//         ()=> console.log('14')
//     )
//     //отдельно
//     p.then(
//         ()=>console.log('18'),
//         ()=>console.log('19') //3) 19
//     )
//     //отдельно
//     p.then(
//         ()=>console.log('23'),
//         ()=>console.log('24') //4) 24
//     )
// })()

// const getData = () =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res('some data');
//     }, 1000);
//   });

// getData()
//   .then((data) => {
//     console.log('then1', data);
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         rej('some error');
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     console.log('then2', data);
//     return 20;
//   })
//   .catch((e) => {
//     console.log('catch1', e);
//     return 30;
//   })
//   .then((data) => {
//     console.log('then3', data); 
//     return b;
//   })
//   .then((data) => {
//     console.log('then4', data);
//     return 40;
//   })
//   .catch((data) => {
//     console.log('catch2', data); 
//     return 50;
//   })
//   .finally((data) => {
//     console.log('finally', data); 
//     return 60;
//   })
//   .then((data) => {
//     console.log('then5', data); 
//   });
// 

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
// 