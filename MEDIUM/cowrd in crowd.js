// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

//******************************************SOLUTION********************************* */

function detectWord(text) {
    if (typeof text == "string") {
      let pattern = /[a-z]/;
      let word = text.split("").filter((char) => {
        return pattern.test(char);
      });
      return word.join("");
    } else {
      console.log("Please enter a string");
      return false;
    }
  }

console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));