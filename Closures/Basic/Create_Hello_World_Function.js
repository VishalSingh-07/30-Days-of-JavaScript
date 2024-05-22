// Print
console.log("30 Days of JavaScript");

// Different Types of Functions

// Normal Function --
console.log("Normal Function");
// a and b are parameters
function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(2, 4)); // 6

// Anonymous Function
console.log("Anonymous Function");
let a = function (a, b) {
  const sum = a + b;
  return sum;
};
console.log(a(2, 3)); // 5

// Immediate Invoke
console.log("Immediate Invoke");
let i = (function (a, b) {
  const sum = a + b;
  return sum;
})(2, 2);
console.log(i);

// Arrow Function
console.log("Arrow Function");
let arr = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(arr(2, 1)); // 5

/*
Closure means that an inner function always has access to the variable of its outer function, even after the outer function has returned.

OR

Closures are frequently employed to create private variables and methods, ensuring data encapsulation and preventing direct access from outside code.
*/

// Functions with Function
console.log("Closure --");
console.log("Sum: ");
console.log("Method 1: ");
function outerFunction1() {
  function innerFunction1(a, b) {
    const sum = a + b;
    return sum;
  }
  return innerFunction1;
}

var numsum1 = outerFunction1();
console.log(numsum1(2, 10));

console.log("Method 2: ");
function outerFunction2() {
  return function innerFunction2(a, b) {
    const sum = a + b;
    return sum;
  };
}

var numsum2 = outerFunction2();
console.log(numsum2(2, 10));

console.log("Method 3: ");
function outerFunction3() {
  return function (a, b) {
    const sum = a + b;
    return sum;
  };
}

var numsum2 = outerFunction3();
console.log(numsum2(2, 10));

console.log("Multiply: ");
function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}

const multiply3 = calculate(3); // closures
const multiply4 = calculate(4); // closures

console.log(multiply3); // returns calculate function definition

console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18

console.log(multiply4(2)); // 8
