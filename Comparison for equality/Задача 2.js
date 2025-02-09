// Задача 2. Преобразование типов

console.log(NaN === NaN)// false
console.log(Object.is(NaN, NaN))// true

console.log(+0 === -0)// true
console.log(Object.is(+0, -0))// false