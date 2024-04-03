// If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.

aveSpd(18, 20, 60); //➞ 30
aveSpd(30, 10, 30); //➞ 15
aveSpd(30, 8, 24); //➞ 12

function aveSpd(upTime, upRate, downRate) {
  upTime /= 60;
  let upDistance = upTime * upRate;
  let downTime = upDistance / downRate;
  let totalTime = upTime + downTime;
  let average = Math.round((upDistance + upDistance) / totalTime);
  console.log(average);
  return average;
}
