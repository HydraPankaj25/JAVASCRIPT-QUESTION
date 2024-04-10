wordedMath("One plus one"); //➞ "Two"

wordedMath("zero Plus one"); //➞ "One"

wordedMath("one minus one"); //➞ "Zero"

function wordedMath(str) {
  let numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
  };

  let strArr = str.split(" ");
  let operation = strArr[1].toLowerCase();

  if (operation === "plus" || operation === "minus") {
    let first = strArr[0].toLowerCase();
    let second = strArr[2].toLowerCase();

    if (numbers.hasOwnProperty(first) && numbers.hasOwnProperty(second)) {
      let result;
      if (operation === "plus") {
        result = numbers[first] + numbers[second];
      } else if (operation === "minus") {
        result = numbers[first] - numbers[second];
      }

      // Convert result back to word form
      let resultWord = '';
      if (result < 0) {
        resultWord = 'negative ';
        result = -result;
      }
      //this will first extract the keys array and then find the value 
      resultWord += Object.keys(numbers).find(key => numbers[key] === result);

      console.log(resultWord);
    } else {
      console.log("Invalid input.");
    }
  } else {
    console.log("Operation not supported.");
  }
}

wordedMath("one plus one"); // Output: two
wordedMath("one minus two"); // Output: negative one
