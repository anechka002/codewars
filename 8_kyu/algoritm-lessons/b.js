//ФИО☑️ Сергеев Дмитрий

/*📌Теория:1  Что такое лексическое окружение?
Ответ: ☑️ Это все переменные и функции, объявленные в области видимости, а также ссылку на внешнее ролительское окружение.
*/

/*📌Теория:2  Какая область видимости var?
Ответ: ☑️ Функциональная
*/

/*📌Теория:3  Где определены методы call, aplly, bind?
Ответ: ☑️ В объекте Function.prototype
*/

/*📌Теория:4  Являются ли методы call, aplly, bind статическми? Почему?
Ответ: ☑️ Не являются, потому что это методы экземпляра, а не конструктора
*/

/*📌Задача 1: Что выведет консоль? В случае undefined предложить решение*/
// const obj = {
//     name: "Alice",
//     greet() {
//         console.log(`Hello, ${this.name}`);
//     }
// };
// const greetFn = obj.greet;
// greetFn() //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/ 
// const greetFn = obj.greet.bind(obj);


/*📌Задача 2: Что выведет консоль? В случае undefined предложить решение*/
// const user = {
//     name: "Bob",
//     sayHi() {
//         setTimeout(function () {
//             console.log(`Hi, ${this.name}`);
//         }, 1000);
//     }
// };
// user.sayHi(); //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/
// sayHi() {
//         setTimeout(() => {
//             console.log(`Hi, ${this.name}`);
//         }, 1000);
//     }



/*📌Задача 3: Что выведет консоль? В случае undefined предложить решение*/
// const button = document.createElement("button");
// button.textContent = "Click me";
// document.body.appendChild(button);
// const obj1 = {
//     text: "Hello!",
//     handleClick() {
//         console.log(this.text);
//     }
// };
// button.addEventListener("click", obj1.handleClick); //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/ 
// button.addEventListener("click", obj1.handleClick.bind(obj1));


/*📌Задача 4: Что выведет консоль? В случае undefined предложить решение*/
// const user1 = {
//     name: "Charlie",
//     print() {
//         console.log(this.name);
//     }
// };
// ["a", "b", "c"].forEach(user1.print); //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/
// ["a", "b", "c"].forEach(user1.print.bind(user1));


/*📌Задача 5: Что выведет консоль? В случае undefined предложить решение*/
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     introduce() {
//         console.log(`My name is ${this.name}`);
//     }
// }
// const john = new Person("John");
// const intro = john.introduce;
// intro() //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/
// const intro = john.introduce.bind(john);


/*📌Задача 6: Что выведет консоль? В случае undefined предложить решение*/
// const scientist = {
//     field: "Physics",
//     logField ()  {
//         console.log(this.field);
//     }
// };
// scientist.logField(); // Ответ: ☑️ Physics
/*
☑️ Исправленная версия в случае undefined
*/


/*📌Задача 7: Что выведет консоль? В случае undefined предложить решение*/
// class Animal {
//     constructor(type) {
//         this.type = type;
//     }
//     makeSound() {
//         setTimeout( () => {
//             console.log(`${this.type} makes a sound`);
//         }, 1000);
//     }
// }
// const dog = new Animal("Dog"); //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/
// dog.makeSound()


/*📌Задача 7: Что выведет консоль? В случае undefined предложить решение*/
// const library = {
//     category: "Fiction",
//     books: ["Book 1", "Book 2", "Book 3"],
//     getCategory() {
//         return this.category;
//     }
// };
// const categories = library.books.map(library.getCategory());
// console.log(categories);  //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/
// const categories = library.books.map(() => library.getCategory());


/*📌Задача 8: Что выведет консоль? В случае undefined предложить решение*/
// const device = {
//     brand: "Apple",
//     logBrand() {
//         function inner() {
//             console.log(this.brand);
//         }
//         inner();
//     }
// };
// device.logBrand(); //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/
// const inner = () => {console.log(this.brand)}


/*📌Задача 8: Что выведет консоль? В случае undefined предложить решение*/
// class ApiService {
//     constructor(baseUrl) {
//         this.baseUrl = baseUrl;
//     }
//     getData() {
//         fetch(this.baseUrl)
//             .then( function () {
//                 console.log(this.baseUrl);
//             });
//     }
// }
// const api = new ApiService("https://google.com");
// api.getData(); //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/
// передать в then стрелочную функцию


/*📌Задача 9: Что выведет консоль? В случае undefined предложить решение*/
// class Counter {
//     constructor(start) {
//         this.count = start;
//     }
//     increase() {
//         console.log(++this.count);
//     }
// }
// const myCounter = new Counter(5);
// setTimeout(myCounter.increase, 1000); //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/
// setTimeout(myCounter.increase.bind(myCounter), 1000); //Ответ: ☑️

/*📌Задача 10: Что выведет консоль? В случае undefined предложить решение*/
// class Game {
//     constructor(title) {
//         this.title = title;
//     }
//     start() {
//         console.log(`Starting ${this.title}`);
//     }
//     startArrow = () => {
//         console.log(`Starting ${this.title}`);
//     };
// }
// const play = new Game("Chess");
// const startGame = play.start.bind(play);
// const startGameArrow = play.startArrow;
// startGame(); //Ответ: ☑️
// startGameArrow(); //Ответ: ☑️
/*
☑️ Исправленная версия в случае undefined
*/

/*📌Задача 11: Что выведет консоль? */
// function counter() {
//     let count = 0;
//     return {
//         inc() {
//             count++;
//             console.log(count);
//         },
//     };
// }
// const c1 = counter();
// const c2 = counter();
// c1.inc(); //Ответ: ☑️
// c1.inc(); //Ответ: ☑️
// c2.inc(); //Ответ: ☑️
// c1.inc(); //Ответ: ☑️
// c2.inc(); //Ответ: ☑️


/*📌Задача 12: Что выведет консоль и в каком порядке? */
// function delayedLogger() {
//     let message = "Hello";
//     setTimeout(() => {
//         console.log(message);
//     }, 1000);
//     message = "Goodbye";
// }
// delayedLogger();
//Ответ: ☑️


/*📌Задача 14: Что выведет консоль */
// let a = 10;
// function outer() {
//     let a = 20;
//     return function inner() {
//         console.log(a);
//     };
// }
// const fn = outer();
// fn(); //Ответ: ☑️


/*📌Задача 15: Что выведет консоль */
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i); //Ответ: ☑️
//     }, 1000);
// }


/*📌Задача 16: Что выведет консоль */
// const x = 10;
// function foo() {
//     const x = 20;
//     console.log(x); //Ответ: ☑️
// }
// foo();
// console.log(x); //Ответ: ☑️


/*📌Задача 17: Что выведет консоль */
// function change(obj) {
//     obj.name = "Frontend";
//     obj = { name: "Developer" };
//     return obj;
// }
// const user = { name: "JS" };
// const result = change(user);
// console.log(user.name) //Ответ: ☑️
// console.log(result.name) //Ответ: ☑️


/*📌Задача 18: Что выведет консоль */
// let count = 2
// function createCounter() {
//     return function increment() {
//         count = 3 // Перезаписываем глобальную count на 3 (было 4)
//         count++; // 3 + 1 = 4
//         console.log(count); // ✅ Выводит 4
//     };
// }

// const counter = createCounter();
// counter(); //Ответ: ☑️
// counter(); //Ответ: ☑️
// counter(); //Ответ: ☑️



/*📌Задача 18: Что выведет консоль */
// let count = 2
// function createCounter() {
//     return function increment() {
//         setTimeout(() => {
//             count++;
//             console.log(count);
//         }, 1000);
//     };

// }
// count = 3
// const counter = createCounter();
// counter(); //Ответ: ☑️
// counter(); //Ответ: ☑️
// counter(); //Ответ: ☑️


/*📌Задача 19: Что выведет консоль */
// function createCounter() {
//     let count = 2
//     return function increment() {
//         count = 0;
//         setTimeout(() => {
//             count++;
//             console.log(count);
//         }, 1000);
//     };
// }
// const counter = createCounter();
// counter();  //Ответ: ☑️
// counter();  //Ответ: ☑️
// counter();  //Ответ: ☑️


/*📌Задача 20: Что выведет консоль */
// {
//     var a = 10;
// }
// console.log(a); //Ответ: ☑️

// {
//     let b = 20;
// }
// console.log(b);  //Ответ: ☑️


/*📌Задача 21: Что выведет консоль */
// const user = {
//     x: "Zmiter"
// }
// const obj = {
//     x: 10,
//     getX() {
//         return this.x;
//     }
// };
// const getX = obj.getX;
// console.log(obj.getX())  //Ответ: ☑️
// console.log(getX());  //Ответ: ☑️


/*📌Задача 22: Что выведет консоль */
// const server = {
//     name: "Main Server",
//     start() {
//         setImmediate( () => {
//             console.log(`Running on: ${this.name}`);
//         });
//     }
// };
// server.start(); //Ответ: ☑️