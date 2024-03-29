// Create a function that will take a HEX number and returns the binary equivalent (as a string).

// Examples
// toBinary(0xFF) ➞ "11111111"

// toBinary(0xAA) ➞ "10101010"

// toBinary(0xFA) ➞ "11111010"
// Notes
// The number will be always an 8-bit number.

function toBinary(num) {
  let binaryNum = "";
  let hex = {
    0: "0000",
    1: "0001",
    2: "0010",
    3: "0011",
    4: "0100",
    5: "0101",
    6: "0110",
    7: "0111",
    8: "1000",
    9: "1001",
    A: "1010",
    B: "1011",
    C: "1100",
    D: "1101",
    E: "1110",
    F: "1111",
  };
  for (let ele in num) {
    binaryNum += hex[ele.toUpper()];
  }
  console.log(binaryNum);
  return binaryNum;
}

toBinary(0xff); //➞ "11111111"

toBinary(0xaa); //➞ "10101010"

toBinary(0xfa); //➞ "11111010"
