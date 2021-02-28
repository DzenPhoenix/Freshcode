"use strict";

class User{
    constructor(userName,userEmail){
        this.userName=userName;
        this.userEmail=userEmail;
    }
}

const submit = document.querySelector("input[type=submit]");

let user;


submit.addEventListener("click",function(event){
    const userNameInput =  document.querySelector("#userName");
    const userEmailInput =  document.querySelector("#userEmail");

    user = new User(userNameInput.value,userEmailInput.value);
    localStorage.setItem(user.userName,JSON.stringify(user));
})