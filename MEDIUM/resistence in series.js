// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// Examples
// seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"

// seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"

// seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"
// Notes
// All inputs will be valid.
// Notice the singular ohm for values <= 1. *********

//*******************************************SOLUTION******************************** */

function seriesResistance(arr) {
  let res = 0;
  arr.forEach((ele) => {
    if (typeof ele == "number") {
      res += ele;
    } else {
      console.log("Please pass only numeric fields");
      return false;
    }
  });
  if (res <= 1.0) {
    console.log(res + " ohm");
    return res + " ohm";
  } else {
    console.log(res + " ohms");
    return res + " ohms";
  }
}

// Example usage
seriesResistance([1, 2, 3]); // This should print the result

seriesResistance([1, 5, 6, 3]); // ➞ "15 ohms"

seriesResistance([16, 3.5, 6]); //➞ "25.5 ohms"

seriesResistance([0.5, 0.5]); // ➞ "1.0 ohm"
