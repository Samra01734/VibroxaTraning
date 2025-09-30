 let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);
//20
//10
/*

Because let is block-scoped:

Inside the if block → x = 20 (only valid inside {})

Outside the block → original x = 10
*/

//Q2: Rewrite to avoid global scope pollution
var counter = 0;
function increment() {
  counter++;
}
increment();
 
// rewritting 
(function () {
  let counter = 0;
  function increment() {
    counter++;
    console.log(counter);
  }
  increment(); // 1
})();
//IIFE (Immediately Invoked Function Expression) creates a new scope, avoiding global pollution.rents.

//Closure Practice
function makeCounter() {
  let count = 0; // private variable
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count is private to makeCounter, not accessible globally.
// Each call to counter() increments and returns the private count variable.
//=========================what's wrong with this code========================

function createFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
const funcs = createFunctions();
funcs[0](); 
funcs[1](); 
funcs[2]();

//fixing
function createFunctions() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const functions = createFunctions();
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2
