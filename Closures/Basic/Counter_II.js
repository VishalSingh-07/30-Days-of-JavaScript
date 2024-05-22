// Object is a collection of key value pairs

// Object Literals

var obj = {
  name: "Vishal",
  age: 20,
  greet() {
    return "Good Morning";
  },
};
console.log(obj); // { name: 'Vishal', age: 20, greet: [Function: greet] }
console.log(obj.greet()); // Good Morning

// Objects within function
// we can write objects within function in different ways
console.log("Method 1: ");
function calc(val) {
  const obj = {
    add(val1) {
      var a = val + val1;
      return a;
    },
    sub(val1) {
      var a = val - val1;
      return a;
    },
  };
  return obj;
}

console.log(calc(5).add(2)); // 7
console.log(calc(5).sub(2)); // 3

console.log("Method 2: ");
function calc2(val) {
  return (obj = {
    add(val1) {
      var a = val + val1;
      return a;
    },
    sub(val1) {
      var a = val - val1;
      return a;
    },
  });
}

console.log(calc2(5).add(2)); // 7
console.log(calc2(5).sub(2)); // 3

console.log("Method 3: ");
function calc3(val) {
  return {
    add(val1) {
      var a = val + val1;
      return a;
    },
    sub(val1) {
      var a = val - val1;
      return a;
    },
  };
}

console.log(calc3(5).add(2)); // 7
console.log(calc3(5).sub(2)); // 3

console.log("Method 4: ");
function calc4(val) {
  return {
    add: function (val1) {
      var a = val + val1;
      return a;
    },
    sub: function (val1) {
      var a = val - val1;
      return a;
    },
  };
}

console.log(calc4(5).add(2)); // 7
console.log(calc4(5).sub(2)); // 3

console.log("Method 5: ");
function calc5(val) {
  function add(val1) {
    var a = val + val1;
    return a;
  }
  function sub(val1) {
    var a = val - val1;
    return a;
  }
  return { add, sub };
}

console.log(calc5(5).add(2)); // 7
console.log(calc5(5).sub(2)); // 3
