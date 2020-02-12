"use strict";

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */

// Your code:

const total = (numArray) => {
  const sum = numArray.reduce((a, b) => a + b);

  return sum;
};


// const total = (numArray, sum) => {
//   numArray = [];
//   sum = 0;
//   for (var i = 0; i < numArray.length; i++) {
//     sum += numArray[i];
//   }
// };

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof total, "function");
assert.strictEqual(total.length, 1);
assert.deepStrictEqual(total([1, 1, 1]), 3);
assert.deepStrictEqual(total([10, 10, 10]), 30);
assert.deepStrictEqual(total([24, -10, 10, 0, 0, 100]), 124);
// End of tests */
