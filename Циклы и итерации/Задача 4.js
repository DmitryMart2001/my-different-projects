//Задача 4
//Создайте объект с информацией о книге (название, автор, год издания). Переберите его свойства с помощью for...in и выведите каждое свойство и его значение.

let bookinfo = {
    title: "Lord of rings",
    author: "D.R.R.Tolkien",
    PublicationYear: 1954,
  };
  
  for (let key in bookinfo) {
    console.log(key + ": " + bookinfo[key]);
  }// title: Lord of rings author: D.R.R.Tolkien PublicationYear: 1954