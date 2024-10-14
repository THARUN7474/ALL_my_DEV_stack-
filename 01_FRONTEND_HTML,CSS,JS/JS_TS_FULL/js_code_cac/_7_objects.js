// In JavaScript, an object is a collection of key-value pairs where keys are strings (or symbols) and values can be of any data type.
//singleton

// Object.create()====constructer method

const hello = new Object({ name: "tha" });
hello.id = 1;
hello.iname = "udk";
console.log(hello);
console.log(typeof hello);

//object lioterals

const mysym1 = Symbol("key1");
const mysym2 = Symbol("key2");

const jsuser = {
  name: "tharun",
  age: 19,
  hero: true,
  mysym1: "hii", //here it is not using as symbol to use symbiol here do like next line
  [mysym2]: "key", //here it is not using as symbol to use symbiol here do like next line
  more: { clg: "nitap", top: true },
  man: "yes i am",
  "full name": "b tahrun",
}; //her name directly goes too "name"---by system

let person = {
  name: "John",
  age: 30,
  isEmployed: true,
  friends: ["me", "myself", "himself"],
  address: {
    city: "New York",
    country: "USA",
    FULLNAME: {
      firstname: "banda",
      lastnaem: "tharun",
    },
  },
};
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
console.log(person.hasOwnProperty('address'))//checks whether there or not
console.log(person.address.FULLNAME.firstname);
console.log(person.address?.FULLNAME.firstname); //if not exists what we need to do ...id else kind off -use more in api handling

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 3: "b" };

const obj3 = { obj1, obj2 };
console.log(obj3);
const obj4 = Object.assign(obj1, obj2);
console.log(obj4);
const obj5 = Object.assign(obj1, obj2, obj3);
console.log(obj5);
const obj6 = Object.assign({}, obj1, obj2, obj3);//target is {}  and other all  will be source here
console.log(obj6);
const obj7 = {...obj1, ...obj2}
console.log(obj7)




console.log("*********************************8888888");

console.log(jsuser.name);
console.log(jsuser["name"]);
console.log(jsuser.man);
console.log(jsuser["man"]);
console.log(jsuser["full name"]);
// console.log(jsuser.full name);///we cant do like this

console.log(jsuser["mysym1"]);
console.log(jsuser[mysym2]);

console.log(mysym2);
console.log(mysym1);

console.log(typeof jsuser["mysym1"]);
console.log(typeof jsuser[mysym2]);

console.log(typeof jsuser["age"]);

console.log(jsuser);
console.log(jsuser["age"]);
jsuser.age = "18";

console.log(jsuser["age"]);
console.log(typeof jsuser["age"]);

jsuser.greeting = function () {
  console.log("hero");
  console.log(jsuser + "hello");
  //   console.log( {jsuser }+ "hello");//same as above
};
jsuser.greeting3 = function () {
  console.log("hero");
  console.log(`hello bro!, ${this.name}`);
  //   console.log( jsuser + "hello");
  //   console.log( {jsuser }+ "hello");//same as above
};

console.log(jsuser.greeting); //we wil get undifined
console.log(typeof jsuser.greeting); //we wil get undifined
console.log(jsuser.greeting()); //method calling
console.log(typeof jsuser.greeting()); //method calling

console.log(jsuser.greeting3); //we wil get undifined
console.log(typeof jsuser.greeting3); //we wil get undifined
console.log(jsuser.greeting3()); //method calling
console.log(typeof jsuser.greeting3()); //method calling

console.log("***************************");
//to lock any object key value use freze

console.log(jsuser);
Object.freeze(jsuser); //by this we cant change values of key from this object her it is jsuser
jsuser.age = 18.4;

console.log(jsuser["age"]);
console.log(jsuser);

jsuser.greeting1 = function () {
  console.log(jsuser1);
};

console.log(jsuser.greeting);
console.log(jsuser.greeting1);



console.log("888888888888888888888888888888888888888888888888888888888888888888888");


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course//destructering--mror eused in react side--like instre
const {courseInstructor: instructor} = course//custom naming

console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]