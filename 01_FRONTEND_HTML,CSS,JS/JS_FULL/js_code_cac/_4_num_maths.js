const score = 400
console.log(score);

const he = new Number('a');
console.log(he)

const balance = new Number(100)
console.log(typeof balance)
console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//precisions areas used more like to get 100.00,101.00--depends on our need

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//count fro non decimal, not from decimal point

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//for an start and end known kind off like 10 -20 we need that type 
// it will give numbers only in blw 10 and 20