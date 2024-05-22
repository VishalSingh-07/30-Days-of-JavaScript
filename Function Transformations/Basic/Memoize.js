// Memoize
// A memoized function is a function that will never be called
// twice with the same inputs. Instead it will return a cached value.

// Memoization

function square(n) {
  return n * n;
}

function memoize(func) {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
}

console.time();
console.log(square(5)); // 25
console.timeEnd(); // default: 7.453ms [It is will vary system to system]


let res = memoize(square);


console.time();
console.log(res(5)); // 25
console.timeEnd(); // default: 0.39ms  [It is will vary system to system]

console.time();
console.log(res(5)); // 25 
console.timeEnd(); // default: 0.067ms [It is will vary system to system]
 
// The first call to res(5) takes longer (0.39ms) compared to the 
// second call (0.067ms). This difference is due to memoization, 
// which reduces the time required for subsequent calls with the same argument.