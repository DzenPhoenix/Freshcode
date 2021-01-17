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
            this[this.#size++] = elem;
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
            return this.#size - 1;
        }
    }

    const stack1 = new Stack(10);
    stack1.push(5);
    stack1.push(-89);
    stack1.push({name:"test"})

    //console.dir(stack1);
    console.log(stack1.peek());
}

program_3();
