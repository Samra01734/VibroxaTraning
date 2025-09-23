//1. Basic Try-Catch: Parse JSON
function safeJSONParse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return "Invalid JSON";
  }
}

// Example
console.log(safeJSONParse('{"name":"Ali"}')); // { name: "Ali" }
console.log(safeJSONParse('{name:"Ali"}'));   // Invalid JSON

//2. Throw Custom Error: Negative numbers not allowed
function squareNumber(num) {
  if (num < 0) {
    throw new Error("Negative numbers not allowed");
  }
  return num * num;
}

// Example
try {
  console.log(squareNumber(5));   // 25
  console.log(squareNumber(-3));  // Error
} catch (err) {
  console.log("Caught: " + err.message);
}

//3. Use Finally: Simulating resource cleanup
function simulateResource() {
  console.log("Opening resource...");
  try {
    // Simulate error
    throw new Error("Something went wrong!");
  } catch (err) {
    console.log("Error caught:", err.message);
  } finally {
    console.log("Closing resource...");
  }
}

simulateResource();

//4. Catch ReferenceError
try {
  console.log(myVar); // undefined variable
} catch (err) {
  if (err instanceof ReferenceError) {
    console.log("Caught ReferenceError:", err.message);
  } else {
    console.log("Caught some other error");
  }
}

//5. Try-Catch in Loops: Handle multiple JSON strings
const jsonStrings = [
  '{"id":1,"name":"A"}',
  '{id:2,"name":"B"}',  // invalid
  '{"id":3,"name":"C"}'
];

const results = [];

for (let str of jsonStrings) {
  try {
    results.push(JSON.parse(str));
  } catch (err) {
    console.log("Invalid JSON skipped:", str);
  }
}

console.log("Valid results:", results);

//