//1 for loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
//2 while loop
let num = 1;
while (num <= 5) {
  console.log("Count:", num);
  num++;
}

//3 do…while loop
let n = 6;
do {
  console.log("Value is:", n);
  n++;
} while (n <= 5);

//4 for…of loop
let fruits = ["Apple", "Mango", "Banana"];
for (let fruit of fruits) {
  console.log(fruit);
}
//5 for…in loop
let student = { name: "Samra", age: 21, grade: "A" };
for (let key in student) {
  console.log(key, ":", student[key]);
}
// 6 Nested Loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
// 7 Loop with break & continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // stops loop
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skips 3
  }
  console.log(i);
}

//8 Using if / else inside loops
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i, "is Even");
  } else {
    console.log(i, "is Odd");
  }
}
//9 Using variables inside loops
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;  // updating variable
}
console.log("Total sum =", sum);
