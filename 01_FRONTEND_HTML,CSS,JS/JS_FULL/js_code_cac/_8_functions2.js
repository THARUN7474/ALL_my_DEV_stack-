// Function Declaration
// Function Expression
// Arrow Function
// Immediately Invoked Function Expression (IIFE)
// Constructor Function
// Generator Function
// Method Function
// Anonymous Function
// Named Function Expression
// Callback Function
// Higher-Order Function

// 1. Function Declaration
function functionDeclaration(param1, param2) {
  console.log("Function Declaration:", param1, param2);
}

// 2. Function Expression
const functionExpression = function (param1, param2) {
  console.log("Function Expression:", param1, param2);
};

// 3. Arrow Function
const arrowFunction = (param1, param2) => {
  console.log("Arrow Function:", param1, param2);
};

// 4. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed");
})();

// 5. Constructor Function
function ConstructorFunction(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
}

const instance = new ConstructorFunction("value1", "value2");
console.log("Constructor Function:", instance.param1, instance.param2);

// 6. Generator Function
function* generatorFunction() {
  yield "first yield";
  yield "second yield";
}

const generator = generatorFunction();
console.log("Generator Function:", generator.next().value);
console.log("Generator Function:", generator.next().value);

// 7. Method Function
const obj = {
  methodName: function (param1, param2) {
    console.log("Method Function:", param1, param2);
  },
};

obj.methodName("value1", "value2");

// 8. Anonymous Function
const anonymousFunction = function (param1, param2) {
  console.log("Anonymous Function:", param1, param2);
};

anonymousFunction("value1", "value2");

// 9. Named Function Expression
const namedFunctionExpression = function namedFunction(param1, param2) {
  console.log("Named Function Expression:", param1, param2);
};

namedFunctionExpression("value1", "value2");

// 10. Callback Function
function callbackFunction(callback) {
  console.log("Callback Function: Before Callback");
  callback("value1", "value2");
  console.log("Callback Function: After Callback");
}

callbackFunction(function (param1, param2) {
  console.log("Inside Callback Function:", param1, param2);
});

// 11. Higher-Order Function
function higherOrderFunction(callback) {
  console.log("Higher-Order Function: Before Callback");
  const result = callback("value1", "value2");
  console.log("Higher-Order Function: After Callback, Result:", result);
}

higherOrderFunction(function (param1, param2) {
  console.log("Inside Higher-Order Function Callback:", param1, param2);
  return "Callback Result";
});
