'use strict'; //treat all JS code as in strict mode as newer version

//ecmascript 6 for standards
//premitive data type 
//number=>2 to power of 53 , big int ,string ,boolean, null (stand alone value), undefined ,symbol for uniqueness,

// non -premitive 
console.log(typeof null) //obj
console.log(typeof undefined) //undefined



// Data Types Examples

// String
let name = "Samra";
console.log(name, typeof name);

// Number
let score = 95;
console.log(score, typeof score);

// Boolean
let isLoggedIn = true;
console.log(isLoggedIn, typeof isLoggedIn);

// null
let emptyValue = null;
console.log(emptyValue, typeof emptyValue); // object (quirk)

// undefined
let notAssigned;
console.log(notAssigned, typeof notAssigned);

// Symbol
let uniqueId = Symbol("id");
console.log(uniqueId, typeof uniqueId);

// BigInt
let bigNumber = 12345678901234567890n;
console.log(bigNumber, typeof bigNumber);

// Object
let person = { name: "Ali", age: 22 };
console.log(person, typeof person);

// Array
let colors = ["red", "green", "blue"];
console.log(colors, typeof colors);

// Function
function greet() {
  return "Hello World";
}
console.log(greet, typeof greet);


