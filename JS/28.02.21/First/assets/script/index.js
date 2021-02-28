"use strict";


const student = {
    fullname:"Vasya Ivanov",
    email:"newVasya@gmail.com"
};

localStorage.setItem("fullname",student.fullname);
localStorage.setItem("email",student.email);

localStorage.setItem("Student",JSON.stringify(student));
