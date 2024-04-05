reversedBinaryInteger(10); //➞ 5
// 10 = 1010 -> 0101 = 5

reversedBinaryInteger(12); //➞ 3
// 12 = 1100 -> 0011 = 3

reversedBinaryInteger(25); //➞ 19
// 25 = 11001 -> 10011 = 19

reversedBinaryInteger(45); //➞ 45
// 45 = 101101 -> 101101 = 45

reversedBinaryInteger(122);

function reversedBinaryInteger(num) {
  let numStr = num.toString();
  let newBinaryNum = numToBinary(num);
  let newNum = binaryToNum(newBinaryNum.split("").reverse().join(""));
  console.log(newNum);
  return newNum;
}

function binaryToNum(numStr) {
  let len = numStr.length;
  let num = 0;
  for (i = 0; i < len; i++) {
    num += parseInt(numStr[i]) * Math.pow(2, len - i - 1);
  }
  return num;
}
function numToBinary(num) {
  let i = 1024;
  let binary = "";
  while (i >= 1) {
    if (i <= num) {
      binary += "1";
      num -= i;
    } else if (binary.includes("1")) {
      binary += "0";
    }
    i /= 2;
  }
  return binary;
}
