//1. Create a simple class Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}


//  Usage
const ali = new Person("Ali", 22);
const samra = new Person("Samra", 20);
ali.greet(); // Hi, I am Ali and I am 22 years old.
samra.greet(); // Hi, I am Samra and I am 20 years old.

//2. Create a Student class extending Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call parent constructor
    this.grade = grade;
  }


  
  greet() {
    console.log(
      `Hi, I am ${this.name}, age ${this.age}, and I am in grade ${this.grade}.`
    );
  }
}



// Usage
const sara = new Student("Sara", 20, "A");
sara.greet(); // Hi, I am Sara, age 20, and I am in grade A.

//3. Prototype Inheritance (without class keyword)
function PersonProto(name, age) {
  this.name = name;
  this.age = age;
}

PersonProto.prototype.greet = function () {
  console.log(`Hello, I am ${this.name}, age ${this.age}`);
};

function StudentProto(name, age, grade) {
  PersonProto.call(this, name, age); // inherit properties
  this.grade = grade;
}
// Inherit prototype methods
StudentProto.prototype = Object.create(PersonProto.prototype);

StudentProto.prototype.greet = function () {
  console.log(
    `Hello, I am ${this.name}, age ${this.age}, and grade ${this.grade}`
  );
};

// Usage
const student = new StudentProto("Basit", 23, "B");
student.greet(); 
// Hello, I am Basit, age 23, and grade B
 //4. Different values of this

 // 1. Regular function
function regularFunc() {
  console.log(this);
}
regularFunc(); // In strict mode: undefined | Else: global object

// 2. Arrow function
const arrowFunc = () => {
  console.log(this);
};
arrowFunc(); // Inherits "this" from surrounding scope

// 3. Object method
const obj = {
  name: "Ali",
  show() {
    console.log(this.name);
  }
};
obj.show(); // Ali

// 4. Constructor function
function Car(model) {
  this.model = model;
}
const c = new Car("Civic");
console.log(c.model); // Civic

//5. Use call(), apply(), and bind()
function introduce(city, country) {
  console.log(`Hi, I am ${this.name} from ${city}, ${country}`);
}

const user = { name: "Sara" };

introduce.call(user, "Lahore", "Pakistan");  
// Hi, I am Sara from Lahore, Pakistan

introduce.apply(user, ["Karachi", "Pakistan"]);  
// Hi, I am Sara from Karachi, Pakistan

const boundIntro = introduce.bind(user, "Islamabad", "Pakistan");
boundIntro();  
// Hi, I am Sara from Islamabad, Pakistan

/*

Prototype Methods vs Instance Methods



Prototype methods are shared among all instances.
 Instance methods are created for each object separately.

*/

//
function Person(name) {
  this.name = name;

  // Instance method (new copy for each object ❌ memory heavy)
  this.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };
}

// Prototype method (shared  memory efficient)
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Person("Ali");
const p2 = new Person("Sara");

p1.sayHi === p2.sayHi;   // false  (different copies)
p1.greet === p2.greet;   // true  (shared method)


