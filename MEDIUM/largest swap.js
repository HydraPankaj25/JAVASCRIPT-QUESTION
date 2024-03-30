// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

// Examples
// largestSwap(14) ➞ false

// largestSwap(53) ➞ true

// largestSwap(99) ➞ true

//*********************************SOLUTION************************ */

function largestSwap(num) {
  if (typeof num !== "number") {
    return false;
  } else {
    let newNum = parseInt(num.toString().split("").reverse().join(""));
    return newNum <= num ? true : false;
  }
}

console.log(largestSwap(14)); //➞ false

console.log(largestSwap(53)); //➞ true

console.log(largestSwap(99)); //➞ true
