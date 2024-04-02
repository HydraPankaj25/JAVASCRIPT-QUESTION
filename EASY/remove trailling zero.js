console.log(removeLeadingTrailing("230.000")); //➞ "230"

console.log(removeLeadingTrailing("00402")); //➞ "402"

console.log(removeLeadingTrailing("03.1400")); //➞ "3.14"

console.log(removeLeadingTrailing("00.0")); //➞ "30"

function removeLeadingTrailing(numText) {
  return parseFloat(numText);
}
