if (true) {
  console.log("hello");
} //scope here {}

// (truthy conditions)---using comarions
// <,>,<=,>=,===,==,!=,!==,---WE USE THESE

const isuserloggedin = true;
if (isuserloggedin) {
  console.log("user is logged in");
}

if (2 == "2") {
  console.log("2 is equal== to 2");
}

if (2 === "2") {
  //type also will be checked ---strict checking--- !== and === checking
  console.log("2 is equal=== to 2");
}

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
} // it is like real usecase---email checking login credintials checking

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
//break statement is must as flow depends on it

// truthy vs falsy values

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values--other than falsy all are truthy
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

//more usefull in datbase data getting --like using with firebase or appwrite----
let val1;
// val1 = 5 ?? 10//we get the 5

// val1 = null ?? 10//we get 10...actually we write a complex fucntiion inplace of 10 -- handle this situation

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20; //inplace of 10 , 20 null we use fucntions in real cases

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
