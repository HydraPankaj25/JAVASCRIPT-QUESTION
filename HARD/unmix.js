unmix("123456"); //➞ "214365"

unmix("hTsii  s aimex dpus rtni.g"); //➞ "This is a mixed up string."

unmix("badce"); //➞ "abcde"

function unmix(str) {
  let unmixStr = "";
  for (let i = 0; i < str.length - 1; i += 2) {
    unmixStr += str[i + 1] + str[i];
  }
  if (str.length % 2 !== 0) {
    unmixStr += str[str.length - 1];
  }
  console.log(unmixStr);
  return unmixStr;
}
