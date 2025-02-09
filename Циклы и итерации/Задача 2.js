//Задача 2
//Создайте массив из 5 чисел и найдите сумму всех элементов с помощью for...of.

function sum(numbers) {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  };
  
  console.log(sum([1, 5.2, 4, 0, -1])); // 9.2