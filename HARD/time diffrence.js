// Time t1 will always be the starting time and t2, the ending time.
// Return the string "No time has passed." if t1 is equal to t2.

hoursPassed("3:00 AM", "9:00 AM") //➞ "6 hours"

hoursPassed("2:00 PM", "4:00 PM") //➞ "2 hours"

hoursPassed("1:00 AM", "3:00 PM") //➞ "14 hours"

function hoursPassed(time1, time2) {
    const [hr1, period1] = time1.split(" ");
    const [hr2, period2] = time2.split(" ");
  
    let hours1 = parseInt(hr1);
    let hours2 = parseInt(hr2);

    if (period1 === "PM" && hours1 < 12) {
      hours1 += 12;
    }
    if (period2 === "PM" && hours2 < 12) {
      hours2 += 12;
    }
  
    const hoursDifference = Math.abs(hours2 - hours1);
    console.log(`${hoursDifference} hours`);
    return `${hoursDifference} hours`;
  }