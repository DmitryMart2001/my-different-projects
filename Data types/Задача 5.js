//Задача 5: Преобразование типов

//Строка в число
let str = "string";
console.log(Number(str))// nan

let str = "50";
console.log(Number(str))// 50

let str = "50";
console.log(+(str))// 50

//Число в строку
let num = 50;
console.log(String(num))// "50"

//Булевое значение в строку
const value = true;
console.log(String(value))// "true"