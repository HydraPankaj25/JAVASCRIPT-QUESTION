// Write a function that calculates overtime and pay associated with overtime.

// Working 9 to 5: regular hours
// After 5pm is overtime
// Your function gets an array with 4 values:

// Start of working day, in decimal format, (24-hour day notation)
// End of working day. (Same format)
// Hourly rate
// Overtime multiplier
// Your function should spit out:

// $ + earned that day (rounded to the nearest hundreth)

overTime([9, 17, 30, 1.5]); //➞ "$240.00"

overTime([16, 18, 30, 1.8]); //➞ "$84.00"

overTime([13.25, 15, 30, 1.5]); //➞ "$52.50"

function overTime(arr) {
  let totalCost = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    if (i < 9 && i > 16) {
      totalCost += arr[2] * arr[3];
    } else {
      totalCost += arr[2];
    }
  }
  console.log(totalCost);
  console.log("$"+Math.round(totalCost * 100) / 100);
}
