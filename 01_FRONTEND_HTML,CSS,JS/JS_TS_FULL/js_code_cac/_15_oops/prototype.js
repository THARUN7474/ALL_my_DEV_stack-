// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        //here this is current conext of heropower---object here 
    }
}

Object.prototype.tharun = function(){
    console.log(`tharun is present in all objects`);
}
//here we are adding context of tharun to object ---means its prototype , even anything liek array which is like a child of object --as protoype behvairoul---it gets this too 

Array.prototype.heytharun = function(){
    console.log(`tharun says hello`);
}//avalible only to this array prototype

heroPower.tharun()
myHeros.tharun()
myHeros.heytharun()
// heroPower.heytharun()

// inheritance of prototypes

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
//above all are examples of old syntax 

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


// this is all behid the seeen working of classes too 
///along with concept of new keyword adn this ---context and call , bind all tehse are impt ones to undersatnd behid scence working and frameworks