//1. Spread Operator (...)
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

/*

Uses:

Arrays

Copy: let copy = [...arr];

Merge: let merged = [...arr1, ...arr2];

Objects

Copy: let copyObj = {...obj};

Merge: let merged = {...obj1, ...obj2};

 It expands (spreads) elements of an array/object.

*/
//2. Rest Parameters (...)
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

//Collects multiple arguments into a single array.
// Always used in function parameters (not like spread which is for expanding).

//3. Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
greet();        // "Hello, Guest"
greet("Basit"); // "Hello, Basit"

//4. Arrow Functions
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
/*
Key Differences from Normal Functions:

Shorter Syntax

One-liner for simple return values.

No function keyword.

No Own this (Lexical this)

Arrow functions inherit this from their pa

*/
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++; // 'this' refers to Person object
  }, 1000);
}
// can't used as constructor
const User = () => {};
new User(); //  Error

/*

 Quick Summary:

Spread (...) → Expands arrays/objects.

Rest (...) → Collects arguments into an array (in functions).

Default Parameters → Set fallback values in functions.

Arrow Functions → Shorter syntax + lexical this.

Default Parameters → Set fallback values in functions.

Arrow Functions → Shorter syntax + lexical this.
*/
