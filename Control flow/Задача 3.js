//Задача 3. 
//Поиск максимального числа: Напишите программу, которая запрашивает у пользователя три числа и выводит наибольшее из них, используя условные операторы.

const a = prompt("введите первое число", 0);
const b = prompt("введите второе число", 0);
const c = prompt("введите третье число", 0);

function count (a, b, с) {
  if (isNaN(a) || isNaN(b) || isNaN(с) ||
  a === null || b === null || c === null) {
    return "Input error!"
  };
  if (a >= b && a >= c) return +a
  else  
  if (b >= a && b >= c) return +b
  else 
  if (c >= a && c >= b) return +c
};

console.log(count(a, b, c))