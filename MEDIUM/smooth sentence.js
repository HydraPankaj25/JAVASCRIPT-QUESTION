isSmooth("Marta appreciated deep perpendicular right trapezoids"); //➞ true
isSmooth("Someone is outside the doorway"); //➞ false
isSmooth("She eats super righteously"); //➞ true
isSmooth("");

function isSmooth(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i + 1].charAt(0).toLowerCase() !==
      arr[i].charAt(arr[i].length - 1).toLowerCase()
    ) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
}
