// Задача 4

function numbercheck (num) {
    return (typeof num === "number")
  };
  
  console.log(numbercheck(5)) // true
  console.log(numbercheck("h")) // false
  