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
// code 
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

/*
Execution Flow (Call Stack):

first() pushed → calls second()

second() pushed → calls third()

third() pushed → logs "Third", then popped

Back to second() → logs "Second", then popped

Back to first() → logs "First", then popped


//====================output============
Third
Second
First


*/

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

/*

Execution Flow (Call Stack):

start() pushed → calls welcome()

welcome() pushed → calls greet()

greet() pushed → logs "Hello", then popped

Back to welcome() → logs "Welcome", then popped

Back to start() → logs "Start", then popped

✅ Output:
Hello
Welcome
Start


*/

