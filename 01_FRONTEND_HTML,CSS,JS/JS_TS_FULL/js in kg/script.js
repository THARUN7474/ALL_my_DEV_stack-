
// alert("hello i am back i will complete today")
// console.log("jhello i print in console ")
// console.log(2+2);
// console.lof(eval("13+23"))
// console.clear()


// varibales

// let vartype1 = "me"
// var vartype2 = "him"
// const vartype3 = "hello"

// let summary = `your order details are== ${1000+2000}`
// var a = 20;
// var b = 230;
// var c = `the values is = ${math.round(a*b)}`;

// console.log(vartype1+vartype2+vartype3)
// console.log(summary)
var a = 0;
var cardquantity = document.querySelector('#addedquantity')
cardquantity.innerText =`you added ${a} bags`



console.log("****************************************************************")



let age = 70;
let gender = 'female'; // male and female
let finalDiscount;

if (age <= 5) {
  finalDiscount = 100;
} else if (gender === 'female' || age <= 8) {
  finalDiscount = 50;
} else if (age >= 65) {
  finalDiscount = 30;
} else {
  finalDiscount = 0;
}

console.log(`Your final discount is ${finalDiscount}`)