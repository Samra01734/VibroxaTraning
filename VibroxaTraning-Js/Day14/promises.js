//Basic Promise
let myPromise = new Promise(function(resolve, reject) {
  let success = true;
  if (success) {
    resolve("Task completed successfully.");
  } else {
    reject("Something went wrong.");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
//Simulate Async Task
function simulateAsyncTask(taskName) {
  return new Promise((resolve, reject) => {
    console.log(`Starting ${taskName}...`);
    setTimeout(() => {
      console.log(`${taskName} completed.`);
      resolve();
    }, 2000);
  });
}

//Promise Chaining
function downloadFile() {
  return simulateAsyncTask("Download");
}

function processFile() {
  return simulateAsyncTask("Process");
}

function uploadFile() {
  return simulateAsyncTask("Upload");
}

downloadFile()
  .then(processFile)
  .then(uploadFile)
  .then(() => console.log("All done!"))
  .catch(err => console.error("Error:", err));

  //Convert Callback Hell → Promises
  simulateAsyncTask("Download")
  .then(() => simulateAsyncTask("Process"))
  .then(() => simulateAsyncTask("Upload"))
  .then(() => console.log("All done!"))
  .catch(err => console.log("Error:", err));

