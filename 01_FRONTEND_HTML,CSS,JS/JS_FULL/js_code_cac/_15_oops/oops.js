const user = {
  username: "tharun",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  console.log(this);

  return this;
}


//without use of new keyword ---it overwrites---
const userOne = new User("tharun", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
console.log(userTwo);
console.log(this);
