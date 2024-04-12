// Create a function that, given a string with at least three characters, returns an array of its:

// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.
// Examples
allAboutStrings("LASA"); //➞ [4, "L", "A", "AS", "@ index 3"]

allAboutStrings("Computer"); //➞ [8, "C", "r", "pu", "not found"]

allAboutStrings("Science"); //➞ [7, "S", "e", "e", "@ index 5"]

function allAboutStrings(str) {
  let arr = [];
  arr.push(str.length);
  arr.push(str.charAt(0));
  arr.push(str.charAt(str.length - 1));
  if (str.length % 2 == 1) {
    arr.push(str.charAt(str.length / 2));
  } else {
    let duoChar = "";
    duoChar += str.charAt(str.length / 2 - 1);
    duoChar += str.charAt(str.length / 2);
    arr.push(duoChar);
  }
  let res = str.indexOf(str[1], 2);
  arr.push(res < 0 ? "not found" : `@ index ${res}`);
  console.log(arr);
}
