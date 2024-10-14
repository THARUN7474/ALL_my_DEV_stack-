const accountId = 144553
let accountEmail = "tharun@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;//not declared so it will be undefined


//learn through investigation
// accountId = 2 // not allowed as it is constant 
// use const for ---things are universal constants

console.log(accountId);
accountEmail = "tb@tb.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// console.log(accountId);

// /*
// Prefer not to use var--scope === {   } thses braces
// because of issue in block scope and functional scope
// */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//for table formate of those given variabes