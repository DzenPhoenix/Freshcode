"use strict";


/*
1)  /z/
2) /zz/
3) /x[aueiyo]y/
4) /\s/
5) /\.$/
6) /^.+?\.com$/
7) /@gmail.com/
8) /https?/
9) /url:(www\.)?example.com/
10) /A{3}/
11) /#[A-Z0-9]{6}/
12) /a{2,}/
13) /".*"/
14) /<(\/)?(.)*>/
15)  /#[A-Za-z0-9]{6}/
16) /^p/
17) /p$/
18) /^http(s)?/
*/

/*let regular = new RegExp("ab+c","gm");
let str = "ac abbbc aghjjjabc";

let res = regular.exec(str);
console.log(res);


let regex = new RegExp("(buy|sell)+","i");

function spamCheck(str,regex){
    return regex.test(str);
}

console.log(spamCheck("dfgdfgdfg  Buy",regex));
 

function clearSentence(str){
    let regex = /[^a-z0-9]+/gi;
    return str.replace(regex ," ");
}

console.log(clearSentence("This _., -/ is #! a ; book"));

*/

/*let div_2 = document.getElementById("id_1-child_1");
div_2.style.background="purple";

let li = document.querySelectorAll("ul>li");
console.log(li[2].textContent);

let div_green = document.querySelector(".green");
console.log(div_green);


let div_all = document.querySelectorAll("div>div");
console.log(div_all);

let div_red = document.querySelector(".red");
div_red.children[1].style.background="violet";*/


const myPattern = /[\w]+/gi;

const input = document.querySelector('input[name="task"]');
const createTask = document.getElementById("createTask");

let isValid = false;

function f(e){
    isValid = myPattern.test(this.value);
    if(isValid){
        this.classList.remove("inValidStyle");
        this.classList.add("validStyle");

    }
    else{
this.classList.add("inValidStyle");
this.classList.remove("validStyle");
    }
}



