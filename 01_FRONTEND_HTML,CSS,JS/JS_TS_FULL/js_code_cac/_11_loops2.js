// for of

// ["", "", ""]
// [{}, {}, {}]
//getting data from those object here we kept {} but it wikll be real object in real case

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

for (const key of map) {
  console.log(key);
}

for (const key of map.keys()) {
  console.log(key);
}

for (const key of map.values()) {
  console.log(key);
}

const myObject1 = {
  game1: "NFS",
  game2: "Spiderman",
};
console.log(myObject1);
// for (const [key, value] of myObject1) {
//     console.log(key, ':-', value);

// }//we cant iterate objects using for of  way

// for (const key of myObject1) {
//   console.log(key);
// }

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(key);
  console.log(programming[key]);
}

const str = "tyharun";
for (const s in str) {
  //gives an index kindoff
  console.log(s + str[s]);
}
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

console.log("********************************");

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function name(val) {
  //   console.log(val);
}); //noraml way here it is not a callback fun

coding.forEach(function (val) {
  console.log(val);
}); //heere val a parameter--automaticially detects and loop over array and keep each element each time

// coding.forEach( (item) => {
//     console.log(item);
// } )

coding.forEach((item) => {
  if (true) {
    console.log(item);
  }
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arrr) => {
  console.log(item, index, arrr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

myCoding.forEach((item) => {
  if (item.languageFileName === "py") {
    console.log(item.languageName);
    console.log(item.languageFileName);
  }
});
