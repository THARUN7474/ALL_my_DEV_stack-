//for loop
const array = [1, 2, 3, 4];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}
// console.log(element);//out of scope of for{  }

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + "*" + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "superman"]; //0 to len-1===indexes
//console.log(myArray.length);
for (let index = 0; index <= myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
} //we get undefined not an error nut its also a big problem

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    if (j == i) {
      break;//only breaks inner loop 
    }
    console.log(i + "*" + j + " = " + i * j);
  }
}






let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray2 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray2.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

//expections ---
//db getting data ---more usefull array type loops all that