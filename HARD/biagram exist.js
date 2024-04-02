// You are given an input array of bigrams, and an array of words.

// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]); //➞ true

canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]); //➞ false
//# "cu" does not exist in any of the words.

canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]); //➞ true

canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]); //➞ false

function canFind(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let check = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].includes(arr1[i])) {
        check = true;
        continue;
      }
    }
    if (!check) {
      console.log(`false "${arr1[i]}":-does not exist in any of the words`);
      return false;
    }
  }
  console.log("true");
  return true;
}
