// functions---

function myself() {
  console.log("hi");
  console.log("my self tharun");
  console.log("hehe");
}

// myself----Reference
// myself()----executable calling

function addtwo(a, b) {
  console.log(a + b); //scopes here there
  return a + b; //after this anything wont exectute itself
}

// a,b are params

// 1,2 or real data while calloing are arguments

myself();
addtwo(1, 2);
addtwo(3, 4);
addtwo(3, "4");
addtwo(3, "a");
addtwo(3, undefined);
addtwo(3, null);

const res = addtwo(1, 2);

console.log("result", res);

function loginuser(username) {
  if (username === undefined) {
    console.log("please enter a username");
    return;
  }
  return `${username} is  just logged in`;
}

loginuser("thrun");

console.log(loginuser("tharun"));
console.log(loginuser());

function calucalateprize(num) {
  return num;
}

function calucalateprize2(...num) {
  return num;
}

function calucalateprize3(val1, val2, ...num) {
  console.log(val1, val2);
  return num;
}

console.log(calucalateprize(200));
console.log(calucalateprize());
console.log(calucalateprize(200, 200, 3300, 22));

console.log(calucalateprize2(200));
console.log(calucalateprize2());
console.log(calucalateprize2(200, 200, 3300, 22));

console.log(calucalateprize3(200));
console.log(calucalateprize3());
console.log(calucalateprize3(200, 200, 3300, 22));

const user = {
  username: "tharun",
  price: 100,
};

function handleobj(anyobject) {
  console.log(`username ${anyobject.username} and prize is ${anyobject.price}`);
  return;
}

handleobj(user);
handleobj({
  username: "tharun",
  price: 100,
});

function getarray(array) {
  console.log(`the value is ${array[2]}`);
}

console.log(getarray);
// console.log(getarray());

getarray([1, 2, 3, 4, "obj"]);

console.log(
  "************************************************************************************************"
);
// scopes

let a = 10;
const b = 120;
var c = 30;

console.log(a);
console.log(b);
console.log(c);
console.log("********************************");

if (true) {
  let a = 100;
  const b = 1200;
  var c = 300;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log("********************************");
}
console.log(a);
console.log(b);
console.log(c);
console.log("********************************");
{
  c = 400;
  console.log(c);
}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }
// here index is local scope ---

console.log(
  "*****************************************************************************************8"
);
function one() {
  const username = "tharun";

  function two() {
    const website = "youtube";
    console.log(username);
    console.log(website);
  }
  // console.log(website);/cant access to website. as it is in loacl block scope for two function

  two();
}

one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); //we can use even before declaration of function here this type of declaration of fucntion

function addone(num) {
  return num + 1;
}

// ReferenceError: Cannot access 'addTwo' before initialization
// addTwo(5)//gives error as this type of declaration o ffucntion---expresssion function ---it involves different topics like hoisting and context scope and all that we cant use as it is declared after
const addTwo = function (num) {
  return num + 2;
};
addTwo(8);
