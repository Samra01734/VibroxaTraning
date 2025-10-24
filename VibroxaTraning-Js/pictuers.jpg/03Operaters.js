//1 Arithmatic Operaters like +,-,*,/
let x = 10, y = 3;
console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333333333333335
// Assignment Operators like ==, ===, !=, <, >
let z = 5;
z += 2; // z = z + 2
console.log(z); // 7

// Comparison Operators like ==, ===, !=, <, >
console.log(x == y); // false
console.log(x === y); // false
console.log(x != y); // true
console.log(x < y); // false
console.log(x > y); // true

//Logical Operators → &&, ||, !
console.log(x > 5 && y < 5); // true
console.log(x > 5 || y < 5); // true
console.log(!(x > 5)); // false

//Ternary Operator → condition ? expr1 : expr2
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor");

// Difference between == and ===:

// == → Compares values only (performs type coercion).

// === → Compares value + type (strict comparison).
5 == '5'   // true
5 === '5'  // false

