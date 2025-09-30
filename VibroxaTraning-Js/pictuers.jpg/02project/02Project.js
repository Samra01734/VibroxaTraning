const prompt = require("prompt-sync")();

// Ask for user input
let name = prompt("Enter your name: ");
let ageStr = prompt("Enter your age: ");

// Before conversion
console.log("Type of name:", typeof name);          // string
console.log("Type of age (before):", typeof ageStr); // string

// Convert age (string → number)
let age = Number(ageStr);

// After conversion
console.log("Type of age (after):", typeof age);    // number

// Welcome message
console.log("Welcome, " + name + "!");

// Adult check
if (age >= 18) {
  console.log("You are an adult ");
} else {
  console.log("You are a minor ");
}
