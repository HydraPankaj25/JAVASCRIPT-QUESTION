findBrokenKeys("happy birthday", "hawwy birthday"); //➞ ["p"]

findBrokenKeys("starry night", "starrq light"); //➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5"); //➞ ["b", "e", "v", "n"]

function findBrokenKeys(text1, text2) {
  let missingWord = [];
  let arr1 = text1.split(" ");
  let arr2 = text2.split(" ");
  for (i = 0; i < arr1.length; i++) {
    let a1 = arr1[i].split("");
    let a2 = arr2[i].split("");
    for (j = 0; j < arr1[i].length; j++) {
      if (a1[j] !== a2[j]) {
        if (!missingWord.includes(a1[j])) {
          missingWord.push(a1[j]);
        }
      }
    }
  }

  console.log(missingWord);
  return missingWord;
}
