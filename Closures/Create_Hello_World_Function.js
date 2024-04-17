/*
2667. Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".


Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:
- 0 <= args.length <= 10
*/

/**
 * @return {Function}
 */

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// OR
function createHelloWorld() {
  function f() {
    return "Hello World";
  }
  return f;
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

/*
1. Question link -- https://leetcode.com/problems/create-hello-world-function/

2. Solution link -- https://leetcode.com/problems/create-hello-world-function/solutions/5037843/best-javascript-solution-with-explanation
*/
