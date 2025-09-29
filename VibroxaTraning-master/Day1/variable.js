const accontId=1223
let accountName="Savings"
var accountBalance=0

accountId=2

let accountType; // undefined
//console.log(accountId)// changing not allowed
console.table([accountName,accountId,accountBalance])

// not use var , preffered let , const

// var (old way - avoid using)
var oldVar = "I am var";
console.log(oldVar);

// let (can be reassigned)
let age = 20;
console.log("Age:", age);
age = 25; // reassigned
console.log("Updated Age:", age);

// const (cannot be reassigned)
const pi = 3.1416;
console.log("Pi:", pi);
