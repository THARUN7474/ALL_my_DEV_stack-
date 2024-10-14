class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  set password(pass) {
    this._password = pass;
  }

  get password() {
    return `${this._password}tharun`;
  } //here we use actual but for showing we can hide or add some kind off security too
}

//wwe might get maximum call stack size exceeded; coz of race b/w set and contructor to set the value of password
//so we use the different prop --or naming lke here _password
const tharun = new user("tharun@123.com", "123");

console.log(tharun);

console.log(tharun.email);

console.log(tharun.password);



const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)//creating a new instance of User---using factory function 
console.log(tea.email);



//old way of settingup --- before working when there is no classes available
//fucntion is fucntion too and also oject too we can use it as object too --even prototypic all that
function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);