// Creating an object
const person = {
  name: "Ali",
  age: 22,
  course: "BCA",
  hobbies: ["coding", "football"]
};

// Access properties
console.log(person.name);      // Ali
console.log(person["age"]);    // 22

// Modify property
person.age = 23;

// Add new property
person.city = "Lahore";

// Delete property
delete person.course;

console.log(person);
//======================================2. Object Methods
//this method
const car = {
  brand: "Toyota",
  model: "Corolla",
  start: function () {
    console.log(this.brand + " " + this.model + " is starting...");
  }
};

car.start();  // Toyota Corolla is starting...
//====================3. Constructor Functions and Classes===
function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}

const s1 = new Student("Ali", 22, "BCA");
const s2 = new Student("Sara", 21, "BTech");

console.log(s1.name); // Ali

//b) ES6 Classes=========================
class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  intro() {
    console.log(`Hi, I'm ${this.name}, studying ${this.course}.`);
  }
}

const s = new Student("Ali", 22, "BCA");
s.intro(); // Hi, I'm Ali, studying BCA.

///======c) Inheritance with Classes==================
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
dog.speak();  // Buddy barks
///==============.this=========
const user = {
  name: "Ali",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

user.greet(); // Hello, Ali
///////=.this inside arrow fun ============

const obj = {
  name: "Ali",
  greet: () => {
    console.log(this.name); // undefined (arrow functions don’t bind their own this)
  }
};

obj.greet();
