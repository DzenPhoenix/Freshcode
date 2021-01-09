"use strict";

function program_1() {
    try {
        let num = Number(prompt("Enter number: "));
        if (isNaN(num)) {
            throw new Error("Not a number");
        }
    }
    catch (e) {
        console.log(e.message);
    }
}

//program_1();

class User {

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    sayHello() {
        alert(`Hello!) ${this.name}`);
    }

    getFullName(){
        return `${this.name}, ${this.surname}`;
    }

    static getAge(user){
        return user.age;
    }
}

class Worker{

    #name="";
    #surname="";
    #rate=0;

    constructor(name,surname,rate){
        this.#name=name;
        this.#surname=surname;
        this.#rate= rate;
    }

    getWage(){
        return this.rate*20;
    }
}



function program_2() {

    const user_1 = new User("Alex", "Fox", 20);
    const user_2 = new User("Sasha", "Petrov", 16);

    //console.log(user_1);
    //console.log(user_2);

    const worker = new Worker("John","Smith",45);
    console.log(worker.name);

}

program_2();