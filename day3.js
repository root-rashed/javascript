let x =10;

function test(){
    let y =20;

    console.log(x);
    console.log(y);
}

// console.log(y); // This will throw a ReferenceError because y is not defined in this scope
test();









// Lexical scope
const x1 = "global";

function outer(){
   
    const x1 = "outer";

    function inner(){
      console.log(x1);
    }

    return inner;
}

const fn = outer();
fn()









// Scope chain
const a =10;

function outer1(){
    const b = 20;
    
    function inner1(){
        const c = 30;
        
        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner1();
}
outer1()








//Shadowing

let x2 = 10;

function shadowingExample(){
    let x2 = 20;
    console.log(x2)
}

shadowingExample();
console.log(x2);









//Block scope

{
    let x3 = 100;
    const y3 =200;

    console.log(x3);
    console.log(y3);
}

// console.log(x3); // This will throw a ReferenceError because x3 is not defined in this scope
// console.log(y3); // This will throw a ReferenceError because y3 is not defined in this scope








// var behaves differently

if(true){
    var z = 300;
}

console.log(z); // This will log 300 because var is function-scoped, not block-scoped









//Closures — the big concept
function createMultiplier(x) 
{
    return function(y) {return x * y;};
}

const double = createMultiplier(2);

console.log(double(5));







// Classic closure example — counter
function createCounter() 
{
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());






//Closures provide encapsulation
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}


const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());













// Multiple closures can have separate state
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());








//Hoisting
var x5;

console.log(x5);

x5 = 99;





// Function declaration hoisting
sayHello();

function sayHello() {
    console.log("Hello");
}








// for (var i = 11; i < 13; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }




for (let i = 11; i < 14; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}