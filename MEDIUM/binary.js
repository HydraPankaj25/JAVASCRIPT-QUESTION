function decimalToBinary(decimal) {
  let num = parseInt(decimal);

  if (isNaN(num)) {
    return "Invalid input";
  }

  let binary = "";

  for (let i = 256; i >= 1; i /= 2) {
    if (num >= i) {
      binary += "1";
      num = num - i;
    } else {
      binary += "0";
    }
  }

  const indexOfOne = binary.indexOf("1");

  if (indexOfOne === -1) {
    return binary;
  }
  return binary.slice(indexOfOne);
}

// Example usage:
console.log(decimalToBinary("170"));
console.log(decimalToBinary("16"));
