//1. Create an array of 10 numbers and print only even numbers using filter()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even numbers:", evenNumbers);
// Output: [2, 4, 6, 8, 10]

//2. Create an array of student names ,Add a new student at the end and at the start. ,Remove the last student.
let students = ["Ali", "Sara", "Hassan", "Nadia"];

students.push("Bilal");   // Add at the end
students.unshift("Ayesha"); // Add at the start
students.pop();            // Remove last student

console.log("Students:", students);
// Output: ["Ayesha", "Ali", "Sara", "Hassan", "Nadia"]

//3. Given marks [80, 65, 90, 70, 50], find average using reduce()
let marks = [80, 65, 90, 70, 50];

let total = marks.reduce((sum, mark) => sum + mark, 0);
let average = total / marks.length;

console.log("Average Marks:", average);
// Output: 71
//4. Create an array of fruits and sort them in alphabetical order
let fruits = ["Mango", "Apple", "Banana", "Orange"];

fruits.sort();

console.log("Sorted Fruits:", fruits);
// Output: ["Apple", "Banana", "Mango", "Orange"]
