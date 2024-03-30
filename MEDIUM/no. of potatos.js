// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

//****************************************************8SOLUTION************************* */

function potatoes(text) {
  let count = 0;
  for (let i = 0; i < text.length - "potato".length + 1; i++) {
    if (text.slice(i, i + "potato".length) === "potato") {
      count++;
    }
  }
  return count;
}

console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));
console.log(potatoes("potatopotato"));
console.log(potatoes("applepotato"));
console.log(potatoes("applepotatoapple"));
