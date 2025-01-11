function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2
//we here added a prop 

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

//fucntion is fucntion but we can us eit as object 
// in js evrerthing is obejct adn have prototypical behaviour

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
//we just added this prop to that prototype of createUser----to get these chanegs when we use this fucntion we should use new keyword 
//and there this is conetxt of createUserfucntion there it adds 

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
// tea.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/