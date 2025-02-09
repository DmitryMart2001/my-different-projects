//1) Блочная область видимости let и const
let demo = (500 + 500)
function incr () {
  const pi = 3.14 
  console.log((500 - 200) / pi)
}
console.log(demo) //1000; Переменная доступна, т.к. не находится внутри функции incr.
//------------
let demo = (500 + 500)
function incr () {
  const pi = 3.14 
  console.log((500 - 200) / pi)
}
console.log(pi) //ReferenceError: pi is not defined; Переменная доступна только внутри блока функции incr и при обращении извне вызывает ошибку.
//------------
const demo = (500 + 500)
function incr () {
  const pi = 3.14 
  console.log((500 - 200) / pi)
}
console.log(demo) //1000; Переменная доступна, т.к. не находится внутри функции incr.
//------------
const demo = (500 + 500)
function incr () {
  const pi = 3.14 
  console.log((500 - 200) / pi)
}
console.log(pi) //ReferenceError: pi is not defined; Переменная доступна только внутри блока функции incr и при обращении извне вызывает ошибку.

// Функциональная область видимости переменной var
function incr () {
  var pi = 3.14 
  console.log((500 - 200) / pi)
  }
console.log(pi) //ReferenceError: pi is not defined; если блок кода с переменной находится внутри функции, эта переменная становится локальной и не может быть вызвана извне.
// Глобальная область видимости
const pi = 3.14

function incr () {
  console.log(100 + pi) //103.14; переменная pi доступна, т.к. находится в глобальной области видимости.
}
function decr () {
  console.log(100 - pi) //96.86; переменная pi доступна, т.к. находится в глобальной области видимости.
}
console.log(pi) //3.14; переменная pi доступна, т.к. находится в глобальной области видимости.

// Модульная область видимости

// script.js
const pi = 3.14
console.log(pi) //3.14

// test.js
console.log(pi) //pi is not defined; переменная pi ограничена областью видимости модуля script.js и не доступна из другого модуля без использования директив export/import.
//--------------

// script.js
export const pi = 3.14
console.log(pi) //3.14

// test.js
import {pi} from "./script.js"
console.log(pi) //3.14; переменная pi экспортирована и может быть доступна в других модулях.

//2) 
function counter() {
  let incr = 0; // Переменная для хранения количества вызовов
  return function() {
      incr += 1; // Увеличиваем счетчик
      return incr; // Возвращаем текущий счет
  };
}

const count = counter();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
//--------------

function counter() {
  const incr = 0; // Переменная для хранения количества вызовов
  return function() {
      incr += 1; // Увеличиваем счетчик
      return incr; // Возвращаем текущий счет
  };
}

const count = counter();

console.log(count()); //Cannot assign to "count" because it is a constant; ошибка, т.к. нельзя перезаписать значение переменной const.
//--------------

function counter() {
  var incr = 0; // Переменная для хранения количества вызовов
  return function() {
      incr += 1; // Увеличиваем счетчик
      return incr; // Возвращаем текущий счет
  };
}

const count = counter();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
