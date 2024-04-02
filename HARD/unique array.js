console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
console.log(isPositiveDominant([5, 99, 832, -3, -4]));
console.log(isPositiveDominant([5, 0, 5]));
console.log(isPositiveDominant([0, -1, -4, -1]));

function isPositiveDominant(arr) {
  return [... new Set(arr)];
}
