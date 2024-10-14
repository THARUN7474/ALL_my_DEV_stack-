function SetUsername(username){
    //complex DB calls-code will be in practical cases 
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    //here to get conext of this functoion for setusername fucntions as we need there undergoing cahnges to reflect hre
    // as in callstacks as soon as funciton work over  it simply dispears so their cintext also gayab
    //so we pass this conext to it ---so chanegs there will be reflected here  using call method 
   
    this.email = email
    this.password = password
}

function createUser1(username, email, password){
    SetUsername( username)
    //here to get conext of this functoion for setusername fucntions as we need there undergoing cahnges to reflect hre
    // as in callstacks as soon as funciton work over  it simply dispears so their cintext also gayab
    //so we pass this conext to it ---so chanegs there will be reflected here  using call method 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

const chai1 = new createUser1("chai", "chai@fb.com", "123")
console.log(chai1);
//see the difference 


const chai12 =  createUser1("chai", "chai@fb.com", "123")
console.log(chai12);
//here without new word we wont get any info at all ---undefined 
