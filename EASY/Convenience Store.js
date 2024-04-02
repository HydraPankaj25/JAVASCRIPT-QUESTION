function changeEnough(arr, val) {
  let total = arr[0] * 0.25 + arr[1] * 0.1 + arr[2] * 0.05 + arr[3] * 0.01;
  return total >= val;
}
console.log(changeEnough([2, 100, 0, 0], 14.11)); // ➞ false
console.log(changeEnough([0, 0, 20, 5], 0.75)); // ➞ true
console.log(changeEnough([30, 40, 20, 5], 12.55)); // ➞ true
console.log(changeEnough([10, 0, 0, 50], 3.85)); // ➞ false
console.log(changeEnough([1, 0, 5, 219], 19.99)); // ➞ false
