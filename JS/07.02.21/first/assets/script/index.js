"use strict";

const request = new XMLHttpRequest();
request.open("GET","assets/users/users.json",true);
request.send();
console.log(request.responseText);

const promise = new Promise(
    function(resolve,reject){
        resolve(param);
    }
)
