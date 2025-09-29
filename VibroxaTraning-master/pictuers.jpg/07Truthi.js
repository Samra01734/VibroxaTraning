let values = [0, "", null, undefined, NaN, "hello", 42];

values.forEach(val => {
  if(val) {
    console.log(val, "is Truthy");
  } else {
    console.log(val, "is Falsy");
  }
});
