function sortIt(arr) {
  arr.sort((a, b) => {
    // if (Array.isArray(a) && Array.isArray(b)) {
    //   return a[0] - b[0];
    // } else if (Array.isArray(a)) {
    //   return -1;
    // } else if (Array.isArray(b)) {
    //   return 1;
    // } else {
    //   retur
    console.log(a + "  " + b);
  });
  return arr;
}

// // Test cases
// console.log(sortIt([4, 1, 3])); // ➞ [1, 3, 4]
// console.log(sortIt([[4], [1], [3]])); // ➞ [[1], [3], [4]]
// console.log(sortIt([4, [1], 3])); // ➞ [[1], 3, 4]
// console.log(sortIt([[4], 1, [3]])); // ➞ [1, [3], [4]]
console.log(sortIt([[3], 4, [2], [5], 1, 6])); // ➞ [1, [2], [3], 4, [5], 6]
