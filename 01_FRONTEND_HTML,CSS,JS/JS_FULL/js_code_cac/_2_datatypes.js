"use strict"; //by these we telll engine that run with newer version as old and new js is there many new things came ---old standrard wont work here now

// alert("hello! tharun")//we are using nodejs not browser


//maintain code readability

console.log("hello"); console.log("hi")//not soreadbility

console.log("hello")//alwasy it goes to next line 
console.log("hi")


//document----mdn or ecma script ts39---refer these

let name = "tharun"
let age = 18
const gender = "male"
let isgood = true

//number => 2 to power 53
//bigint
//string ===' ',,,, " "
//boolean
//null--stand alone value(representation of emptyness)
//undefined---not defined 
//symbol---for unique ness more used

//object
console.log(typeof"tarun")
console.log(typeof undefined)//undefiened type
console.log(typeof null)//object type

// ***************************************************************
console.log("********************************************************************8")
let score = 33
let valueofstring = Number(score)
let score1 = "33"
let valueofstring1= Number(score1)
let score2 = null
let valueofstring2 = Number(score2)
let score3 = undefined
let valueofstring3 = Number(score3)
let score4 = "hero"
let valueofstring4 = Number(score4)
let score5 = true
let valueofstring5 = Number(score5)


// const {score1} = req.body()
//asking from front end

// let valueofstring = Number(score1)
//it converts even like '33abs' also but to NaN as js is not strict type

console.log("------------")
console.log(score)
console.log(typeof score)
console.log(typeof(score))
console.log(valueofstring)
console.log(typeof valueofstring)

console.log("------------")
console.log(score1)
console.log(typeof score1)
console.log(typeof(score1))
console.log(valueofstring1)
console.log(typeof valueofstring1)

console.log("------------")
console.log(score2)
console.log(typeof score2)
console.log(typeof(score2))
console.log(valueofstring2)
console.log(typeof valueofstring2)

console.log("------------")
console.log(score3)
console.log(typeof score3)
console.log(typeof(score3))
console.log(valueofstring3)
console.log(typeof valueofstring3)

console.log("------------")
console.log(score4)
console.log(typeof score4)
console.log(typeof(score4))
console.log(valueofstring4)
console.log(typeof valueofstring4)

console.log("------------")
console.log(score5)
console.log(typeof score5)
console.log(typeof(score5))
console.log(valueofstring5)
console.log(typeof valueofstring5)

console.log("----------------------conversions-------------------------------------------")
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
console.log("------------")
let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true
console.log("------------")
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log( 3 + 4* 5 % 3);-----usefull for exams not for coding or projects----precidence all those---only for exam
// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
--gameCounter
++gameCounter;
console.log("------------")
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// ***************************************************************
console.log("***************************************************************")


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);




//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const scoree = 100
const scoreValue = 100.3

const isLoggeedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3























// Premitive Datatypes

//                   Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined


// Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)












// Primitive DataTypes:


// 1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
// 2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

// 3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

// 4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

// 5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

// 6.Symbol (ES6): it is mostly used used to find uniqnece.

// 7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

//  Refence (Object Data Types):

// 1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

// 2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

// 3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

// 4.Date: Represents dates and times.

// 5.RegExp: Represents regular expressions for pattern matching.



// lets talk about some Range of Primitive DataType:

//     1.Number:
//         Represents both integers and floating-point numbers.
//         Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
//         Smallest Increment: 2^(-52).

//     2.String:
//         Represents a sequence of characters.
//         No specific range limit, but practical limits depend on memory and system resources.

//     3.Boolean:
//         Represents true or false.
//         Only two possible values: true and false.

//     4.Undefined:
//         Represents a variable that has been declared but hasn't been assigned a value.
//         It has only one possible value: undefined.

//     5.Null:
//         Represents the intentional absence of any object or value.
//         It has only one possible value: null.

//     6.Symbol (ES6):
//         Represents a unique and immutable value.
//         No specific range limit.

//     7.BigInt (ES11):
//         Represents large integers that cannot be represented by the Number type.
//         The range is practically unlimited and depends on available memory.