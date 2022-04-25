"use strict";



// 1.
let paragraph = document.querySelectorAll("p");;

console.log(paragraph);



//for(const element of paragraph){

//element.style.color =  "#ff0000";}

paragraph.forEach((element) => element.style.color = "#ff0000");

//paragraph.forEach((element) =>element.classList.add("red"));



// 2.

let optionList = document.getElementById("optionsList");


console.log(optionList);



let parentOption = optionList.parentElement;

console.log(parentOption);


// 3.

let childrenOfOption = optionList.childNodes;


for (let node of childrenOfOption) {
  console.log(node);

}

childrenOfOption.forEach((node) => console.log(node))

// 4.

let newParagraph = document.getElementById('testParagraph');



newParagraph.innerHTML = "This is a paragraph";


console.log(newParagraph);


// 5.

let headerMain = document.querySelector('.main-header');

console.log(headerMain);


let headerChildren = headerMain.children;


for (let child of headerChildren) {

  child.classList.add("nav-item");

  console.log(child);

}



// 6.

let sectionTitle = document.querySelectorAll('section h3,h2,h4')


sectionTitle.forEach(item => {
  item.classList.add("section-title")
  console.log(item);


});

sectionTitle.forEach(item => {
  item.classList.remove("section-title")
  console.log(item);

});



