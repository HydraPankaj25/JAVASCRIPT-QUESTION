// Write a function that counts how many concentric layers a rug has.

// Examples
countLayers(["AAAA", "ABBA", "AAAA"]); //➞ 2

countLayers(["AAAAAAAAA", "ABBBBBBBA", "ABBAAABBA", "ABBBBBBBA", "AAAAAAAAA"]); //➞ 3

countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA",
]); //➞ 5

function countLayers(rug) {
  let layers = 0;
  let rows = rug.length;
  let cols = rug[0].length;

  function isRowSame(row1, row2) {
    for (let i = 0; i < cols; i++) {
      if (row1[i] !== row2[i]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < Math.round(rows / 2); i++) {
    if (isRowSame(rug[i], rug[rows - i - 1])) {
      layers++;
    } else {
      break;
    }
  }

  console.log(layers);
  return layers;
}
