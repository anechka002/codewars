// Description:
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// Solution:

// Функция для расчета стоимости интернета
function calculateInternetCost(A, B, C, D) {
    let totalCost;

    if (D <= B) {
        totalCost = A; // Если трафик в пределах лимита
    } else {
        const additionalMB = D - B; // Дополнительные мегабайты
        totalCost = A + (additionalMB * C); // Итоговая стоимость
    }

    return totalCost;
}
console.log(calculateInternetCost(100, 10, 12, 15))
console.log(calculateInternetCost(100, 10, 12, 1))
// Пример ввода
// const input = "100 10 12 15"; // Здесь вы можете заменить на любой ввод
// const [C, M, E, T] = input.split(" ").map(Number);

// // Вычисление и вывод результата
// const result = calculateInternetCost(C, M, E, T);
// console.log(result);