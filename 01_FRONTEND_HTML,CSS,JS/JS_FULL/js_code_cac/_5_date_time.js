// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
console.log(myDate.toLocaleDateString())

// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate1 = new Date("01-14-2023")
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);//give in milli seconds as output
console.log(myCreatedDate.getTime());//give in milli seconds as output
console.log(Math.floor(Date.now()/1000));//give in milli seconds as output

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//month starts from 0 -1 -2 -3 -----11 like that
console.log(newDate.getDay());//week day count starts from 1 ,2 3,----7

console.log(`${newDate.getDay()} and the time `)

newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newDate);