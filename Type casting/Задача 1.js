// Задача 1

const str = "123abc";
console.log(Number(str))// nan

const str = "123abc";
console.log(parseInt(str))// 123. Функция parseInt извлекла и вернула из строки целое число, игнорируя нечисловые символы.
