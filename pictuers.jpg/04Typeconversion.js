//Type coercion = Automatic conversion of one data type to another during operations.
'5' + 2  // "52"  (number → string)


/*

Implicit Conversion (Type Coercion):
JS automatically converts types in certain situations, such as when using the + operator with a string and a number.

*/
console.log('5' - 2); // 3 (string → number)

/*
Explicit Conversion (Type Casting):
Developer manually converts.
*/

console.log(Number('5') + 2); // 7


// examples 
console.log('5' + 2);   // "52"  (string + number → string concatenation)
console.log('5' - 2);   // 3     (string converted to number)
console.log(true + 1);  // 2     (true → 1)
console.log(null + 5);  // 5     (null → 0)


//When string is added to number:
console.log(10 + "20")// "1020"

//evaluate 
console.log(10 + "20");    // "1020"   (number + string → string)
console.log(10 - "2");     // 8        (string converted to number)
console.log("10" * 2);     // 20       (string converted to number)
console.log("ten" * 2);    // NaN      (cannot convert "ten" to number)



// 
let strNum = "100";
let num = 50;

console.log(Number(strNum));   // 100
console.log(String(num));      // "50"
console.log(parseInt("123.45"));   // 123
console.log(parseFloat("123.45")); // 123.45

console.log(typeof strNum);    // string
console.log(typeof Number(strNum)); // number


