function first() {
  second();
  console.log('First');
}

function second() {
  third();
  console.log('Second');
}

function third() {
  console.log('Third');
}

first();
//Q2: Identify the order in which functions enter and leave the Call Stack
function greet() {
  console.log("Hello");
}

function welcome() {
  greet();
  console.log("Welcome");
}

function start() {
  welcome();
  console.log("Start");
}

start();
//