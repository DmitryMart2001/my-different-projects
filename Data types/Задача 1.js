// Задача 1: Использование typeof

const str = "hello!";
console.log(typeof(str)) //string

const num = 15;
console.log(typeof(num)) //number

let arr = [15, "hello!", undefined];
console.log(typeof(arr)) //object

let obj = {
    num: 15,
    string:"hello!",
    value: undefined,
  };
  console.log(typeof(obj)) //object

const value = null
console.log(typeof(value)) //object (фича JS)

const value = undefined
console.log(typeof(value)) //undefined