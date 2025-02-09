// Задача 1. Сравнение типов

console.log("0" === 0)// false
console.log(Object.is("0", 0))// false

console.log(false === "false")// false
console.log(Object.is(false, "false"))// false

console.log(null === undefined)// false
console.log(Object.is(null, undefined))// false

console.log([] === false)// false
console.log(Object.is([], false))// false