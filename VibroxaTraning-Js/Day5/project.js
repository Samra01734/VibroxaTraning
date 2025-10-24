// Student Class Project

class Student {
  constructor(name, age, grades, subjects) {
    this.name = name;
    this.age = age;
    this.grades = grades;     // array of numbers
    this.subjects = subjects; // array of subjects
  }

  // Calculate average grade
  calculateAverage() {
    if (this.grades.length === 0) return 0;
  const sum = this.grades.reduce((acc, g) => acc + g, 0);
    return sum / this.grades.length;
  }
 
  // Add a new subject
  addSubject(newSubject) {
    this.subjects.push(newSubject);
    console.log(`${newSubject} added to ${this.name}'s subjects.`);
  }

  // Update a grade for a specific subject
  updateGrade(subject, newGrade) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.grades[index] = newGrade;
      console.log(`${this.name}'s grade in ${subject} updated to ${newGrade}.`);
    } else {
      console.log(`${subject} not found in ${this.name}'s subjects.`);
    }
  }

  // Display student information
  displayInfo() {
    console.log(`--- Student Info ---`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Subjects: ${this.subjects.join(", ")}`);
    console.log(`Grades: ${this.grades.join(", ")}`);
    console.log(`Average Grade: ${this.calculateAverage().toFixed(2)}`);
    console.log("--------------------\n");
  }

  // Compare average grades of two students
  compareGrades(otherStudent) {
    const avg1 = this.calculateAverage();
    const avg2 = otherStudent.calculateAverage();

    if (avg1 > avg2) {
      console.log(`${this.name} has a higher average (${avg1.toFixed(2)}) than ${otherStudent.name} (${avg2.toFixed(2)}).`);
    } else if (avg1 < avg2) {
      console.log(`${otherStudent.name} has a higher average (${avg2.toFixed(2)}) than ${this.name} (${avg1.toFixed(2)}).`);
    } else {
      console.log(`${this.name} and ${otherStudent.name} have the same average (${avg1.toFixed(2)}).`);
    }
  }
}

// Create multiple student instances
const student1 = new Student("Ali", 20, [85, 90, 78], ["Math", "English", "Science"]);
const student2 = new Student("Sara", 21, [88, 92, 95], ["Math", "English", "Biology"]);
const student3 = new Student("Ahmed", 19, [70, 75, 80], ["History", "Geography", "English"]);

// Use the methods
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();

student1.addSubject("Computer Science");
student1.updateGrade("Math", 95);

student1.compareGrades(student2);
student2.compareGrades(student3);
