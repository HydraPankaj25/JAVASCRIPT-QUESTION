// Create a function that returns an array of strings sorted by length in ascending order.

// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

function sortByLength(arr) {
  return arr.sort((a, b) => {
    return a.length - b.length;
  });
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

function sortByNumber(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr;
}

console.log(sortByNumber([5,46,2,3,9,1]));