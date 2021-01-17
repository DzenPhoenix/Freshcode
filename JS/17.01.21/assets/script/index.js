'use strict';

function program_1() {
    const user_1 = {
        name: 'Name',
        surname: 'Surname',
        age: 20,
        isMAle: true,
    };

    const jsonUser_1 = JSON.stringify(user_1);
    console.log(jsonUser_1);

    const user_2 = JSON.parse(jsonUser_1);
    user_2.age = 30;
    console.log(user_2);

    const userArr = [user_1, user_2];
    const jsonArrUser = JSON.stringify(userArr);
    console.log(jsonArrUser);

    const someUSer = {
        name: 'name',
        surname: 'surname',
        age: 20,
        isMAle: false,
        cat: null,
        car: {
            engine: {
                volume: 1.6,
                name: 'engineName',
            },
            doors: 5,
        },
        contacts: ['fb/123', 't/125', 'insta3455'],
        sayHi() {
            alert(this.name);
        },
        test: undefined,
    };
    const jsonSomeUSer = JSON.stringify(someUSer);
    console.log(jsonSomeUSer);

    const user_3 = JSON.parse(jsonSomeUSer);
    console.log(user_3);
}

//program_1();

class Point {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sum() {
        return this.a + this.b;
    }
}

class Point3D extends Point {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
    sum() {
        return this.a + this.b + this.c;
    }
}

function program_2() {
    const point = new Point(1, 2);
    console.log(point.sum());

    const point3D = new Point3D(3, 4, 5);
    console.log(point3D.sum());
}

//program_2();

class Stack {

    #size = 0;
    #maxSize = 0;

    constructor(maxSize = 1000) {
        this.#size = 0;
        this.#maxSize = maxSize;

    }

    get size() {
        return this.#size;
    }

    get isEmpty() {
        return this.#size === 0;
    }

    push(elem) {
        if (this.#size === this.#maxSize) {
            throw new RangeError("Stack is overflow");
        }
        this[`_${this.#size++}`] = elem;
        return this.#size;
    }

    pop() {
        if (this.isEmpty) {
            return;
        }
        const value = this[--this.#size];
        delete this[this.#size];
        return value;
    }

    peek() {
        if (this.isEmpty) {
            return;
        }
        return this[this.#size - 1];
    }

    [Symbol.iterator]() {
        return new StackIterator(this);
    }
}

function program_3() {

    function find(arr, value) {
        for (let i = 0; i < arr.length; ++i) {
            if (value === arr[i]) {
                return i;
            }
        }
        return -1;
    }

    const arr = [14, 234, 65, 23, 8, 2, 645, 3];
    const idx = find(arr, 8);
    console.log(idx);



    const stack1 = new Stack(10);
    stack1.push(5);
    stack1.push(-89);
    stack1.push({ name: "test" })

    console.dir(stack1);
    //console.log(stack1.pop());
    //stack1.peek();
    //console.log(stack1.pop());
}

//program_3();

function program_4() {

    function lightCheck(str, options = {
        brackets: {
            '(': ')',
            '{': '}',
            '[': ']',
        }
    }) {
        const bracketStack = [];
        const brackets = option.brackets;

        for (const s of str) {
            if (brackets[s]) {
                bracketsStack.push(s);
                continue;
            }
            if (Object.values(brackets).includes(s)) {
                if (brackets[bracketsStack[bracketStack.length - 1] == s]) {
                    bracketStack.pop();
                }
                else {
                    return false;
                }
            }
        }
        return bracketStack.length == 0;
    }


}

//program_4();

function program_5() {
    const vocabulary = new Map();
    vocabulary.set('cat', "Kot");
    vocabulary.set('dog', "Sobuka");
    vocabulary.set('squirrel', "Belka");

    const translate = str => str.split(" ").map(elem => vocabulary.get(elem)).join(" ");
    const str = "cat dog squirrel";
    console.log(translate(str));
}

//program_5();


class StackIterator {
    constructor(stack) {
        this._stack = stack;
        this._start = 0;
    }

    next() {
        if (this._start >= this._stack.size) {
            return {
                value: undefined,
                done: true,
            }
        }
        return {
            value: this._stack[`_${this._start}`],
            done: this._start++ === this._stack.size,
        };

    }
}
/*const stack1 = new Stack(10);
stack1.push(5);
stack1.push(-89);
stack1.push({ name: "test" })

console.dir(stack1);*/

class ListItem {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addBegin(value) {
        const newHead = new ListItem(value, this.head);
        if (this.head) {
            this.head.prev = newHead;
        }
        this.head = newHead;
        if (!this.tail) {
            this.tail = newHead;
        }
        this.size++;
    }

    addEnd(value) {
        const newTail = new ListItem(value, null, this.tail);
        this.tail.next = newTail;
        this.tail = newTail;
        if (!this.head) {
            this.head = newTail;
        }
        this.size++;
    }

    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    const value = current.value;
                    current = current.next;
                    return {
                        value: value,
                        done: false
                    }
                }
                else {
                    return {
                        done: true,
                    }
                }
            }
        }
    }
}

//const list = new List();
//console.dir( list );


class MyArrayIterator {
    constructor(myArr) {
        this.myArr = myArr;
        this.current = 0;
    }
    next() {
        if (this.current >this.myArr.size-1) {
            return {
                value: null,
                done: true,
            }
        }
        else {
            return {
                value: this.myArr.getElem(this.current++),
                done: false,
            }
        }

    }
}

class MyArray {

    size = 0;
    constructor(maxSize = 100) {
        this.maxSize = maxSize;
    }

    push(elem) {
        if (this.size == this.maxSize) { throw new RangeError("Stack overflow"); }
        this[this.size] = elem;
        this.size++;
    }

    getElem(idx) {
        if (idx > this.size - 1) {
            throw new RangeError("Index out of boundary of array");
        }
        return this[idx];
    }

    [Symbol.iterator] = function () {
        return new MyArrayIterator(this);
    }
}

const arr = new MyArray();
arr.push(11);
arr.push(63);
arr.push("asdasd");


for (const elem of arr) {
    console.log(elem);
}

class User{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
    }

}

class Student extends User(){
    static Count =0;
    constructor(name,surname,year){
        super(name,surname);
        this.year = year;
        Student.Count++;
    }

    get FullName(){
        return `${this.name} ${this.surname}`;
    }

    get Course(){
        return new Date().getFullYear()-this.year;
    }
}