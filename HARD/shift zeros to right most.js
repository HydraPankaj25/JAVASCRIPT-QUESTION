// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

// Examples
zeroesToEnd([1, 2, 0, 0, 4, 0, 5]); //➞ [1, 2, 4, 5, 0, 0, 0]

// zeroesToEnd([0, 0, 2, 0, 5]); //➞ [2, 5, 0, 0, 0]

// zeroesToEnd([4, 4, 5]); //➞ [4, 4, 5]

// zeroesToEnd([0, 0]); //➞ [0, 0]

function zeroesToEnd(arr) {
  let nonZeroIndex = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is non-zero
    if (arr[i] !== 0) {
      // Swap it with the leftmost zero element
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      nonZeroIndex++;
    }
  }
  console.log(arr);
}
