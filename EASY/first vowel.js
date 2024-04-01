function firstVowel(text) {
  let pattern = /[aeiou]/gi;
  let val = text.indexOf(text.match(pattern)[0]);
  console.log(val);
  return val;
}

firstVowel("apple"); //➞ 0

firstVowel("hello"); //➞ 1

firstVowel("STRAWBERRY"); //➞ 3

firstVowel("pInEaPPLe"); //➞ 1
