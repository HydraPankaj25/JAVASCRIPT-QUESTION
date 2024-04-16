// In this challenge, you are given an array and in turn, you must obtain a smaller array, following three steps:

// Split the array into two parts of equal length. If the given array has an odd length, then you have to eliminate the number in the middle of the array for obtaining two equal parts.
// Sum each number of the first part with each number of the reversed second part, obtaining a new single array having the same length of the previous two.
// Divide by two each number in the final array.

antipodesAverage([1, 2, 3, 4]); //➞ [2.5, 2.5]
// Left part = [1, 2]
// Reversed right part = [4, 3]
// Array resulting from the sum of each pair = [5, 5]
// Each number is divided by two = [2.5, 2.5]

antipodesAverage([1, 2, 3, 4, 5]); //➞ [3, 3]
// The length of array is odd, number 3 (in the middle) is eliminated
// Left = [1, 2]
// Reversed right = [5, 4]
// Sum = [6, 6]
// Division by two = [3, 3]

antipodesAverage([-1, -2]); //➞ [-1.5]
//  (-1 + -2) / 2 = [-1.5]

function antipodesAverage(arr) {
  let mid = arr.length / 2;
  let leftArr = arr.slice(0, mid);
  let rightArr;
  if (arr.length % 2 == 1) {
    rightArr = arr.slice(mid + 1).reverse();
  } else {
    rightArr = arr.slice(mid).reverse();
  }
  let sumArr = [];
  leftArr.map((ele, ind) => {
    sumArr.push(ele + rightArr[ind]);
  });
  let finalResultArr = sumArr.map((ele, ind) => {
    return ele / 2;
  });
  console.log(finalResultArr);
  return finalResultArr;
}
