function add(a, b){
    return a + b;
}

console.log(add(5, 10));







function sayHello(name){
    return "Hello, " + name + "!";
}

console.log(sayHello("Alice"));







const add = (a, b) => {
    return a + b;
};

console.log(add(15, 35));



const square = x => x * x;
console.log(square(5));


const greet = name => `Hello, ${name}!`;
console.log(greet("Bob"));






const person = {
    name: "Alice",

    normal: function() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};







//functions can receive functions
function greet(name) {
    console.log("Hello " + name);
}

function processUser(name, callback) {
    callback(name);
}
// calling the function, passing the greet function as a callback
processUser("Rashed", greet);









//Callback functions
function process(a, b, callback) {
    const result = a + b;
    callback(result);
}


process(10, 20, function(result) {
    console.log(result);
});







//Higher-order functions
function execute(operation, a, b) {
    return operation(a, b);
}


function add(a, b) {
    return a + b;
}


function multiply(a, b) {
    return a * b;
}

function square(a, b) {
    return a * b;
}

console.log(execute(add, 10, 20));
console.log(execute(multiply, 10, 20));
console.log(execute(square, 10, 10));





//Returning functions
function createMultiplier(x) 
{
    return function(y) 
    {
        return x * y;
    };
}


const double = createMultiplier(2);

console.log(double(5));







//Default parameters
function greet(name = "User") {
    return `Hello ${name}`;
}

console.log(greet());
console.log(greet("Rashed"));






//Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20));






// map
const numbers = [1, 2, 3, 4, 5];
const tripled = numbers.map(x => x * 3);
console.log(tripled);









//filter
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter(n => n % 2 === 0);
console.log(result);

const num = numbers.forEach(n => {
    console.log(n);
});







// Combining map and filter
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 10);

console.log(result);