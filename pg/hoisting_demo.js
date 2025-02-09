//1)Демонстрация hoisting с переменными var, let и const.
console.log(demo)

var demo = 500 // undefined; При обращении к переменной var до ее фактической инициализации ее значением является undefined.
/////////////////////
console.log(demo)

let demo = 500
//-----------------
console.log(demo)

const demo = 500 // Обращение к переменным var и const до их фактической инициализации вызывает ошибку.

//2)Демонстрация hoisting с функциями, обьявленными через function declaration и function expression.
demo()

function demo() {
  console.log(500 + 500)
} //1000; функция, обьявленная через function declaration поднимается в начало области видимости.
//-----------------
demo()

const demo = function () {
  console.log(500 + 500)
} // ReferenceError: demo is not defined 
//-----------------
demo()

let demo = function () {
  console.log(500 + 500)
} // ReferenceError: demo is not defined
//-----------------
demo()

var demo = function () {
  console.log(500 + 500)
} //TypeError: demo is not a function

// Функциональные выражения не поднимаются и при попытке обратиться к ним до их фактической инициализации вызывают ошибки.
