"use strict";

const divElems = document.getElementsByClassName("changeColor");

function changeToGreen(e){
    e.target.style.backgroundColor="green";
    e.target.removeEventListener(e.type,changeToGreen);
    e.target.addEventListener("click",changeToRed);
}

function changeToRed(e){
    e.target.style.backgroundColor="red";
    e.target.removeEventListener(e.type,changeToRed);
    e.target.addEventListener("click",changeToGreen);
}


for(let elem of divElems){
    elem.insertAdjacentHTML("beforeend",'<button class="remove_elem">X</button>');
    elem.firstChild.addEventListener("click",()=>elem.remove()); 
    elem.addEventListener("click",changeToGreen);
}