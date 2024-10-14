// const user = {
//   username: "thsrun",
//   price: 99,

//   // this refers to current context like here user object
//   welcomemssg: function () {
//     console.log(`${this.username} welcome  to website`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// user.welcomemssg();
// console.log(user.username);
// user.username = "tharunnn"; //here the context is changed ntg but the values changed here we changed varibles values when initalised so not effected in prevs useings of same object
// console.log(user.username);
// user.welcomemssg();

// console.log(this); //give {} empty context but when we run in same this in browsers we get window()---as it is main object ---browser engine
// //but in node envi we get {} when console.log(this) is not in any of the object

function one() {
  //   console.log(this); //give many things
  username = "thaurn";
  //in function when we use this --not works as it in objects
  console.log(this.username);
  //   console.log(username);
}

one();

const two = function () {
  let username = "tharunnn";
  console.log(username);
  console.log(this.username);
};

two();

const three = () => {
  let username = "tharrunnn";
  console.log(username);
  console.log(this.username);
  console.log(this);
};

three();
//arrow function ----basic syntax is ()=>{}

const addTwo0 = function (num1, num2) {
  return num1 + num2;
}; //implicit way

const addTwo = (num1, num2) => {
  return num1 + num2;
}; //explicit way of using arrow function

const addTwo2 = (num1, num2) => num1 + num2; //implicit way of writing of arrow function
const addTwo3 = (num1, num2) => num1 + num2; //implicit way of writing of arrow function
const addTwo4 = (num1, num2) => {
  return num1 + num2;
}; //implicit way of writing of arrow function
console.log(addTwo(1, 2));
console.log(addTwo2(1, 2));
console.log(addTwo3(1, 2));
console.log(addTwo4(1, 2));

const addTwo5 = (num1, num2) => {
  return { name: "thaurn" };
};

//if we write without return keyword
const addTwo6 = (num1, num2) => ({ name: "thaurn" });

console.log(addTwo5(1, 2));
console.log(addTwo6(1, 2));

const arr = [1, 2, "a", 45, 1.4];

//various ways of using syntaxs
arr.forEach(function () {
  console.log(arr);
});

// arr.forEach(()=> {});
// arr.forEach(()=> ());

// Using function syntax
arr.forEach(function (element, index, array) {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});

// Using arrow function syntax
arr.forEach((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});

// Using arrow function with no parameters
arr.forEach(() => {
  // Your code here
});

// Using arrow function with empty parentheses
arr.forEach(() => {
  // Your code here
});

// Immediately Invoked Function Expressions (IIFE)---auto start or exection of fucntion

// used mainly in dbms connect or any startig cases

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

//normal fucntion---simple iife
(function code(name) {
  console.log(`DB CONNECTED TWO ${name}`);
})("tahruhn")
  //parameter passsed

  // z'******
(
  //arrow functions------simple iife
  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
  }
)("thrun");

// ()(); //1st one for function delclration and (2nd) one for fucntion execution
