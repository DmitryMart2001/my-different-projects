//Задача 1.
//Калькулятор: Создайте простой калькулятор, который запрашивает у пользователя два числа и операцию (+, -, *, /). Используйте условные операторы для выполнения соответствующей операции.

let num1 = +prompt("Введите первое число:");  
let num2 = +prompt("Введите второе число:");
let operator = prompt("Введите оператор (+, -, *, /):"); 

function calculate(num1, num2, operator) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Ошибка: ввод нечислового значения"
  }
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '*') return num1 * num2;
  if (operator === '/') {
    if (num2 === 0) return "Ошибка: деление на ноль";
    return num1 / num2;
  } return "Ошибка: ввод некорректного математического оператора";
}; 

let result = calculate(num1, num2, operator); 
console.log("Результат: " + result);  
 