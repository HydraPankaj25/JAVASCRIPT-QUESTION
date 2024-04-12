multTable(2);
//  ➞ [
//     [1, 2],
//     [2, 4]
//   ]

multTable(3);
//    ➞ [
//     [1, 2, 3],
//     [2, 4, 6],
//     [3, 6, 9]
//   ]

multTable(5);
//    ➞ [
//     [1, 2, 3, 4, 5],
//     [2, 4, 6, 8, 10],
//     [3, 6, 9, 12, 15],
//     [4, 8, 12, 16, 20],
//     [5, 10, 15, 20, 25]
//   ]

function multTable(n) {
  let mulTbl = [];
  for (i = 1; i <= 10; i++) {
    let rowArr = [];
    for (j = 1; j <= n; j++) {
      rowArr.push(j * i);
    }
    mulTbl.push(rowArr);
  }

  console.log(mulTbl);
  return multTable;
}
