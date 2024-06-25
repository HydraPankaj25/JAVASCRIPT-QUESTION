// Write a function generateFibonacci that generates the Fibonacci sequence up to a specified number of terms.

function generateFibonacci(num) {
  if (num > 0) {
    let arr = [0, 1];

    for (i = 0; i < num; i++) {
      let val = arr[i] + arr[i + 1];
      arr.push(val);
    }

    return arr.slice(0,num).join("-");
  } else {
    console.log("Please enter the num value greater than 1");
    return false;
  }
}

console.log(generateFibonacci(10));