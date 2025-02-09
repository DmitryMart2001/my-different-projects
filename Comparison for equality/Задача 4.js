//Задача 4. Использование Object.is() в реальных задачах

const valcomparse = (num1, num2) => {
  return (Object.is(num1, num2))
};
  
  console.log(valcomparse(+0, -0))// false
  console.log(valcomparse(NaN, NaN))// true