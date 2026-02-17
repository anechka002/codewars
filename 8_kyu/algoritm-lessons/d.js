// // async function foo(){
// //     return 123
// // }
// // const p = foo()
// // console.log(p)
// // p.then(r=>console.log(r))

// // // /* Задача 3: Реализуй карирование для стрелочной функции
// // // const foo = (a,b,c) => a+b+c */

// // // const foo2 = (a) => (b) => (c) => a + b + c
// // // console.log(foo2('a')('b')('c'))

// // // /* Задача 5: Поясни логику работы логических операторов A || B && C */
// // // console.log(0 || -0 && 3) //false

// // async function first() {
// //     await Promise.resolve(1).then(r => console.log(r));
// //     Promise.resolve(2).then(r => console.log(r))
// // }
// // async function second() {
// //     await first();
// //     console.log(3)
// // }
// // // function second(){
// // //     return Promise.resolve(first())
// // //         .then(()=>console.log(3))
// // // }
// // second();

// // const array = [1, 2, 3];
// // const results = array.map(async (item) => {
// //     await new Promise(resolve => setTimeout(resolve, 2000));
// // 	console.log(1)
// //     return item * 2;
// // });
// // console.log(results)

// // const array = [1, 2, 3];
// // const results = array.map(async (item) => {
// //     await new Promise(resolve => setTimeout(resolve, 2000));
// //     console.log(1)
// //     return item * 2;
// // });
// // console.log(results)
// // Promise.all(results).then(res => console.log(res))

// // const array = [1, 2, 3];
// // array.forEach(async (item) => {
// //     await new Promise(resolve => setTimeout(resolve, 2000));
// //     console.log(item); //?
// // });
// // console.log('forEach завершен');

// // const array = [1, 2, 3];
// // async function foo(){
// //     for (const item of array) {
// //         await new Promise((resolve) => setTimeout(resolve, 2000));
// //         console.log(item); //1 2 3
// //     }
// //     console.log('for…of завершен'); //?
// // }
// // foo()
// // console.log('End');//1) End

// // const array = [1, 2, 3];
// // const promises = [];
// // for (const item of array) {
// //     promises.push(
// //         (async () => {
// //             await new Promise(resolve => setTimeout(resolve, 2000));
// //             return item * 2;
// //         })()
// //     );
// // }
// // Promise.all(promises).then((r)=>console.log(r))

// // const obj = { a: 1, b: 2, c: 3 };
// // const results = Object.values(obj).map(async (value) => {
// //     await new Promise(resolve => setTimeout(resolve, 2000));
// //     return value * 2;
// // })
// // Promise.all(results).then((r)=>console.log(r))

// // const array = [1, 2, 3];
// // for (let i = 0; i < array.length; i++) {
// //     async function task() {
// //         await new Promise(resolve => setTimeout(resolve, 2000));
// //         console.log(array[i]);//?
// //     }
// //     task();
// // }
// // console.log('for завершён');//1) for завершён

// // 1. Методы массива (map, forEach) не предназначены для асинхронных операций - они запускают все callback-функции параллельно и немедленно возвращают результат, не дожидаясь разрешения промисов.
// // 2. Параллельное выполнение достигается через:
// //  - map + Promise.all - для одновременного запуска всех операций;
// //  - forEach - не рекомендуется из-за потери контроля над промисами.
// // 3. Последовательное выполнение достигается через:
// //  - for...of с await внутри асинхронной функции;
// //  - Классический for цикл с await внутри асинхронной функции.
// // 4. Структура данных не влияет на логику выполнения - Object.values() преобразует объект в массив, после чего применяются те же правила.

// // const array = [1, 2, 3];
// // async function foo(){
// //   for (let i = 0; i < array.length; i++) {
// //     await new Promise((resolve) => setTimeout(resolve, 2000));
// //     console.log(array[i]); //?
// //   }
// //   console.log('for завершен'); //?
// // }
// // foo()
// // console.log('End');

// // /* 📌 Задача 2.11: Напиши функцию debounce, которая принимает
// // функцию fn и задержку в миллисекундах.
// // Эта функция должна вызывать fn не чаще, чем раз в заданное количество миллисекунд,
// // даже если она будет вызываться несколько раз подряд. */
// // const debounce = (fn, delay) => {
// //     let timeoutId; //

// //     return function(...args) {
// //         clearTimeout(timeoutId) //очищаем предыдущий таймер, если он сущ

// //         timeoutId = setTimeout(() => {
// //             timeoutId = null //timer сработал и не активен более
// //             fn(...args)
// //         }, delay);
// //     }
// // }

// // //дебаунсить это:
// // function fetching(url1, url2){
// //     console.log(`fetching from ${url1} to  ${url2}....`)
// // }

// // // Debounce — это техника, которая ограничивает частоту вызова функции.
// // // Она запускает функцию только после паузы (delay) с момента последнего
// // //вызова,
// // // а все предыдущие вызовы игнорируются, если до истечения задержки (delay)
// // // приходит новый вызов.
// // const result = debounce(fetching, 500)
// // // test
// // setTimeout(()=>result(1,2), 100) //❗️ПРЕРВАЛИ
// // setTimeout(()=>result(2,3), 100) //fetching from 2 to 3....
// // setTimeout(()=>result(3,4), 605) //fetching from 3 to 4....
// // setTimeout(()=>result(4,5), 1605) //fetching from 3 to 4....

// // // debounce(fetching(1, 2), 0)
// // // debounce(fetching(2, 3), 400)
// // // debounce(fetching(3, 4), 600)

// /* 📌 Задача 2.12: Напиши функцию throttle, которая принимает функцию fn и
// интервал в миллисекундах. Функция должна вызывать fn не чаще, чем раз в указанный
// интервал. */
// // const throttle = (fn, interval) => {
// //     let isWaiting = false;
// //     return function(...args) {
// //         if (!isWaiting) {
// //             fn.apply(this, args)
// //             isWaiting = true

// //             setTimeout(()=>{isWaiting = false}, interval);
// //         }

// //     }
// //     //…
// // }

// // /*throttle — это техника, которая ограничивает частоту вызова функции,
// // разрешая её выполнение не чаще, чем раз в заданный интервал (delay),
// // независимо от количества вызовов */
// // const throttle = (fn, interval) => {
// //     let lastTime = 0

// //     return (...args)=>{
// //         let now = Date.now()
// //         if(now-lastTime >= interval){
// //             lastTime = now
// //             fn(...args)
// //         }
// //     }
// // }

// // function fetching(url1, url2){
// //     console.log(`fetching from ${url1} to  ${url2}....`)
// // }

// // const result = throttle(fetching, 500)
// // // test
// // setTimeout(()=>result(1,2), 0) //fetching from 1 to  2....
// // setTimeout(()=>result(2,3), 400) //ignore
// // setTimeout(()=>result(3,4), 600) //fetching from 3 to  4....

// // //    |--------------||---------||
// // //.   37    38

// // 1. Синхронный код;
// // 2. NexTicks (process.nextTick в Node.js при SSR):
// // 3. Микрозадачи (Microtasks): Promise.then, queueMicrotask, MutationObserver;
// // 4. Рендер (Render Phase):
// // 5. Commit phase — обновление DOM
// // 6. useLayoutEffect:
// // 6. Отрисовка (paint):
// // 7. useEffect:
// // 8. Макрозадачи (Macrotasks): setTimeout, setInterval, requestAnimationFrame, события ввода/вывода;

// // /* 📌 Задача 2.12: Напиши функцию throttle, которая принимает функцию fn и
// // интервал в миллисекундах. Функция должна вызывать fn не чаще, чем раз в указанный
// // интервал. */
// // // const throttle = (fn, interval) => {
// // //     let isWaiting = false;
// // //     return function(...args) {
// // //         if (!isWaiting) {
// // //             fn.apply(this, args)
// // //             isWaiting = true

// // //             setTimeout(()=>{isWaiting = false}, interval);
// // //         }

// // //     }
// // //     //…
// // // }

// // /*hrottle — это техника, которая ограничивает частоту вызова функции,
// // разрешая её выполнение не чаще, чем раз в заданный интервал (delay),
// // независимо от количества вызовов */
// // const throttle = (fn, interval) => {
// //     let lastTime = 0

// //     return (...args)=>{
// //         let now = Date.now()
// //         if(now-lastTime >= interval){
// //             lastTime = now
// //             fn(...args)
// //         }
// //     }
// // }

// // function fetching(url1, url2){
// //     console.log(`fetching from ${url1} to  ${url2}....`)
// // }

// // const result = throttle(fetching, 500)
// // // test
// // setTimeout(()=>result(1,2), 0) //fetching from 1 to  2....
// // setTimeout(()=>result(2,3), 400) //ignore
// // setTimeout(()=>result(3,4), 600) //fetching from 3 to  4....

// // //    |--------------||---------||
// // //.   37    38

// Сигнатура:
// 1) Конструктор
// let observer = new MutationObserver(callback);
// где
//  - возвращает observer - экземпляр наблюдателя (объект типа MutationObserver);
//  - сallback — функция, которая будет вызвана при изменениях в DOM. Она принимает два аргумента:
//   - mutationRecords — массив объектов MutationRecord, описывающих изменения.
//   - observer — ссылка на сам MutationObserver

// 2) Метод observe:
// observer.observe(targetNode, options)
// {
//   childList: true,       //наблюдать за добавлением/удалением дочерних узлов
//   subtree: true,         //наблюдать за всеми потомками (не только прямыми детьми)
//   attributes: true,      //наблюдать за изменениями атрибутов
//   attributeFilter: ["style", "class"], //наблюдать только за указанными атрибутами
//   characterData: true,   //наблюдать за изменениями текстового содержимого
//   characterDataOldValue: true, //сохранять старое значение текста
//   attributeOldValue: true //сохранять старое значение атрибута
// }

// 3) Методы управления:
//  - observer.disconnect() — останавливает наблюдение;
//  - observer.takeRecords() — возвращает список необработанных изменений.

/* 📌 Задача 3.2: Необходимо отследить добавление нового элемента в <div id="container"> и вывести информацию об изменениях в консоль.  */
// <!-- MutationObserver -->
// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>

// <body>
//   <div id="container">
//     <p>Исходный текст</p>
//   </div>
//   <button onclick="addElement()">Добавить элемент</button>

// </body>
// <script>
//  //…
// </script>

// </html>

/*
<!-- MutationObserver -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="container">
    <p>Исходный текст</p>
  </div>
  <button onclick="addElement()">Добавить элемент</button>

</body>
<script>
  const observer = new MutationObserver((mutationRecords, observer)=>{
    mutationRecords.forEach((record)=>{
      console.log('тип изменнения:', record.type)
      if(record.type==="childList"){
        console.log('добавлен узел:', record.addedNodes)
      }
    })
  })

  const container  = document.getElementById('container')

  observer.observe(container, {
    childList: true,
  })

  function addElement(){
    const newElement = document.createElement('p')
    newElement.textContent  = 'hello Евгений!'
    container.appendChild(newElement)
  }

</script>

</html>
*/

// const callback = () => console.log(1); //4) 1
// const urgentCallback = () => console.log(2); //3) 2
// console.log(3); //1) 3
// setTimeout(callback, 0);
// queueMicrotask(urgentCallback);
// console.log(4); //2) 4

/*
window.requestAnimationFrame(callback)
 - callback - фун для обнов анимаиции
 - element? - эдем с анимацией
возвращает id 
*/
/*
<!-- requestAnimationFrame -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Анимация с requestAnimationFrame</title>
  <style>
    #container p {
      position: relative;
      transition: transform 0.1s linear;
    }
  </style>
</head>
<body>
  <div id="container">
    <p>Исходный текст</p>
  </div>
  <button onclick="addElement()">Добавить элемент</button>

  <script>
    function animateElement(element) {
      let start = null;
      function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        element.style.transform = `translateX(${Math.min(progress / 10, 200)}px)`;
        if (progress < 2000) {
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    }
    // Анимация для существующего элемента
    const existingElement = document.querySelector("#container p");
    animateElement(existingElement);
    // Функция для добавления нового элемента
    function addElement() {
      const newElement = document.createElement("p");
      newElement.textContent = "Новый элемент";
      document.getElementById("container").appendChild(newElement);
      animateElement(newElement);
    }
  </script>
</body>
</html>*/

/*
import { useRef, useEffect } from 'react';

function useAnimationFrame(callback) {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime); // Execute the animation logic provided by the component
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount
}

export default useAnimationFrame;*/

/* 📌Задача 3.12. PROMISE RACE
Напиши функцию myPromiseRace, которая имитирует поведение Promise.race */
const myPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item)
        .then((r) => resolve(r))
        .catch((err) => {});
    });
  });
};

//test
const p1 = new Promise((res) => setTimeout(() => res('p1'), 1000));
const p2 = new Promise((_, rej) => setTimeout(() => rej('error1'), 500));
const p3 = new Promise((res) => setTimeout(() => res('p3'), 3000));
const p4 = new Promise((_, rej) => setTimeout(() => rej('error2'), 2000));

myPromiseRace([p1, p2, p3])
  .then((r) => console.log(r))
  .catch((err) => console.log(err)); //error1

myPromiseRace([p1, p3, p4])
  .then((r) => console.log(r)) //p1
  .catch((err) => console.log(err));

Promise.race([Promise.resolve(1)]).then(console.log);

//console.log(Promise.race([Promise.resolve("1")]))
