console.log("Hello, JavaScript!");




// Let declare a variable that can be changed later
let name = "Rashed";
let age = 23;

console.log("My name is "+name+" and I am "+age+" years old.")









// Const variable cannot be changed later
const age1 = 23;
console.log("I am "+age1+" years old")


// But object can be changed later
const user = {
    name: "Rahim",
    age: 25
};

user.age = 23;          // allowed
user.name = "Rashed"   // Allowed

console.log(user);










// JavaScript types
let name2 = "Alice";       // string
let age2 = 25;             // number
let price = 19.99;        // number
let active = true;        // boolean
let x;                    // undefined
let y = null;             // null
let user1 = {};            // object

console.log(typeof name2);   // string
console.log(typeof age2);    // number
console.log(typeof price);  // number
console.log(typeof active); // boolean
console.log(typeof x);      // undefined
console.log(typeof y);      // object (this is a known quirk in JavaScript)
console.log(typeof user1);   // object










// Undefined vs Null
let z; // undefined
console.log(z); // undefined

let a = null; // null
console.log(a); // null

// Undefined means a variable has been declared but has not yet been assigned a value.
// Null is an assignment value that represents no value or no object.







// == vs ===
let b = 5;
let c = "5";

console.log(b == c);  // true (loose equality, type coercion occurs)
console.log(b === c); // false (strict equality, no type coercion)





//Type coercion
console.log(10 + "5"); // "105" (string concatenation)
console.log(10 - "5"); // 5 (numeric subtraction)
console.log(10 * "5");







//Truthy and falsy
if ("hello") {
    console.log("yes");
}

if ([]) {
    console.log("yes");
}

if ({}) {
    console.log("yes");
}






// In JavaScript, the following values are considered falsy:
// false
// 0
// -0
// 0n (BigInt zero)
// "", '', `` (empty string)
// null
// undefined
// NaN
if ("") {
    console.log("yes");
}





// Primitive vs object
let test = {
    value: 10
};

let test1 = test;
test1.value= 20;

console.log(test)
console.log(test1)





// Scope
let x1 = 10;

{
    let y1 = 20;

    console.log(x1); // 10
    console.log(y1); // 20
}

console.log(x1); // 10
console.log(x1); // Error (the outer scope cannot access variables declared only inside the inner scope)








// Task
function isAdult(ag) {
    if (ag>=18){
        return true;
    }
    
    return false;
}

console.log(isAdult(17))
