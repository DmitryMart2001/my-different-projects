//Задача 4: Работа с JSON

let obj = {
    name: "Dmitry",
    age: 23,
    lifestyle: "furry",
};
let objjson = JSON.stringify(obj);
console.log(objjson)// {"name":"Dmitry","age":23,"lifestyle":"furry"}

let parsedobjjson = JSON.parse(objjson);
console.log(parsedobjjson)// {name: "Dmitry", age: 23, lifestyle: "furry"}