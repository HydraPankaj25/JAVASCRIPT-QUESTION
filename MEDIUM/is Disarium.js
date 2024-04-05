isDisarium(75); //➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135); //➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(544); //➞ false

isDisarium(518); //➞ true

isDisarium(8); //➞ true

isDisarium(466); //➞ false

function isDisarium(num) {
  let strNum = num + "";
  let sum = 0;
  strNum
    .split("")
    .map((ele, ind) => {
      sum += parseInt(ele) ** (ind + 1);
    })
    .join("");
  console.log(sum === num ? true : false);
  return sum === num ? true : false;
}
