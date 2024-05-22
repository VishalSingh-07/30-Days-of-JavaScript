// Different Types of Array

// Constructor Array
var arr = new Array(2, 3, 4, 5);
console.log(arr); // [2,3,4,5]

var arr1 = new Array(3);
arr1[0] = 2;
arr1[1] = 3;
arr1[2] = 4;
console.log(arr1); // [2,3,4]

// Array Literal
let arr2 = [1, 2, 3];
console.log(arr2);

// Object in Array

let arrobj = [
  {
    fname: "Vishal",
    age: 20,
  },
  {
    fname: "Raj",
    age: 21,
  },
];

console.log(arrobj);

// Iteration in array
var num = [1, 2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

/*
Map:
- map() creates a new array from calling a function for every array element.
- map() does not execute the function for empty elements.
- map() does not change the original array.
*/

// Syntax for map
// arr.map(function(currentValue,index,arr))

var num1 = [1, 2, 3, 4, 5];

var a = num1.map(fun);

function fun(n) {
  return n + 1;
}

console.log(a);

// OR

var a = num1.map((n) => {
  return n + 1;
});

console.log(a);
