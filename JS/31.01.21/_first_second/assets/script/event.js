"use strict";

const button = document.querySelector(".button");

button.addEventListener("mouseover",eventHandler)
button.addEventListener("click",eventHandler)
button.addEventListener("mousemove",eventHandler)

function eventHandler(e){
    console.log(e.type);
}