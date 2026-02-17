// Blinova Anna
/*📌Теория 1: Что такое стек? */
// Стек - это структура данных, работает по принципу LIFO  //* 1
/*📌Теория 2: Для чего применяется requestAnimationFrame ? */
// нет ответа //* 0
/*📌Теория 3: Чем прервать fetch запрос ? */
// fetch запрос можно прервать AbortController //* 1
/*📌Теория 4: Что такое mutationObserver ? */
// mutationObserver - это обьект, позволяет наблюдать за изменениями в DOM //* 1
/*📌Теория 5 (только для frontend): Расставить задачи по приоритету  выполнения в  React:
  7. MutationObserver, 
  8. Отрисовка (paint), 
  9. useEffect,
  10. Макрозадачи (Macrotasks),
  2. NexTicks (process.nextTick в Node.js при SSR), 
  3. Promise.then, 
  6. Commit phase — обновление DOM, 
  1. Синхронный код, 
  5. useLayoutEffect, 
  4. Рендер (Render Phase)
  3. queueMicrotask, 
*/
//✅Ответ:
// 1) Синхронный код, 
// 2) NexTicks (process.nextTick в Node.js при SSR)
// 3) queueMicrotask, Promise.then, MutationObserver
// 4) Рендер (Render Phase)
// 5) Commit phase — обновление DOM
// 6) useLayoutEffect,
// 7) Отрисовка (paint)
// 8) useEffect
// 9) Макрозадачи (Macrotasks),
// 👨🏻‍🏫 Пояснение: https://medium.com/@bloodturtle/understanding-reacts-render-phase-and-commit-phase-1a4f09639c35 //* 2
/*📌Теория 6 (только для backend): Что такое process.NextTick, какие сценарии использования? */

/*📌Задача 1: Что выведет консоль в какой очередности ?*/
// function start() {
//   console.log('a');
//   middle();
//   console.log('b');
// }

// function middle() {
//   console.log('c');
//   end();
//   console.log('d');
// }

// function end() {
//   console.log('e');
// }

// start();
// a c e d b //* 1

/*📌Задача 2: Что выведет консоль в какой очередности ?*/
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
// });

// console.log('Code end');

// Promise.resolve().then(() => {
//   console.log('Promise 2');
// });
// Code end  Promise 1  Promise 2  setTimeout //* 1

/*📌Задача 3: Что выведет консоль в какой очередности ?*/
// (function task3() {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('rejected now');
//       reject('failure');
//     }, 1500);
//   });

//   p.then(
//     () => console.log('success 1'),
//     () => console.log('fail 1')
//   ).then(
//     () => console.log('success 2'),
//     () => console.log('fail 2')
//   );

//   p.then(
//     () => console.log('success 3'),
//     () => console.log('fail 3')
//   ).then(
//     () => console.log('success 4'),
//     () => console.log('fail 4')
//   );
// })()
// rejected now fail 1 fail 3 success 2 success 4' //* 1

/*📌Задача 4: Что выведет консоль в какой очередности ?*/
//   (function task4() {
//     const p = new Promise((resolve, reject) => {
//       console.log('Begin');
//       setTimeout(() => {
//         console.log('Failing...');
//         reject('error');
//       }, 500);
//     });

//     p.then(
//       () => console.log('X'),
//       () => console.log('Y')
//     )
//       .then(() => console.log('Z'))
//       .catch(() => console.log('W'))
//       .finally(() => console.log('V'));

//     p.catch(() => console.log('U'))
//       .then(() => console.log('T'))
//       .finally(() => console.log('S'));

//     p.finally(() => console.log('R'))
//       .then(
//         () => console.log('Q'),
//         () => console.log('P')
//       )
//       .catch(() => console.log('O'))
//       .finally(() => console.log('N'));

//     console.log('Finish');
//   }
// )();
// Begin Finish Failing... Y U R Z T P V S N //* 3
//! Begin Finish Failing... Y U R Z T S V P N

/*📌Задача 5: Что выведет консоль в какой очередности ?*/
// function first() {
//   Promise.resolve(1).then((r) => console.log(r));
//   console.log(2);
//   console.log(3);
// }
// function second() {
//   Promise.resolve(4).then((r) => console.log(r));
//   console.log(5);
// }
// second();
// first();
// 5 2 3 4 1 //* 2

/*📌Задача 6: Переписать функцию foo1() на синтаксис Promise.then ?*/
// async function foo1() {
//   await console.log(1);
//   Promise.resolve(2).then((r) => console.log(r));
//   console.log(3);
// } //* 0

/*✅Ответ:
function first() {
    Promise.resolve(console.log(1))
        .then(()=>{
            Promise.resolve(2).then(r => console.log(r)); 
            console.log(3);
        })
}
*/

/*📌Задача 7: Переписать функцию foo2() на синтаксис Promise.then ?*/
// async function foo2() {
//   await first();
//   console.log(3);
// }
// second(); //* 0

// function foo2() {
//   Promise.resolve(first())
//    .then(() => {
//     console.log(3);
//   });
// }
// second();

/* 📌 Задача 8: Мы писали код через Console Driven Development.
Часть кода у нас потерялась, но остался последний вывод. Расставьте тексты 
для console.log. Последний вывод: 1, 2, 3, 4, 5*/
// async function foo2() {
//   await console.log(2);
//   Promise.resolve(5).then((r) => console.log(r));
// }
// async function foo3() {
//   Promise.resolve(1).then((r) => console.log(r));
//   await queueMicrotask(() => {
//     foo2();
//     console.log(3);
//     console.log(4);
//   });
// }
// foo3(); //* 2

/* 📌 Задача 10: Реализовать  Promise.race, покрыть тестами основные adge-cases */
// нет ответа //* 0

/* 📌 Задача 11: Привести пример, доказывающий, что методы resolve, reject объекта Promise являются статическими */ //* 2
// const p = new Promise(() => {})
// console.log(typeof p.resolve)
// console.log(typeof p.reject)

// console.log(typeof Promise.resolve)
// console.log(typeof Promise.reject) 

// > 35% = ok
// у меня 44%

