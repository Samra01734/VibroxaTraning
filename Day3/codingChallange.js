//1. Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//2. Print even numbers between 1 and 20 using a while loop
let num = 2;
while (num <= 20) {
  console.log(num);
  num += 2;
}

//3. Use a do…while loop to print numbers until the user enters 0
let input;
do {
  input = parseInt(prompt("Enter a number (0 to stop): "));
  console.log("You entered:", input);
} while (input !== 0);

//4. Create an array of fruits and use for…of to print each fruit
let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

//5. Create an object of a student and use for…in to print keys + values
let student = {
  name: "Samra",
  age: 21,
  grade: "A"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}
//1. Multiplication table of 5
let table = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} × ${i} = ${table * i}`);
}

//2. Sum of first 100 natural numbers
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of first 100 numbers:", sum);

//3. Factorial of a number
let number = 5;  // Change this value for testing
let fact = 1;

for (let i = 1; i <= number; i++) {
  fact *= i;
}
console.log(`Factorial of ${number} is ${fact}`);

//4. Nested loops to print a pattern (triangle)
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

//
