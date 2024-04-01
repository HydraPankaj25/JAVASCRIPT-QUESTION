console.log(countTrue([true, false, false, true, false])); //➞ 2
console.log(countTrue([false, false, false, false])); //➞ 0
console.log(countTrue([])); //➞ 0

function countTrue(arr) {
  return arr.reduce((TotalVal, val) => {
    if (val) {
      return TotalVal + 1;
    } else {
      return TotalVal;
    }
  }, 0);
}
