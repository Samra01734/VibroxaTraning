// Function Expression → validate marks (0–100)
const validateMarks = function(marks) {
  return marks >= 0 && marks <= 100;
};

// Function Declaration → main grading logic
function getGrade(marks) {
  if (marks >= 80) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 40) return "C";
  else return "Fail";
}

// Arrow Function → display result
const displayResult = (marks, grade) => {
  console.log(`Marks: ${marks}, Grade: ${grade}`);
};

// Example Usage:
let marks = 75; 

if (validateMarks(marks)) {
  let grade = getGrade(marks);
  displayResult(marks, grade);
} else {
  console.log("Invalid marks! Please enter between 0 and 100.");
}
