const user = {
    name: "Alice",
    age: 25,
    active: true
};

console.log(user.name);
console.log(user.age);
console.log(user["name"]);








const user1 = {
    name: "Alice",
    city: "Dhaka"
};

user1.age = 25;
user1.country="Bangladesh";
user1.active = true;

console.log(user1);








const user2 = {
    name: "Alice",

    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

user2.greet();