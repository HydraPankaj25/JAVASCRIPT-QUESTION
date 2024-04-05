orderedMatrix(5, 5);
// ➞ [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
//   ]

orderedMatrix(1, 1); //➞ [[1]]

orderedMatrix(1, 5); //➞ [[1, 2, 3, 4, 5]]

function orderedMatrix(a, b) {
  if (a <= 0 || b <= 0) {
    console.log("a or b cannot be less than zero or equal to zero");
    return false;
  } else {
    let arr = [];
    let val = 1;
    for (i = 0; i < a; i++) {
      arr.push([]);
      for (j = 0; j < b; j++) {
        arr[i][j] = val;
        val++;
      }
    }
    console.log(arr);
    return arr;
  }
}
