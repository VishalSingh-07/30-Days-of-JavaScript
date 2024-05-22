/*
Reduce: 
The reduce() method reduces an array of values down to just one 
value. To get the output value, it runs a reducer function 
on each element of the array.
*/

// Syntax For Filter
// arr.reduce(total, currentValue,currentIndex,arr)

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(addNum);

// where a: total and b: currentValue
function addNum(a, b) {
  console.log("total: ", a);
  console.log("CurrentValue: ", b);

  console.log();
  return a + b;
}

console.log("Sum: ", sum);
