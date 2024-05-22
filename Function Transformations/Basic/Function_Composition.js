// Function Composition
// Function composition is an approach where the result of one function is passed on to 
// the next function, which is passed to another until the final function is executed for the final result. 
// Function compositions can be composed of any number of functions.

// Traditional Approach
const double1 = x => x * 2
const square1 = x => x * x
// Tradition approach
var output1 = double1(2);
var output2 = square1(output1);
console.log(output2); // 16
// variant two
var output_final = square1(double1(2));
console.log(output_final); // 16


// Modern Approach
// function composition of any number of functions
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const double2 = x => x * 2
const square2 = x => x * x

// function composition
var output_final = compose(square2, double2)(2);
console.log(output_final); // 16


function add(a, b) {
  return a + b;
}

function add1(args) {
  return args[0] + args[1];
}

function mulTwo(val) {
  return val * 2;
}
function square(val) {
  return val * val;
}

function addsquare(a, b) {
  return square(add(a, b));
}

const result = add(2, 3);
console.log(square(result)); // 25

console.log(addsquare(3, 4)); // 49

console.log(square(add(3, 9))); // 144

// General Function
function compose(f1, f2) {
  return function (a, b) {
    return f2(f1(a, b));
  };
}

// Modern JavaScript [Arrow Function]
const composeTwo = (f1, f2) => (a, b) => f2(f1(a, b));

const result1 = compose(add, mulTwo);
console.log(result1(2, 3)); // 10

const result2 = composeTwo(add, mulTwo);
console.log(result2(2, 3)); // 10

const composeThree = (f1, f2, f3) => (a, b) => f3(f2(f1(a, b)));

const result3 = composeThree(add, mulTwo, square);
console.log(result3(2, 3)); // 100

console.log(square(mulTwo(add(2, 3)))); // 100

// For ultimate Function

function composeAll(...funs) {
  return function (...values) {
    return funs.reduce((val, fn) => fn(val), values);
  };
}

const result4 = composeAll(add1, mulTwo, square);
console.log(result4(4, 6)); // 400

// Modern JavaScript [Arrow Function]
const composeAll1 =
  (...funs) =>
  (...values) =>
    funs.reduce((val, fn) => fn(val), values);

const result5 = composeAll1(add1, mulTwo, square);
console.log(result5(4, 6)); // 400
