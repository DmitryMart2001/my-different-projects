//Задача 2.
//FizzBuzz: Напишите программу, которая выводит числа от 1 до 100. Если число кратно 3, выведите "Fizz". Если число кратно 5, выведите "Buzz". Если число кратно и 3, и 5, выведите "FizzBuzz".

function FizzBuzz () {
    let final = ""
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0) final += "Fizz ";
      if (i % 5 === 0) final += "Buzz ";
      if (i % 3 === 0 && i % 5 === 0) final += "FizzBuzz ";
    }
    return final;
  }
  
  console.log(FizzBuzz ())