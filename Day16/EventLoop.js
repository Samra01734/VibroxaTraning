console.log("Start");

setTimeout(function () {
  console.log("Inside setTimeout");
}, 0);

console.log("End");
/*
Start
End
Inside setTimeout

or 
Flow:

"Start" → printed immediately.

setTimeout(..., 0) → goes to Web API → moves callback to Callback Queue.

"End" → printed immediately.

Event Loop pushes "Inside setTimeout" after Call Stack is empty.
*/
function fetchData() {
  setTimeout(() => {
    console.log("Data fetched!");
  }, 2000);
}

console.log("Fetching...");
fetchData();
console.log("Done!");

/*
Flow:

"Fetching..." → printed immediately.

fetchData() runs → schedules timeout (2s).

"Done!" → printed immediately.

After 2s → callback moves from Web API → Callback Queue → Event Loop → Call Stack → "Data fetched!".
Fetching...


Done!
Data fetched!

*/
