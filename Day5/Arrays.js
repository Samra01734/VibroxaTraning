//array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // ["Apple", "Banana", "Mango"]
//2 Declaring Arrays Using [] (literal notation)

let numbers = [10, 20, 30];

//3 using new array
let colors = new Array("Red", "Green", "Blue");

// 4. Accessing Elements
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// 5 array.Length()
console.log(fruits.length); // 3

//6. Array Iteration
// for loop
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

//for off
for (let n of nums) {
  console.log(n);
}

// forEach
nums.forEach(function(n) {
  console.log(n);
});
//==================
//7. Array Methods
//push() → Add to end

let fruit = ["Apple"];
fruit.push("Banana");
console.log(fruit); // ["Apple", "Banana"]

//pop() → Remove from end
fruits.pop();
console.log(fruits); // ["Apple"]

//shift() → Remove from start
let num = [1, 2, 3];
nums.shift();
console.log(num); // [2, 3]

//unshift() → Add to start
nums.unshift(0);
console.log(nums); // [0, 2, 3]
//=========================================================================
//7. Searching & Checking Methods
//includes()
let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1.includes("Banana")); // true
console.log(fruits1.includes("Orange")); // false

//indexOf()
console.log(fruits1.indexOf("Banana")); // 1
console.log(fruits1.indexOf("Orange")); // -1

//lastIndexOf()
console.log(fruits1.lastIndexOf("Banana")); // 1
console.log(fruits1.lastIndexOf("Orange")); // -1

//==============================================================================
//8. Transformation Methods
//map() → transform each element
let Nums = [1, 2, 3];
let squared = Nums.map(n => n * n);
console.log(squared); // [1, 4, 9]

//filter() → return elements that match condition
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2]

//reduce() → reduce array to single value
let sum = Nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 6

//sort()
let Fruits = ["Banana", "Apple", "Mango"];
Fruits.sort();
console.log(Fruits); // ["Apple", "Banana", "Mango"]

//reverse()
Fruits.reverse();
console.log(Fruits); // ["Mango", "Banana", "Apple"]

//concat()
let moreFruits = ["Orange", "Pineapple"];
let allFruits = Fruits.concat(moreFruits);
console.log(allFruits); // ["Mango", "Banana", "Apple", "Orange", "Pineapple"]

//slice(start, end) → copy part of array
let someFruits = Fruits.slice(1, 3);
console.log(someFruits); // ["Banana", "Mango"]
//splice(start, deleteCount, item1, item2, ...) → add/remove items
Fruits.splice(1, 1, "Strawberry", "Blueberry");
console.log(Fruits); // ["Mango", "Strawberry", "Blueberry", "Apple"]
