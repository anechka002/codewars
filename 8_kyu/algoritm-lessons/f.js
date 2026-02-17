/* 📌Задача 1.5. Напиши функцию curry, которая позволяет преобразовать функцию 
с несколькими аргументами в функцию, которая принимает один (или более) аргумент
за раз и возвращает новую функцию для следующего аргумента. Типизировать функцию */
const myCurry = (fn) => {
 //…
};
const sum = (a, b, c) => a - b * c;
const curriedSum = myCurry(sum);
// console.log(curriedSum(3)(2)(1));
// console.log(curriedSum(3, 2)(1)); 
// console.log(curriedSum(3)(2, 1));
// console.log(curriedSum(3, 2, 1));

//******************************** */
// const blackRock = {
//   cave1: {
//     item: 'trash',
//     cave1: {
//       item: 'bones',
//     },
//     cave2: {
//       item: 'trash',
//       cave1: {
//         item: 'diamond',
//       },
//     },
//     cave3: {
//       item: 'trash',
//     },
//   },
//   cave2: {
//     item: 'trash',
//     cave1: {
//       item: 'coins',
//       cave1: {
//         item: 'diamond',
//         cave1: {
//           item: 'trash',
//         },
//       },
//     },
//   },
//   cave3: {
//     item: null,
//     cave1: {
//       item: 'trash',
//       cave1: {
//         item: 'diamond',
//       },
//     },
//   },
// };

// function digger(rock) {
//   //всегда объект! всегда не пустой
//   let count = 0;

//   for (let key in rock) {
//     if (
//       typeof rock[key] === 'string' &&
//       key === 'item' &&
//       rock[key] === 'diamond'
//     ) {
//       count++;
//     } //base case
//     else if (typeof rock[key] === 'object' && rock[key] !== null) {
//       count = count + digger(rock[key]);
//     }
//   }
//   return count;
// }

// //test:
// const result = digger(blackRock);
// console.log(result); //3

//******************************** */

// const memoize = (fn) => {
// 	const cache = new Map()
	
// 	return (...arg)=>{                      // [1,2] => 1, 2
// 	    const key = JSON.stringify(arg)
// 	    console.log('cache', cache)
// 	    console.log('key', key)
// 	    if(!cache.has(key)) {
// 	        console.log(`кешируем`)
// 	        cache.set(key, fn(...arg))
// 	    }
// 	   console.log(`из кэша`)
// 	   return cache.get(key)
// 	}
// };

// //мемоизируем функцию 
// function fetching1(url1, url2){
//     return `from ${url1}  to ${url2}`
// }

// // tests
// const result1 = memoize(fetching1)


// console.log(result1(1, 2)) // вычислит res
// console.log(result1(1, 2))

//******************************** */

/*
тема:
- рекурсия
- мемоизация
- коллекции 
*/

// const arr1 = [1,2,3,4]
// function recursiveSumm(arr) { //всегда массив чисел!
//   if (arr.length === 0) {
//       console.log(`from callstack empty array`)
//       return 0
//   }
//   let result = arr[0] + recursiveSumm(arr.slice(1))
//   console.log(`from callstack ${arr[0]}`)
//   return result
// }
// //test:
// const result = recursiveSumm(arr1)
// console.log(result)
// /*
// 1. recursiveSumm([1, 2, 3, 4])            // начальный вызов
//   ↓
// 2. arr[0] = 1 + recursiveSumm([2, 3, 4])  // первый шаг
//      ↓
// 3.         arr[0] = 2 + recursiveSumm([3, 4])
//              ↓
// 4.                 arr[0] = 3 + recursiveSumm([4])
//                      ↓
// 5.                         arr[0] = 4 + recursiveSumm([])
//                              ↓
// 6.                                     recursiveSumm([]) → 0  // базовый случай!
// */

// /* 📌Задача 2.4 Напишите рекурсивную функцию fibonacci(n), 
// которая возвращает 
// n-е число Фибоначчи. Числа Фибоначчи определяются следующим образом 
// каждое следующее число равно сумме двух предыдущих 
//  F(n) = F(n-1) + F(n-2)
// */


// function fibonacci(arg) {
//     if (arg === 0) return 0 
//     if(arg === 1) return 1
//     return fibonacci(arg - 1) + fibonacci(arg - 2)
// }


// //test
// console.log(fibonacci(0)) // 0 
// console.log(fibonacci(1)) // 1
// console.log(fibonacci(6)) // 8
// console.log(fibonacci(10)) // 55

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34.   Фибоначчи
//0  1  2. 3. 4. 5  6.  7. 8   9

// /* 📌Задача 2.5 Напишите рекурсивную функцию factorial(n), которая 
// возвращает факториал числа n. Факториал числа n определяется как: 
// Добавьте проверку на отрицательные числа и выбросьте ошибку, если n<0 */


// function factorial(n){
//     if(n < 0) throw new Error
//     if(n === 0 || n === 1){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))
// console.log(factorial(7))

// //1, 1, 2, 6, 24,  120
// //0, 1, 2, 3, 4,  5


/* 📌Задача 2.6.1 Напиши функцию memoize1, которая кэширует результаты выполнения функции,
чтобы не вычислять их повторно для одинаковых входных данных. */

//cache.set(key, value) => add to collection 
//cache.has(key) => boolean
//cache.get(key) => value

// const memoize = (fn) => {
// 	const cache = new Map()
	
// 	return (arg)=>{
// 	    if(!cache.has(arg)) {
// 	        console.log(`кешируем`)
// 	        cache.set(arg, fn(arg))
// 	   }
// 	   console.log(`из кэша`)
// 	   return cache.get(arg)
// 	}
// };

// //мемоизируем функцию 
// function fetching1(url){
//     return `from me to ${url}`
// }

// function fetching2(url){
//     return `from me to ${url}`
// }

// // tests
// const result1 = memoize(fetching1)
// const result2 = memoize(fetching2)

// console.log(result1(1)) // вычислит res
// console.log(result1(2)) // возьмет замемоизированный результат из вызова1
// console.log(result1(1))


// const memoize = (fn) => {
// 	const cache = new Map()
	
// 	return (...arg)=>{                      // [1,2] => 1, 2
// 	    const key = JSON.stringify(arg)
// 	    console.log(cache)
// 	    console.log(key)
// 	    if(!cache.has(key)) {
// 	        console.log(`кешируем`)
// 	        cache.set(key, fn(...arg))
// 	    }
// 	   console.log(`из кэша`)
// 	   return cache.get(key)
// 	}
// };

// //мемоизируем функцию 
// function fetching1(url1, url2){
//     return `from ${url1}  to ${url2}`
// }

// // tests
// const result1 = memoize(fetching1)

// console.log(result1(1, 2)) // вычислит res
// console.log(result1(1, 2))

/* 📌Задача 2.6.3 Напиши функцию memoize3,  которая мемоизирует результаты 
выполнения функции factorial из задачи 2.5 */

// const cashe = new Map() //?


// function memoize3(n){
//     if(n<0) throw new Error (`incorrect input, n should be more than 0`)
//     if(n === 0)  return 1
//     if(cashe.has(n)){
//         console.log('из хеш', n)
//         return cashe.get(n)
//     }else{
//         console.log('кеширую из', n)
//         const result = n * memoize3(n-1)
//         cashe.set(n, result)
//         return result
//     }
    
// };

// console.log(memoize3(5)) //кэширование 5 4 3 2 1, 120
// console.log(memoize3(5)) //из кэша 120
// console.log(memoize3(4))  //24
// console.log(memoize3(6)) //кэшировать 6, остальное из кэша

//cache.set(key, value) => add to collection 
//cache.has(key) => boolean
//cache.get(key) => value

// function globalMemo() {
//     const cache = new Map();

//     function factorial(n) {
//         if (n < 0) throw new Error('incorrect input, n should be ≥ 0');
//         if (n === 0 || n === 1) return 1;

//         if (cache.has(n)) {
//             console.log('из кэша', n);
//             return cache.get(n);
//         } else {
//             console.log('кэширую', n);
//             const result = n * factorial(n - 1);
//             cache.set(n, result);
//             return result;
//         }
//     }

//     return factorial;
// }

// const memoFactorial = globalMemo();

// console.log(memoFactorial(5)); // кэширование 5,4,3,2 → 120
// console.log(memoFactorial(5)); // из кэша 5 → 120
// console.log(memoFactorial(4)); // из кэша 4 → 24
// console.log(memoFactorial(6)); // кэширование 6, остальное из кэша → 720

