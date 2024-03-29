// The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.


const str = "Breakfast at 09:00 in the room 123:456.";
const regex = /\b\d{2}:\d{2}\b/g; // \b is regular expression to check the starting and the ending with the word boundary  
const matches = str.match(regex);
console.log(matches);