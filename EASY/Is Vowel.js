// Is Vowel: Write a function called isVowel that takes a character as an argument and returns true if it's a vowel ('a', 'e', 'i', 'o', 'u') and false otherwise.

// *****************************************SOLUTIONI*****************************************

let arr = ["a", "e", "i", "o", "u"];
const isVowel = (char) => {
  if (arr.includes(char.toLowerCase())) {
    return true;
  } else return false;
};

console.log(isVowel("A"));
