const user = {
    name: "Alice",

    greet() {
        console.log(this.name);
    }
};

user.greet();






const user1 = {
    name: "Alice",

    greet() {
        console.log(this.name);
    }
};

const user2 = {
    name: "Bob"
};

user2.greet = user1.greet;

user1.greet();
user2.greet();







function showThis() {
    console.log(this);
}

showThis();










function greet() {
    console.log(`Hello ${this.name}`);
}

const user3 = {
    name: "Rashed"
};

greet.call(user3);











function introduce(age, city) {
    console.log(this.name, age, city);
}

const user4 = {
    name: "Rashed"
};

introduce.call(user4, 23, "Dhaka");

introduce.apply(user4, [23, "Dhaka"]);













function greet() {
    console.log(`Hello ${this.name}`);
}

const user5 = {
    name: "Rashed"
};

const greetUser = greet.bind(user5);
greetUser();











const user6 = {
    name: "Alice",

    normal() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

user6.normal();
user6.arrow();














const user7 = {
    name: "Alex",

    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

user7.greet();










function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const alice = new Person("Alice");

alice.greet();








// OOP
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}