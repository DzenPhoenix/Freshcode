"use strict";

const button = document.getElementById("btn");
const text = document.getElementById("text");

button.onclick = function(){
    text.hidden = true;
}

const thumb = document.querySelector(".thumb");
thumb.setAttribute("isMove","false");

const slider = document.querySelector(".slider");

function thumbStartMove(e){
    e.target.setAttribute("isMove","true");
}

function thumbStopMove(e){
    e.target.setAttribute("isMove","false");
}

function thumbMove(e){
    let isMove = e.target.getAttribute("isMove");
    if(isMove==="true"){
        e.target.style.left = e.clientX-15+"px";
    }
}


thumb.addEventListener("mousedown",thumbStartMove);
thumb.addEventListener("mouseup",thumbStopMove);
thumb.addEventListener("mousemove",thumbMove);