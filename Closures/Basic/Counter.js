/*
Closure means that an inner function always has access to the variable of its outer function, 
even after the outer function has returned.
*/
// Function within Function

function fun() {
  var a = 6;
  function f(b) {
    var sum = a + b;
    return sum;
  }
  a = 5;
  return f;
}

var numsum = fun();
console.log(numsum(2)); // 7

// ###################################################3

// OR

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
