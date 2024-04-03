colorPatternTimes(["Blue"]); //➞ 2

colorPatternTimes(["Red", "Yellow", "Green", "Blue"]); //➞ 11

colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]); //➞ 13

function colorPatternTimes(arr) {
  let switchTime = -1; //for first pencile the switching time will not be counted
  let time = 0;
  let prevPencil;
  arr.forEach((element) => {
    if (prevPencil !== element) {
      switchTime++;
      time += 2;
      prevPencil = element;
    } else {
      time += 2;
    }
  });

  console.log(switchTime + time);
  return switchTime + time;
}
