"use strict";

/*let test = 100;
let copyTest = test;

console.log(`test = ${test}, typeof test=${typeof (test)}\n copyTest = ${copyTest}, typeof copyTest=${typeof (copyTest)}`);


const num = "sas";

if (typeof (num) == "number") {
    console.log("It is a number");
}
else {
    console.log("Not a number");
}*/




function SolveFunc(x1, x2, step) {
    let res = [];
    for (let x = x1; x <= x2; x += step) {
        let y = -2.4 * x * x + 5 * x - 3;
        res.push(y);
    }
    return res;
}


function ShowTriangle(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str = "";
        for (let j = 1; j <= i; ++j) {
            str += "*";
        }
        console.log(str);
    }
}

//ShowTriangle(5);




function GuessSum() {

    let x = Math.round(Math.random() * 100);
    let y = Math.round(Math.random() * 100);

    let isCorrect = false;
    while (!isCorrect) {
        let res = parseInt(prompt(`${x} + ${y}==?`));

        if (res == x + y) {
            alert("Correct");
            isCorrect=true;
        }
        else {
            alert("Incorrect.Try again")
        }
    }

}

//GuessSum();

function whatSeason(month) {
    let res = "";
    switch (month) {
        case 1: 
        case 2: res = "Winter"; break;
        case 3: 
        case 4: 
        case 5: res = "Spring"; break;
        case 6: 
        case 7: 
        case 8: res = "Summer"; break;
        case 9: 
        case 10: 
        case 11: res = "Autumn"; break;
        case 12: res = "Winter"; break;
        default: res="Not a month"; break;
    }
    return res;
}


/*for (let i=1;i<13;++i){
console.log(whatSeason(i));
}*/


function numbers(num){
    console.log(`Entered number is ${num}`);
    let str = num.toString();
    for(let i=0;i<str.length;++i){
        console.log(`${i+1}-num is ${Number(str[i])}`);
    }
    console.log(`Count of numbers=${str.length}`);
}

//numbers(prompt("Enter number:"));


function numbers_2(num){
    console.log(`Entered number is ${num}`);

    let array=[];
    let str = num.toString();
    for(let i=0;i<str.length;++i){
        array.push(str[i]);
    }
    return array.reverse().toString();
}

//console.log(numbers_2(12547));

let arr = [1,6,4,7,0,0,4,5,-1,-2,12,"one","two"];
console.log(arr);

function firstZeroElement(arr){
    return arr.indexOf(0);
}

console.log(`firstZeroElement=${firstZeroElement(arr)}`);

function concatThreeArray(arr_1,arr_2,arr_3){
    return arr_1.concat(arr_2).concat(arr_3);
}

console.log(`concatThreeArray=${concatThreeArray(arr,[1,2,3],[4,5,6])}`);


function isOnlyZero(arr){
    return arr.every(elem=>elem==0);
}

console.log(`isOnlyZero=${isOnlyZero(arr)}`);

function fillStar(n){
    let res=new Array(n);
    return res.fill("*");
}

console.log(`fillStar=${fillStar(5)}`);

function onlyString(arr){
    return arr.filter(elem=>typeof(elem)=='string');
}

console.log(`onlyString=${onlyString(arr)}`);

function firstNegativeElem(arr){
    return arr.find( elem=>elem<0 );
}

console.log(`firstNegativeElem=${firstNegativeElem(arr)}`);

function multiplyBy2(arr){
    
    arr.forEach( function(elem,index,array){
        array[index]=elem*2;
    });
    return arr;
}

console.log(`multiplyBy2=${multiplyBy2(arr)}`);


function includeNegative(arr,val){
    return arr.includes(val);
}

console.log(`includeNegative=${includeNegative(arr,-1)}`);


function isSomeNegative(arr){
    return arr.some( elem=>elem<0);
}

console.log(`isSomeNegative=${ isSomeNegative(arr)} `);

function  joinWith(arr,del){
    return arr.join(del);
}

console.log(`joinWith=${ joinWith(arr,"and")} `);

function reverseArray(arr){
    return arr.reverse();
}

console.log(`reverseArray=${ reverseArray(arr)} `);

arr.reverse();

function decreaseSort(arr){
    return arr.sort( (elem_1,elem_2)=>elem_1-elem_2);
}


console.log(`decreaseSort=${ decreaseSort(arr)} `);

function deleteElements(arr,pos,count,newElement){
    arr.splice(pos,count,newElement);
    return arr;
}

console.log(`deleteElements=${ deleteElements(arr,0,3,"New")} `);

console.log(`deleteElements=${ deleteElements(arr,3,3)} `);

function sliceArray(arr,n1,n2){
    return arr.slice(n1,n2+1);
}

arr = [1,6,4,7,0,0,4,5,-1,-2,12,"one","two"];

console.log(`sliceArray=${ sliceArray(arr,3,5)} `);

//string


let str = "a bcdef g";
let str_1 = "one two three";

function getChar(str,n){
    return str.charAt(n);
}

console.log(`getChar=${ getChar(str,5)} `);


function firstSpace(str){
    return str.indexOf(" ");
}

console.log(`firstSpace=${ firstSpace(str)} `);

function lastSpace(str){
    return str.lastIndexOf(" ");
}

console.log(`lastSpace=${ lastSpace(str)} `);

function splitStr(str){
    return str.split(" ");
}

console.log(`splitStr=${ splitStr(str_1)} `);

function subStr(str,n){
    return str.substr(0,n);
}

console.log(`subStr=${ subStr(str,4)} `);


function toUpperStr(str){
    return str.toUpperCase();
}

console.log(`toUpperStr=${ toUpperStr(str)} `);