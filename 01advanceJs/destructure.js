//1. let inside block (scope error)

{
  let x = 10;
  console.log("Inside block:", x); // 10
}

console.log("Outside block:", x); //  ReferenceError: x is not defined

// 2. const object update
const person = { name: "Sara", age: 20 };

// updating property
person.age = 21; 
console.log(person); // { name: "Sara", age: 21 }
//Works because const only prevents re-assignment of variable, not modification of the object properties
//3. Template Literal Example
let myName = "Samra";
let favNum = 7;

let message = `
Hello, my name is ${myName}.
My favorite number is ${favNum * 2}.   // expression inside
This is a multi-line message
created using Template Literals!
`;

console.log(message);

// 4. Array Destructuring
const fruits = ["Apple", "Mango", "Banana", "Orange"];

let [fruit1, fruit2, fruit3, fruit4] = fruits;

console.log(fruit1); // Apple
console.log(fruit2); // Mango
console.log(fruit3); // Banana
console.log(fruit4); // Orange

//5 . Object Destructuring
const user = {
  name: "Ali",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript"]
};

let { name, age, skills } = user;

console.log(name);   // Ali
console.log(age);    // 22
console.log(skills); // ["HTML", "CSS", "JavaScript"]
/*
Const mutability means → const does not make the value itself unchangeable.
It only makes the variable binding fixed (you can’t reassign it).

For primitives (number, string, boolean) → value is fixed.

For objects/arrays → the reference is fixed, but properties/elements can still be changed.C


*/
const num = 10;
num = 20; //  Error

const obj = { name: "Ali" };
obj.name = "Sara"; //  Allowed (mutable object)
