// A ship has to transport cargo from one place to another, while picking up cargo along the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays, create a function that returns true if each weight of cargo can fit in one hold, and false if it can't.

// "S" means 50 cargo space.
// "M" means 100 cargo space.
// "L" means 200 cargo space.
// Examples
willFit(["M", "L", "L", "M"], [56, 62, 84, 90]); //➞ true

willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]); //➞ false

willFit(["L", "L", "M"], [56, 62, 84, 90]); //➞ true

// THIS IS ONE APPROCH OF THINKING

// function willFit(arr1, arr2) {
//   let s = 0;
//   let m = 0;
//   let l = 0;
//   arr1.forEach((element, ind) => {
//     if (arr1[ind] == "S") {
//       s += arr2[ind];
//     } else if (arr1[ind] == "M") {
//       m += arr2[ind];
//     } else {
//       l += arr2[ind];
//     }
//   });
//   console.log(s + " " + m + " " + l);

//   if (s > 50 || m > 100 || l > 100) {
//     console.log(false);
//     return false;
//   }
//   console.log(true);
//   return true;
// }

//ANOTHER APPROACH OF THINKING
function willFit(holds, cargos) {
  const holdCapacity = {
    S: 50,
    M: 100,
    L: 200,
  };
  for (let i = 0; i < holds.length; i++) {
    const cargoWeight = cargos[i];
    const holdSize = holds[i];

    if (cargoWeight > holdCapacity[holdSize]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}
