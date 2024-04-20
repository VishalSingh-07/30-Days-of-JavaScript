/*
Filter:
It is used to create a new array that includes only the 
elements from an existing array that pass a specified condition.
*/

// Syntax For Filter
// array.filter(function(currentValue,index,arr))

const ages = [19, 12, 23, 21, 5];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(ages);
console.log(result);
