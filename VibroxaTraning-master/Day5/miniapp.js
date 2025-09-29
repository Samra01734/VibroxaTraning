// Student Record System

// Initial Array
let students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 72 },
  { name: "Hassan", marks: 90 }
];

// 1. Add Student
function addStudent(name, marks) {
  students.push({ name, marks });
  console.log(`${name} added successfully!`);
}

// 2. Remove Student (by index)
function removeStudent(index) {
  if (index >= 0 && index < students.length) {
    let removed = students.splice(index, 1);
    console.log(`${removed[0].name} removed successfully!`);
  } else {
    console.log("Invalid index!");
  }
}

// 3. Search Student (by name)
function searchStudent(name) {
  let found = students.filter(student => student.name.toLowerCase() === name.toLowerCase());
  if (found.length > 0) {
    console.log("Student Found:", found);
  } else {
    console.log("No student found with that name.");
  }
}

// 4. Display All Students
function displayAllStudents() {
  console.log("---- Student Records ----");
  students.forEach((student, index) => {
    console.log(`${index}. Name: ${student.name}, Marks: ${student.marks}`);
  });
}

// 5. Calculate Class Average
function calculateAverage() {
  if (students.length === 0) {
    console.log("No students in the class.");
    return;
  }
  let total = students.reduce((sum, student) => sum + student.marks, 0);
  let average = total / students.length;
  console.log(`Class Average: ${average.toFixed(2)}`);
}

// ----------------------
// Example Usage
// ----------------------

displayAllStudents(); // Show initial students

addStudent("Nadia", 78);
addStudent("Bilal", 95);

displayAllStudents();

searchStudent("Sara");

removeStudent(1); // removes student at index 1

displayAllStudents();

calculateAverage();
