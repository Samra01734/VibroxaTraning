// Call back promise 
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("John", function() {
  console.log("Callback function called");
});

//Callback with Number
function doubleNumber(num, callback) {
  let result = num * 2;
  callback(result);
}

doubleNumber(5, function(result) {
  console.log("Doubled:", result);
});

// Async with setTimeout
function doTask(taskName, callback) {
  console.log(`Starting ${taskName}...`);
  setTimeout(function () {
    console.log(`${taskName} completed.`);
    callback();
  }, 2000);
}

doTask("Download File", function() {
  console.log("Now processing file...");
});

//Callback Hell Example (Chained Tasks)
doTask("Download", function () {
  doTask("Process", function () {
    doTask("Upload", function () {
      console.log("All done!");
    });
  });
});
//