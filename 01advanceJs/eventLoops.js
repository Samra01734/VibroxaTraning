console.log("Start");

setTimeout(function () {
  console.log("Inside setTimeout");
}, 0);

console.log("End");
/*
Start
End
Inside setTimeout
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

Fetching...
Done!
Data fetched!

*/