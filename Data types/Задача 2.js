//Задача 2: Массивы в деле

//Добавление элементов:
let arr = ["hello", 500, {num: 15, string:"hello!", value: undefined, }, true];
arr.push(undefined);
console.log(arr) //['hello',500,{ num: 15, string: 'hello!', value: undefined },true,undefined]

//Удаление элементов:

let arr = ["hello", 500, {num: 15, string:"hello!", value: undefined, }, true];
arr.pop();
console.log(arr) //['hello', 500, { num: 15, string: 'hello!', value: undefined }]
/////////////////////////////////////////////////////////////////////////////////////

let arr = ["hello", 500, {num: 15, string:"hello!", value: undefined, }, true];
const newarr = arr.shift();
console.log(arr)// [500, {num: 15, string:"hello!", value: undefined, }, true]
console.log(newarr)// hello
/////////////////////////////////////////////////////////////////////////////////////

let arr = ["hello", 500, {num: 15, string:"hello!", value: undefined, }, null, "500", true];
arr.splice(1, 1);
console.log(arr)// ['hello', {num: 15, string: 'hello!', value: undefined, }, null, '500', true]


//Получение длинны масива:
let arr = ["hello", 500, {num: 15, string:"hello!", value: undefined, }, true];
console.log(arr.length)//4