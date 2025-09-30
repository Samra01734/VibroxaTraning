console.log(a); // undefined
var a = 10;
//var a is hoisted with undefined.

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

//let b is hoisted but not initialized → TDZ.
foo(); // "Hello"
function foo() {
  console.log("Hello");
}


bar(); // TypeError: bar is not a function
var bar = function() {
  console.log("Bar");
};

/*=========================

var bar hoisted with undefined.

At call time, bar is not yet assigned → bar() is undefined().
✅ Output 
TypeError: bar is not a function

/======
/*
Text-Based Diagram (Hoisting Visualization):
Imagine the code is rewritten by the JavaScript engine during compilation:

// Original code:
console.log(a);
var a = 10;
console.log(b);
let b = 20;
// After hoisting (conceptual):
var a; // Hoisted, initialized to undefined
let b; // Hoisted, but in TDZ (uninitialized)
console.log(a); // undefined
a = 10;
console.log(b); // ReferenceError (TDZ)
b = 20;

*/
//function hoisting 

// Original:
foo();
function foo() { console.log("Hello"); }

// After hoisting:
function foo() { console.log("Hello"); } // Fully hoisted
foo(); // Works fine
//Function Expression:
// Original:
bar();
var bar = function() { console.log("Bar"); };

// After hoisting:
var bar; // Hoisted, initialized to undefined
bar(); // TypeError: bar is not a function
bar = function() { console.log("Bar"); };
//


