"use strict";



// 1.
let paragraph = document.querySelectorAll("p");;

console.log(paragraph);



//for(const element of paragraph){

//element.style.color =  "#ff0000";}

paragraph.forEach((element) => element.style.color = "#ff0000");

//paragraph.forEach((element) =>element.classList.add("red"));



// 2.

let option = document.getElementById("optionsList");


console.log(option);



let parentOption = option.parentElement;

console.log(parentOption);


// 3.

let childrenOfOption = option.childNodes;


for (let node of childrenOfOption) {
  console.log(node);

}

childrenOfOption.forEach((node) => console.log(node))

// 4.

let newParagraph = document.getElementById('testParagraph');



newParagraph.innerHTML = "This is a paragraph";


console.log(newParagraph);


// 5.

let header = document.querySelector('.main-header');

console.log(header);


let headerChildren = header.children;


for (let child of headerChildren) {

  child.classList.add("nav-item");

  console.log(child);

}



// 6.

let title = document.querySelectorAll('section h3,h2,h4')


title.forEach(item => {
  item.classList.add("section-title")
  console.log(item);


});

title.forEach(item => {
  item.classList.remove("section-title")
  console.log(item);

});



