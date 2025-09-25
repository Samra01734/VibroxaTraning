// =========================
// User Info Card (Mini Project)
// =========================

// String
let userName = "Samra";

// Number
let userAge = 21;

// Boolean
let isStudent = true;

// null (no job assigned yet)
let job = null;

// undefined (will assign later)
let phoneNumber;

// Symbol (unique ID)
let userId = Symbol("user123");

// BigInt (large account number)
let accountNumber = 98765432101234567890n;

// Object (user profile)
let address = {
  city: "Lahore",
  country: "Pakistan",
};

// Array (skills)
let skills = ["JavaScript", "HTML", "CSS"];

// Function (to greet user)
function greet(name) {
  return `Hello, ${name}! Welcome back`;
}

console.log("========== USER INFO CARD ==========");

console.table({
  Name: userName,
  Age: userAge,
  Student: isStudent,
  Job: job,
  Phone: phoneNumber,
  "User ID": userId.toString(),
  "Account Number": accountNumber.toString(),
  Address: address.city + ", " + address.country,
  Skills: skills.join(", "),
  Greeting: greet(userName),
});
