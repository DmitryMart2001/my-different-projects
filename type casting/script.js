// Приведение типов в JavaScript
// Задача 1

const str = "123abc";
console.log(Number(str))// nan

const str = "123abc";
console.log(parseInt(str))// 123. Функция parseInt извлекла и вернула из строки целое число, игнорируя нечисловые символы.

// Задача 2 

const str = "5" + 10;
console.log(str) // 510. Интерпритатор JS привел строку в число и присоединил его слева к числу 10

// Задача 3

const str = "10" + true;
console.log(str) // 10true. Интерпритатор JS привел оба значения к строке и соединил их

// Задача 4

function numbercheck (num) {
    if (typeof num === "number") {
      console.log(true)
    } else {
      console.log(false)
    }
  };
  
  const firstnum = 5;
  const secondnum = "tree";
  const thirstnum = undefined;
  
  numbercheck (firstnum)// true
  numbercheck (secondnum)// false
  numbercheck (thirstnum)// false

//  Задача 5

console.log(5 == "5")// true
console.log(5 === "5")// false

console.log(1 == true)// true
console.log(1 === true)// false

console.log(0 == false)// true
console.log(0 === false)// false

console.log("0" == false)// true
console.log("0" === false)//false

// Оператор нестрогого равенства позоляет снтерпретатору JS приводить и сравнивать значения разных типов данных.
// Оператор строгого равеснства не позволяет интерпретатору JS сравнивать значения разных типов данных.





