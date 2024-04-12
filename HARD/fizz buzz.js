// Your challenge is to loop through the numbers 1 to 100.

// If a number is a multiple of 3 then output FIZZ instead of the number.

// If a number is a multiple of 5 then output BUZZ instead of the number.

// If a number is a multiple of both 3 and 5 then output FIZZ BUZZ instead of the number.

// Your output will look something like this:

// 1 2 FIZZ 4 BUZZ FIZZ 7 8 FIZZ BUZZ 11 FIZZ 13 14 FIZZ BUZZ 16 17
// FIZZ 19 BUZZ ...etc

function fizBuzz() {
  let arr = [];
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FIZZ BUZZ");
    } else if (i % 3 == 0) {
      arr.push("FIZZ");
    } else if (i % 5 == 0) {
      arr.push("BUZZ");
    } else {
      arr.push(i);
    }
  }
  console.log(arr.join(" "));
}

fizBuzz();
