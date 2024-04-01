console.log(leftDigit("TrAdE2W1n95!")); //➞ 2

console.log(leftDigit("V3r1ta$")); //➞ 3

console.log(leftDigit("U//DertHe1nflu3nC3")); //➞ 1

console.log(leftDigit("J@v@5cR1PT")); //➞ 5

function leftDigit(text) {
  const pattern = /[0-9]/;
  return text.match(pattern)[0];
}
