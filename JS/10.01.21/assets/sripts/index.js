"use strict";

class User {

    #name;
    #surname;

    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }

    showUser() {
        console.log(`Name: ${this.#name}, Surname: ${this.#surname}`);
    }
}


class Animal {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    sound() {
        this.#privateMethod();
    }

    #privateMethod = function () {
        console.log("Animal speak");
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        console.log("Cat mew");
    }
    animalSound() {
        super.sound();
    }

    get name() {
        return super.name;
    }
}

function program_1() {
    const dzen = new User("Dzen", "Maks");
    const john = new User("John", "Smith");
    const users = [dzen, john];
    users.forEach((elem) => (elem.showUser()));
}

function program_2() {
    const animal = new Animal("Cat");
    const cat = new Cat("Cat");

    animal.sound();
    cat.sound();
    cat.animalSound();
    console.log(cat.name);
}

class NetUser {
    #name="";
    #password="";
    #email="";

    constructor(name="DefaultName", password="DefaultPass", email="DefaultMail") {
        this.#name = name;
        this.#password = password;
        this.#email = email;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get password() {
        return this.#password;
    }

    set password(password) {
        this.#password = password;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    showUser() {
        console.log(`name: ${this.#name}, ${this.#email}`);
    }
}

class Student extends NetUser {
    #marks = [];
    constructor(netuser = {}, marks) {
        super(netuser.name,netuser.password,netuser.email );
        this.#marks = marks;
    }

    get marks() {
        return this.#marks;
    }

    set marks(_marks) {
        this.#marks = _marks;
    }

    showMarks() {
        console.log(this.#marks.toString());
    }

    aveMark() {
        const sum = this.#marks.reduce((res, elem) => res += elem);
        return (sum / this.#marks.length);
    }

}

class Teacher extends NetUser {
    #hours=0;
    #rate=0;
    #premium=1.1;

    constructor(netuser = {}, hours = 800, rate) {
        super(netuser.name,netuser.password,netuser.email );
        this.#hours = hours;
        this.#rate = rate;
    }

    get rate() {
        return this.#rate;
    }

    set rate(rate) {
        this.#rate= rate;
    }

    get hours() {
        return this.#rate;
    }

    set hours(hours) {
        this.#hours = hours;
    }

    salary(){
        let res=0;
        if(this.#hours>800){
            res=this.#hours*this.#rate*this.#premium;
        }
        else{
            res=this.#hours*this.#rate;
        }
        return res;
    }
}




function program_3() {

    const user = new NetUser("Den","111","den@gmail.com");
    user.showUser();

    const student = new Student(user,[5,4,3,4,5,5,5]);
    student.name="Maks";
    student.email="Maks@gmail.com";
    student.showUser();
    student.showMarks();
    console.log(student.aveMark().toFixed(2));

    const teacher = new Teacher(user,900,40);
    teacher.name="Valera";
    teacher.email="Valera.gmail.com";
    teacher.showUser();
    console.log(teacher.salary());
}

//program_1();

//program_2();

program_3();
