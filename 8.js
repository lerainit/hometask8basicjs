"use strict";

// 1.Найти все параграфы на странице и установить цвет фона #ff0000:


let paragraph = document.querySelectorAll("p");;

console.log(paragraph);

// Вариант решения циклом for ... of:

/*for(const element of paragraph){

element.style.color =  "#ff0000";}*/


// Вариант решение forEach:

paragraph.forEach((element) => element.style.color = "#ff0000");



// Вариант решения добавлением класса:

//paragraph.forEach((element) =>element.classList.add("red"));



// 2.Найти элемент с id="optionsList". Вывести в консоль.Найти родительский элемент и вывести в консоль.


let optionList = document.getElementById("optionsList");


console.log(optionList);



let parentOption = optionList.parentElement;

console.log(parentOption);


// 3.Найти дочерние ноды, если они есть, и вывести в консоль названия и тип нод:


let childrenOfOption = optionList.childNodes;


// Вариант решения циклом for ... of:

for (let node of childrenOfOption) {
  console.log(node);

}

childrenOfOption.forEach((node) => console.log(node))

// 4.Установите в качестве контента элемента с классом testParagraph следующий параграф <p>This is a paragraph</p>:


let newParagraph = document.getElementById('testParagraph');



newParagraph.innerHTML = "<p>This is a paragraph</p>";


console.log(newParagraph);


// 5.Получить элементы <li>, вложенные в элемент с классом main-header и вывеcти их в консоль. Каждому из элементов присвоить новый класс nav-item. 

let mainHeaderList = document.querySelectorAll('.main-header li');
mainHeaderList.forEach(child => {
  child.classList.add("nav-item")
   console.log(child);
})


// 6.Найти все элементы с классом section-title. Удалить этот класс у элементов.  

let sectionTitle = document.querySelectorAll('section h3,h2,h4')


sectionTitle.forEach(item => {
  item.classList.add("section-title")
  console.log(item);


});

sectionTitle.forEach(item => {
  item.classList.remove("section-title")
  console.log(item);

});



