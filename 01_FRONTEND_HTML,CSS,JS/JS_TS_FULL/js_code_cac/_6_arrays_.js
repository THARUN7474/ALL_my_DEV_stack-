//array

// [] {} ()
const myarr = [1,2,"tharun",'c',true,{name:"tharun",email:"tahrun74@gamil.com"}]
// resisable
// documentation===

const myarr2 = new Array(1,2,34,5)
// checkout prototype access in browser conosles

console.log(myarr)
console.log(myarr[0])
console.log(myarr[myarr.length -1])

// shallowcopies(create array copy with same reference) and deepcpoies (create new array copy not same reference)of arrays

console.log("******************************")
myarr.push(8)
myarr.push(100)
myarr.pop();
console.log(myarr)
console.log("******************************")
myarr.unshift(10000)
myarr.shift()
console.log(myarr.indexOf(100))
console.log(typeof myarr.includes(1))
console.log(myarr.includes(1))
console.log(myarr.toString())

console.log("******************************")
const newarr = myarr.join()
console.log(newarr)
console.log(typeof newarr)
console.log(myarr)
console.log("******************************")

console.log("a ",myarr)
const myn1 = myarr.slice(1,5,2);
console.log(myn1)

console.log("b ",myarr)

console.log("******************************")

console.log("a ",myarr)
const myn2 = myarr.splice(1,5,2);
console.log(myn2)//make new means it removes all the selected things pf splice

console.log("b ",myarr)


// which operation makes chanegs in orgirnal arr or datatype ---learn this 

const heros = ["a","b","c"]
const heros1 = ["aa","bb","cc"]


console.log(heros)

heros.push(heros1)
console.log(heros)

heros.push(heros)
heros.push(heros)
console.log(heros)

heros.push(heros1)
console.log(heros)

const heross = ["a","b","c"]
const heross1 = ["aa","bb","cc"]

console.log("**********************")
console.log(heross.concat(heross1))
console.log(heross)

const newwwwarr = [...heross , ...heross1]
console.log(newwwwarr)
console.log(...heross)

const ano_arra1 = [1,2,3,[5,6],7,8,[11,22,33,[100,23]]]
const ano_array = [1,2,3,[5,6],7,8,[11,22,33,[100,23]]]

const flatmade_array = ano_array.flat(Infinity)//here we can decide upto what depth we need too do falt means keeping in same array

console.log(flatmade_array)
console.log(ano_arra1)

console.log(Array.from({name:"tahrun",age:19}))//give empty coz we didnt mention keys array or value array---we need to mention
console.log(Array.from("tharun"))


// Array.from(arrayLike[, mapFn[, thisArg]])
// Parameters:

// arrayLike: An array-like or iterable object to convert to an array.
// mapFn (Optional): A mapping function to call on each element of the array-like object.
// thisArg (Optional): A value to use as this when executing the mapFn.
// Return value: A new array instance.
// Convert array-like object to array
// const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// const newArray = Array.from(arrayLike);
// console.log(newArray); // Output: ['a', 'b', 'c']

// // Using mapping function
// const numbers = [1, 2, 3];
// const squaredNumbers = Array.from(numbers, x => x * x);
// console.log(squaredNumbers); // Output: [1, 4, 9]

const newArray = Array.of(1, 2, 'hello', { name: 'John' });
console.log(newArray); // Output: [1, 2, 'hello', { name: 'John' }]



let a1 = 100;
let a2 = 200;
let a3 = 300;

console.log(Array.of(a1,a2,a3));


let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

console.log(fruits)
// unshift(): Method that adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('grape');

console.log(fruits)
fruits.forEach(function(fruit) {
    console.log(fruit);
});

console.log(fruits)
fruits.forEach(function(fruit) {
    console.log(fruit);
});

console.log(fruits)
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});

console.log(longFruits)

let fruitLengths = fruits.map(function(fruit) {
    return fruit.length;
});

console.log(fruitLengths)

let joinedString = fruits.join(', '); // Joins array elements with ', ' separator
fruits.reverse(); // Reverses the order of elements in the array
fruits.sort(); // Sorts the array alphabetically (default behavior)

let allLongFruits = fruits.every(function(fruit) {
    return fruit.length > 5;
}); // Returns true if all fruits have a length greater than 5

