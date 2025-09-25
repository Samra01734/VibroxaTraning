// 1. Function Declaration (adds two numbers)
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 3)); // 8

// 2. Function Expression (check even or odd)
const isEvenOrOdd = function(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(isEvenOrOdd(4)); // Even

// 3. Arrow Function (Hello name)
const sayHello = (name) => `Hello, ${name}`;
console.log(sayHello("Ali")); // Hello, Ali

// 4. Function with Positive, Negative, Zero
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumber(-5)); // Negative
//========================================================================
//3. Function Expression
const greet = function() {
  console.log("Hello!");
};

//======================================= parameter vs arguments====================
function add(x, y) {  // x, y are parameters
  return x + y;
}

add(5, 3); // 5, 3 are arguments
//=====================================return statement==========================
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5)); // 20

//=================================== Function Scope (local vs global variables)=========
let globalVar = "I'm global!";

function testScope() {
  let localVar = "I'm local!";
  console.log(globalVar); // Works
  console.log(localVar);  // Works
}

testScope();
console.log(globalVar); // Works
console.log(localVar);  //  Error
