// Text Analyzer:

// Write a JavaScript program that analyzes a given text and provides the following information:

// Number of words: Count the total number of words in the text.
// Longest word: Find the longest word present in the text.
// Word frequency: For each unique word, count the number of times it appears in the text.
// Bonus:

// Ignore punctuation marks (",", ".", "?" etc.) when counting words.
// Convert all words to lowercase before processing for case-insensitive analysis.
// This program involves working with strings, loops, conditional statements, and potentially objects (for word frequency). You can solve it using built-in JavaScript string methods and array manipulation techniques.

// Here are some tips to get you started:

// Split the text into an array of words using the split() method.
// Use a loop to iterate through the words array.
// For each word, track the word count and update the longest word if necessary.
// Consider using an object to store word frequencies (word as key, count as value).
// This is a good exercise to practice core JavaScript functionalities and can be extended further based on your interests. You can add features like displaying the top N most frequent words or excluding stop words (common words like "the", "a", "an").

// ***************************************SOLUTION********************************************************

var text =
  "Remember, these are just and starting point. You point find many and practical JavaScript find and exercises online find in coding challenge websites.";

function removePunctuation(text) {
  const arr = text.split(/[.,!?"\s-]/g);
  return arr;
}

const textArray = removePunctuation(text).filter((ele) => {
  if (ele !== "") {
    return ele;
  }
});

const totalNoOfWords = textArray.length;
console.log(`Total number of words in text: ${totalNoOfWords}`);

let longestWord = "";
let arr = [];
let wordCounts = {};

textArray.forEach((ele) => {
  if (ele.length > longestWord.length) {
    longestWord = ele;
  }
  if (!arr.includes(ele)) {
    arr.push(ele);
    wordCounts[ele] = 1;
  } else {
    wordCounts[ele]++;
  }
});

console.log(`Longest Word in an array: ${longestWord}`);
console.log(`Total unique words: ${arr.length}`);

// console.log(wordCounts);
for (let key in wordCounts) {
  console.log(`${key} : ${wordCounts[key]}`);
}
