//1 задание
//1)
var apple 
console.log(apple) //null, до инициализации

apple = "fruit"
console.log(apple) //fruit, после инициализации

//2)
function test() {
 let treehight = "tall"
 console.log(treehight)
}
console.log(treehight) //ReferenceError: treehight is not defined

//3)
const pen = "blue"
pen = "black"
console.log(pen) //Cannot assign to "pen" because it is a constant

//4)
const user = {
  name: "Kale",
  age: 18,
  hieght: 168,
  weight: 50,
  IsFurry: true
}

user.IsFurry = false

console.log(user) // { name: 'Kale', age: 18, hieght: 168, weight: 50, IsFurry: false }
console.log(user.IsFurry) // false

 // Значение переменной const не может быть изменено, однако может быть изменено ее содержимое



