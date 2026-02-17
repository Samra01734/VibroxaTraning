// prob 1 
let name = "Samra";
let age = 20;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

//prob 2

var a = 10;
var a = 20;
console.log(a);

//output 2
//prob 3 
const pi = 3.14;
pi = 3.1416;
console.log(pi);
//err pi const is redeclearing 

// prob 4 

let num1 = 10;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Subtract:", num1 - num2);
console.log("Multiply:", num1 * num2);
console.log("Divide:", num1 / num2);

//prob 5 

let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//prob 6 
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 //prob 7 
 function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

//prob 8 
const square = (num) => {
  return num * num;
};

console.log(square(4));

//prob 9 
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits[1]);

//prob 10
let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

///intermadiate 

let number1 = 10;
let number2 = 5;
let operator = "+";  // change this to test

if (operator === "+") {
  console.log(number1 + number2);
} else if (operator === "-") {
  console.log(number1 - number2);
} else if (operator === "*") {
  console.log(number1 * number2);
} else if (operator === "/") {
  console.log(number1 / number2);
} else {
  console.log("Invalid operator");
}
